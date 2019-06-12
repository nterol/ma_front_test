import React from "react";
import { withMainContext, MainContextType } from "../main/MainContext";
import { ListContainer } from "./styles";
import { Message } from "./Message";

type HeritedProps = Pick<MainContextType, "allRealtors" | "realtor">;

interface Props extends HeritedProps {
  messages: Array<any>;
  readMessage: (arg: string) => void;
}

const SList: React.FunctionComponent<Props> = ({
  allRealtors,
  realtor,
  messages,
  readMessage
}) => (
  <ListContainer>
    {messages.length ? (
      messages.map(message => (
        <Message readMessage={readMessage} key={message.id} message={message} />
      ))
    ) : (
      <div>Veuillez selectionner une agence</div>
    )}
  </ListContainer>
);

export const List = withMainContext(SList);
