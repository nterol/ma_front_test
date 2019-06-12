import React from "react";
import { withMainContext, MainContextType } from "../main/MainContext";
import { RealtorType } from "../../types";
import { RealtorDropdownContainer } from "./styles";

type Props = Pick<MainContextType, "allRealtors" | "setRealtors">;

type State = { value: string };

class SRealtorDropdown extends React.Component<Props, State> {
  state = {
    value: ""
  };

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    this.setState({ value }, () => this.props.setRealtors(value));
  };

  render() {
    const { value } = this.state;
    return (
      <RealtorDropdownContainer>
        <select value={value} onChange={this.handleChange}>
          {Object.values(this.props.allRealtors).map((realtor: RealtorType) => (
            <option key={realtor.id} value={realtor.id}>
              {realtor.name}
            </option>
          ))}
        </select>
      </RealtorDropdownContainer>
    );
  }
}

export const RealtorDropdown = withMainContext(SRealtorDropdown);
