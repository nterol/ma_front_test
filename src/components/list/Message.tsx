import React from "react";

import { MessageContainer, MessageHeader, MessageHead } from "./styles";
import { MessageType } from "../../types";
import { MessageDate, MessageSubject, MessageBody } from "./styles";

type Props = {
  message: MessageType;
  readMessage: (arg: string) => void;
};

export const Message: React.FunctionComponent<Props> = ({
  readMessage,
  message: { id, type, read, subject, body, contact, date }
}) => {
  const getMessageType = () => {
    if (type === "email") return "mail";
    return type;
  };

  const week = [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi"
  ];

  const getMoment = () => {
    const d = new Date(date);
    const today = new Date();
    if (today > d) return week[d.getDay()];
    return `${d.getHours()}:${d.getMinutes()}`;
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget;
    readMessage(id);
  };
  return (
    <MessageContainer
      data-test="message-container"
      id={id.toString()}
      onClick={handleClick}
    >
      <MessageHeader>
        <MessageHead>
          <i
            className={`mypro-icon mypro-icon-${getMessageType()}`}
            style={{ color: `${!read ? "#0874e4" : "#ccc"}`, fontSize: "20px" }}
          />
          <span style={{ margin: "8px" }}>{`${contact.firstname} ${
            contact.lastname
          }`}</span>
        </MessageHead>
        <MessageDate>{getMoment()}</MessageDate>
      </MessageHeader>
      <MessageSubject read={read}>{subject}</MessageSubject>
      <MessageBody>{`${body.split(".")[0]}...`}</MessageBody>
    </MessageContainer>
  );
};
