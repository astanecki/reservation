import { mount } from "@vue/test-utils";
import { advanceTo, clear } from "jest-date-mock";

import Days from "~/components/Days";

describe("Days", () => {
  const requiredProps = {};
  const createWrapper = (propsData = requiredProps) => {
    return mount(Days, {
      propsData: requiredProps,
    });
  };

  beforeEach(() => {
    advanceTo("2000-01-01");
  });

  afterEach(() => {
    clear();
  });

  it("is a Vue instance", () => {
    const wrapper = createWrapper();

    expect(wrapper.vm).toBeTruthy();
  });

  describe('data', () => {
    it(`should prepare basic data object correctly`, () => {
      expect(Days.data()).toMatchInlineSnapshot();
    });
  });

  describe("snapshots", () => {
    it(`should match initial snapshot`, () => {
      const wrapper = createWrapper();

      expect(wrapper.vm.$el).toMatchSnapshot();
    });
  });

  describe('watch', () => {

  });

  describe('computed', () => {

  });

  describe('methods', () => {

  });

  describe('events', () => {

  });
});
