import React from "react";
import { withMainContext, MainContextType } from "../main/MainContext";
import { RealtorContainer, RealtorTitle, ProfilPicture } from "./styles";
import { RealtorDropdown } from "./RealtorDropdown";

interface Props extends MainContextType {}

const SRealtor: React.FunctionComponent<Props> = ({ allRealtors, realtor }) => {
  const condition = realtor && Object.values(allRealtors).length;
  return (
    <RealtorContainer>
      {condition ? (
        <ProfilPicture src={allRealtors[parseInt(realtor)].logo} />
      ) : null}

      {condition ? (
        <RealtorTitle>{allRealtors[parseInt(realtor)].name}</RealtorTitle>
      ) : null}
      <RealtorDropdown />
    </RealtorContainer>
  );
};

export const Realtor = withMainContext(SRealtor);
