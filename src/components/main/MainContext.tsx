import React from "react";

import { AllRealtorsType } from "../../types";
import { dataFetcher } from "./utils";

export type MainContextType = {
  realtor: string;
  setRealtors: (arg: string) => void;
  allRealtors: AllRealtorsType;
  notifications: number;
  setNotifications: (value: number) => void;
};

const MainContext = React.createContext<{}>({
  realtor: "",
  setRealtors: () => {},
  setNotifications: () => {},
  allRealtors: {},
  currentReal: {},
  notifications: 0
});

type Props = {
  children: React.ReactNode;
};

type State = Pick<MainContextType, "realtor" | "allRealtors" | "notifications">;

export class MainProvider extends React.Component<Props, State> {
  state = {
    realtor: "101",
    allRealtors: {},
    currentReal: {},
    notifications: 0
  };

  async componentDidMount() {
    const data = await dataFetcher();
    const { unread_messages: notifications } = data[this.state.realtor];

    this.setState({
      notifications,
      allRealtors: data
    });
  }

  setRealtors = async (realtor: string) => {
    const { allRealtors }: any = this.state;

    const { unread_messages: notifications } = allRealtors[realtor];

    this.setState({
      realtor,
      notifications
    });
  };

  setNotifications = (value: number) => {
    this.setState(({ notifications: prevNotifs }) => ({
      notifications: prevNotifs + value
    }));
  };

  render() {
    const { realtor, allRealtors, notifications } = this.state;
    return (
      <MainContext.Provider
        value={{
          realtor,
          setRealtors: this.setRealtors,
          setNotifications: this.setNotifications,
          allRealtors,
          notifications
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

export const withMainContext = <P extends object>(
  Component: React.ComponentType<P>
) => {
  const ComponentWithMainContext: React.FunctionComponent<
    Pick<P, Exclude<keyof P, keyof MainContextType>>
  > = props => (
    <MainContext.Consumer>
      {data => <Component {...props as P} {...data} />}
    </MainContext.Consumer>
  );
  return ComponentWithMainContext;
};
