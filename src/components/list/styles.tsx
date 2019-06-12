import styled from "styled-components";

export const ListContainer = styled.div`
  width: 30%;
  height: 800px;
  overflow: scroll;
`;

export const MessageContainer = styled.div`
  border-bottom: 1px solid #e3e3e3;
  padding: 32px 16px;
`;

export const MessageHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const MessageHead = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MessageDate = styled.div`
  color: #329ded;
`;

type Props = {
  read: boolean;
};

export const MessageSubject = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: ${({ read }: Props) => (read ? "#acacac" : "#000")};
  margin-bottom: 8px;
`;

export const MessageBody = styled.div`
  font-size: 16px;
  color: #acacac;
`;
