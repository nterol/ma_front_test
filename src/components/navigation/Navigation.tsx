import React from "react";
import axios from "axios";
import { withMainContext, MainContextType } from "../main/MainContext";
import { List } from "../list/List";
import { MessageArea } from "../message-area/MessageArea";
import { MessageType } from "../../types";
import { markAsRead } from "./utils";

type State = {
  messages: Array<MessageType>;
  selected: number | undefined;
  current: string;
};

type Props = Pick<MainContextType, "realtor" | "setNotifications">;

class SNavigation extends React.Component<Props, State> {
  state = {
    messages: [],
    selected: undefined,
    current: ""
  };

  fetchMessages = async () => {
    const { REACT_APP_API_URL: API_URL } = process.env;
    try {
      const { data } = await axios.get(
        `${API_URL}/realtors/${this.props.realtor}/messages?page=2`
      );

      return data;
    } catch (e) {
      console.log(e);
    }
  };

  shouldItFetch = async () => {
    const { realtor } = this.props;
    const { messages, current } = this.state;
    if (realtor && (!messages.length || current !== realtor)) {
      const data = await this.fetchMessages();

      this.setState({ messages: data, selected: data[0].id, current: realtor });
    }
  };

  // markAsRead = async (id: string) => {
  //   const { realtor } = this.props;
  //   try {
  //     const { REACT_APP_API_URL: API_URL } = process.env;
  //     await axios.post(
  //       `${API_URL}/realtors/${realtor}/messages/${id}`,
  //       "read=1"
  //     );
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

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
    const { messages, selected } = this.state;

    this.shouldItFetch();

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <List messages={messages} readMessage={this.readMessage} />
        <MessageArea
          message={messages.find(({ id: messageId }) => messageId === selected)}
        />
      </div>
    );
  }
}

export const Navigation = withMainContext(SNavigation);
