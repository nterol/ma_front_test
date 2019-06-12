import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #1b5098;
  align-content: center;
`;

export const NavLeft = styled.div`
  margin: 16px 8px;
  display: flex;
  flex-direction: row;
`;

export const NotificationButton = styled.button`
  background: ${props => (props.unread > 0 ? "#7ed321" : "#cccccc")};
  border-color: ${props => (props.unread > 0 ? "#7ed321" : "#cccccc")};
  color: white;
  border-radius: 5px;
  margin-left: 8px;
  max-width: 80px;
  padding-bottom: 4px;
`;

export const Unread = styled.span`
  margin-left: 8px;
`;

export const RealtorContainer = styled.div`
  background: #114080;
  border-left: 2px solid #fff;
  padding: 8px;
  display: flex;
  flex-direction: row;
  text-align: center;
`;

export const RealtorTitle = styled.h1`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const RealtorDropdownContainer = styled.div`
  margin-top: 8px;
  margin-left: 8px;
`;

export const ProfilPicture = styled.img`
  border-radius: 50%;
  border-color: #fff;
  background: #fff;
  width: 50px;
  height: 50px;
  margin: 0 8px;
`;
