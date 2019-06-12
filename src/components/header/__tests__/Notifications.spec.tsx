import React from "react";
import { shallow, mount } from "enzyme";

import { Notification, SNotification } from "../Notification";

import "jest-styled-components";

describe("Notification test suite", () => {
  it("should render without crashing", () => {
    shallow(<Notification />);
  });
  test("The button should be green", () => {
    const notificationButton = mount(<SNotification notifications={8} />).find(
      'button[data-test="notification-button"]'
    );

    expect(notificationButton).toHaveStyleRule("background", "#7ed321");
  });
  test("The button should be grey", () => {
    const notificationButton = mount(<SNotification notifications={0} />).find(
      'button[data-test="notification-button"]'
    );

    expect(notificationButton).toHaveStyleRule("background", "#cccccc");
  });
});
