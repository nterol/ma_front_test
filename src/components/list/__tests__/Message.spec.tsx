import React from "react";

import { Message } from "../Message";
import { Notification } from "../../header/Notification";
import { shallow } from "enzyme";

const fakeProps = {
  message: {
    id: 28,
    subject: "kjh",
    body: "",
    type: "sms",
    contact: {
      firstname: "Perdro",
      lastname: "winter",
      email: "pedro.winter@example.com",
      phone: "06060606"
    },
    read: false,
    date: "hier"
  },
  readMessage: () => {}
};

describe("Message test suite", () => {
  it("should render", () => {
    shallow(<Message {...fakeProps} />);
  });
});
