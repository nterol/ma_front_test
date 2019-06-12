import React from "react";
import {
  ContactName,
  MessageContentContainer,
  BodyContent,
  ContentDate
} from "./styles";
import { MessageType } from "../../types";

type Props = {
  message: MessageType;
};

export const MessageContent: React.FunctionComponent<Props> = ({ message }) => {
  return (
    <MessageContentContainer>
      <ContactName>{message.contact.firstname}</ContactName>
      <ContentDate>{message.date}</ContentDate>
      <BodyContent>{message.body}</BodyContent>
    </MessageContentContainer>
  );
};
