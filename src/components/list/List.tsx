import React from "react";
import { withMainContext, MainContextType } from "../main/MainContext";
import { ListContainer } from "./styles";
import { Message } from "./Message";

type HeritedProps = Pick<MainContextType, "allRealtors" | "realtor">;

interface Props extends HeritedProps {
  messages: Array<any>;
  readMessage: (arg: string) => void;
  page: number;
}

const SList: React.FunctionComponent<Props> = ({
  messages,
  readMessage,
  page
}) => (
  <ListContainer>
    {messages.length ? (
      messages.map(message => (
        <Message
          readMessage={readMessage}
          key={`${page}-${message.id}`}
          message={message}
        />
      ))
    ) : (
      <div>Veuillez selectionner une agence</div>
    )}
  </ListContainer>
);

export const List = withMainContext(SList);
