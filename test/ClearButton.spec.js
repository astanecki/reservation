import { mount } from "@vue/test-utils";

import ClearButton from "~/components/ClearButton";

describe("ClearButton", () => {
  const createWrapper = () => {
    return mount(ClearButton);
  };

  it("is a Vue instance", () => {
    const wrapper = createWrapper();

    expect(wrapper.vm).toBeTruthy();
  });

  it(`should match initial snapshot`, () => {
    const wrapper = createWrapper();

    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});
