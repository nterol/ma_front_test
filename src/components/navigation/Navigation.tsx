import React from "react";
import { withMainContext, MainContextType } from "../main/MainContext";
import { List } from "../list/List";
import { MessageArea } from "../message-area/MessageArea";
import { MessageType } from "../../types";
import { fetchMessages, markAsRead } from "./utils";
import { NavigationContainer } from "./styles";

type State = {
  messages: Array<MessageType>;
  selected: number | undefined;
  current: string;
  page: number;
};

type Props = Pick<MainContextType, "realtor" | "setNotifications">;

class SNavigation extends React.Component<Props, State> {
  state = {
    messages: [],
    selected: undefined,
    current: "",
    page: 1
  };

  shouldItFetch = async () => {
    const { realtor } = this.props;
    const { messages, current, page } = this.state;
    if (realtor && (!messages.length || current !== realtor)) {
      const data = await fetchMessages(page, realtor);

      this.setState({ messages: data, selected: data[0].id, current: realtor });
    }
  };

  readMessage = (id: string) => {
    console.log(id);
    const { messages } = this.state;
    const { realtor, setNotifications } = this.props;
    const selected = parseInt(id, 10);
    const index = messages.findIndex(
      ({ id: messageId }: MessageType) => messageId === selected
    );

    const message = messages[index];
    /* 
        for some weird reason that I don't understand ,
        TS does not let me access the property as message.read
    */
    const { read } = message;

    if (!read) {
      markAsRead(id, realtor);
      setNotifications(-1);
    }
    this.setState({ selected });
  };

  render() {
    const { messages, selected, page } = this.state;

    this.shouldItFetch();

    return (
      <NavigationContainer>
        <List messages={messages} readMessage={this.readMessage} page={page} />
        <MessageArea
          message={messages.find(({ id: messageId }) => messageId === selected)}
        />
      </NavigationContainer>
    );
  }
}

export const Navigation = withMainContext(SNavigation);
