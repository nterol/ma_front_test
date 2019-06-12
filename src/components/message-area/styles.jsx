import styled from "styled-components";

export const MessageAreaContainer = styled.div`
  width: 70%;
`;

export const CurrentMessageContainer = styled.div`
  background: #cccc;
  padding: 32px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ContactContainer = styled.div`
  background: #fff;
  border-radius: 5px;
  margin-bottom: 32px;
  padding: 16px 32px;
`;

export const ContactName = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const ContactGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const MessageContentContainer = styled.div`
  background: #fff;
  border-radius: 5px;
  margin-bottom: 16px;
  padding: 32px;
  height: 80%;
`;

export const ContentDate = styled.div`
  font-size: 16px;
  color: #acacac;
  margin-bottom: 32px;
`;

export const BodyContent = styled.div`
  font-size: 16px;
`;
