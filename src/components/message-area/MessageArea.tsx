import React from "react";
import { withMainContext } from "../main/MainContext";

import { CurrentMessage } from "./CurrentMessage";
import { MessageAreaContainer } from "./styles";

import { MessageType } from "../../types";

type Props = {
  message: MessageType | undefined;
};

const SMessageArea: React.FunctionComponent<Props> = ({ message }) => (
  <MessageAreaContainer>
    {message ? (
      <CurrentMessage message={message} />
    ) : (
      <p>Veuillez selectionner une agence</p>
    )}
  </MessageAreaContainer>
);

export const MessageArea = withMainContext(SMessageArea);
