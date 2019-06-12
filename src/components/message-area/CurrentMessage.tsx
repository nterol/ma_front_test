import React from "react";

import { CurrentMessageContainer } from "./styles";
import { MessageType } from "../../types";
import { Contact } from "./Contact";
import { MessageContent } from "./MessageContent";

type Props = {
  message: MessageType;
};

export const CurrentMessage: React.FunctionComponent<Props> = ({ message }) => {
  return (
    <CurrentMessageContainer>
      <Contact contact={message.contact} />
      <MessageContent message={message} />
    </CurrentMessageContainer>
  );
};
