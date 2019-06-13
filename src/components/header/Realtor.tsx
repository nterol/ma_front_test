import React from "react";
import { withMainContext, MainContextType } from "../main/MainContext";
import { RealtorContainer, RealtorTitle, ProfilPicture } from "./styles";
import { RealtorDropdown } from "./RealtorDropdown";

interface Props extends MainContextType {}

const SRealtor: React.FunctionComponent<Props> = ({ allRealtors, realtor }) => {
  const isRealtorSelected = realtor && Object.values(allRealtors).length;
  return (
    <RealtorContainer>
      {isRealtorSelected ? (
        <React.Fragment>
          <ProfilPicture src={allRealtors[realtor].logo} />
          <RealtorTitle>{allRealtors[realtor].name}</RealtorTitle>
        </React.Fragment>
      ) : null}
      <RealtorDropdown />
    </RealtorContainer>
  );
};

export const Realtor = withMainContext(SRealtor);
