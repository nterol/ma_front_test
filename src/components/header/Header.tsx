import React from "react";

import { Notification } from "./Notification";

import { Realtor } from "./Realtor";
import { HeaderContainer, NavLeft } from "./styles";
import logo from "../../assets/logo-meilleursagentspro-neg.svg";

export const Header: React.FunctionComponent = () => {
  return (
    <HeaderContainer>
      <NavLeft>
        <div>
          <img alt="meilleurs agents pro logo" src={logo} />
        </div>
        <Notification />
      </NavLeft>
      <Realtor />
    </HeaderContainer>
  );
};
