import { mount } from "@vue/test-utils";
import { advanceTo, clear } from "jest-date-mock";
import moment from "moment";

import MonthSelector from "~/components/MonthSelector";

describe("MonthSelector", () => {
  const requiredProps = {};
  const createWrapper = (methods = {}) => {
    return mount(MonthSelector, {
      propsData: requiredProps,
      methods
    });
  };

  beforeEach(() => {
    advanceTo("2000-01-01");

    requiredProps.value = moment();
  });

  afterEach(() => {
    clear();
  });

  it("is a Vue instance", () => {
    const wrapper = createWrapper();

    expect(wrapper.vm).toBeTruthy();
  });

  it(`should match initial snapshot`, () => {
    const wrapper = createWrapper();

    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  describe("computed", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = createWrapper();
    });

    it(`should return proper headerLabel value`, () => {
      expect(wrapper.vm.headerLabel).toMatchInlineSnapshot(`"January 2000"`);
    });
  });

  describe("methods", () => {
    let wrapper;

    describe("changeMonth", () => {
      it(`should call $emit`, () => {
        wrapper = createWrapper();

        wrapper.vm.$emit = jest.fn();

        wrapper.vm.changeMonth(+1);

        expect(wrapper.vm.$emit).toHaveBeenCalledWith(
          "input",
          moment(requiredProps.month).add(1, "month")
        );
      });

      it(`should be called when first arrow fired click event`, () => {
        const selfSpy = jest.fn();

        wrapper = createWrapper({
          changeMonth: selfSpy
        });

        wrapper
          .findAll(".month-selector__arrow")
          .at(0)
          .trigger("click");

        expect(selfSpy).toHaveBeenCalledWith(-1);
      });

      it(`should be called when second arrow fired click event`, () => {
        const selfSpy = jest.fn();

        wrapper = createWrapper({
          changeMonth: selfSpy
        });

        wrapper
          .findAll(".month-selector__arrow")
          .at(1)
          .trigger("click");

        expect(selfSpy).toHaveBeenCalledWith(+1);
      });
    });
  });
});
