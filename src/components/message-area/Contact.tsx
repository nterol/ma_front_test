import React from "react";
import { ContactType } from "../../types";
import { ContactContainer, ContactName, ContactGrid } from "./styles";
import { MessageDate } from "../list/styles";

type Props = {
  contact: ContactType;
};

export const Contact: React.FunctionComponent<Props> = ({ contact }) => {
  return (
    <ContactContainer>
      <ContactName>{`${contact.firstname} ${contact.lastname}`} </ContactName>
      <ContactGrid>
        <span>Email:</span>
        <MessageDate>{contact.email}</MessageDate>
      </ContactGrid>
      <ContactGrid>
        <span>Téléphone</span>
        <MessageDate>{contact.phone}</MessageDate>
      </ContactGrid>
    </ContactContainer>
  );
};
