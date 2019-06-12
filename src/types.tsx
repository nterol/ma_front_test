export type RealtorType = {
  id: string;
  logo: string;
  name: string;
  unread_messages: number;
};

export type AllRealtorsType = {
  [n: number]: RealtorType;
};

export type ContactType = {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
};

export type MessageType = {
  body: string;
  contact: ContactType;
  date: string;
  id: number;
  read: boolean;
  subject: string;
  type: string;
};
