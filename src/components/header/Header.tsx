import React from "react";
import { MainContextType, withMainContext } from "../main/MainContext";

import logo from "../../assets/logo-meilleursagentspro-neg.svg";
import { Notification } from "./Notification";
import { HeaderContainer, NavLeft } from "./styles";
import { Realtor } from "./Realtor";

interface Props extends MainContextType {}

export const SHeader: React.FunctionComponent<Props> = ({
  allRealtors,
  realtor
}) => {
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

export const Header = withMainContext(SHeader);
