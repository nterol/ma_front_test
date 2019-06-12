import React from "react";

import { mount } from "enzyme";

import { Contact } from "../Contact";

const fakeContact = {
  firstname: "Perdro",
  lastname: "winter",
  email: "pedro.winter@example.com",
  phone: "06060606"
};

describe("Contact test suite", () => {
  it("renders without crashing", () => {
    mount(<Contact contact={fakeContact} />);
  });
});
