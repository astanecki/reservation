import { mount } from "@vue/test-utils";

import DatesInput, { INPUT_TYPES } from "~/components/DatesInput";

describe("DatesInput", () => {
  const createWrapper = (propsData = {}) => {
    return mount(DatesInput, {
      propsData,
    });
  };

  it("is a Vue instance", () => {
    const wrapper = createWrapper();

    expect(wrapper.vm).toBeTruthy();
  });

  describe("named exports", () => {
    it(`should correctly export INPUT_TYPES`, () => {
      expect(INPUT_TYPES).toMatchInlineSnapshot(`
        Object {
          "CHECK_IN": "check-in",
          "CHECK_OUT": "check-out",
        }
      `);
    });
  });

  describe("snapshots", () => {
    it(`should match initial snapshot`, () => {
      const wrapper = createWrapper();

      expect(wrapper.vm.$el).toMatchSnapshot();
    });

    it(`should match snapshot when given prop is equal to INPUT_TYPES.CHECK_OUT`, () => {
      const wrapper = createWrapper({ focusedInputType: INPUT_TYPES.CHECK_OUT });

      expect(wrapper.vm.$el).toMatchSnapshot();
    });

    it(`should match snapshot when given prop is equal to INPUT_TYPES.CHECK_IN`, () => {
      const wrapper = createWrapper({ focusedInputType: INPUT_TYPES.CHECK_IN });

      expect(wrapper.vm.$el).toMatchSnapshot();
    });
  });

  describe("data", () => {
    it(`should prepare basic data correctly`, () => {
      expect(DatesInput.data()).toMatchInlineSnapshot(`
        Object {
          "INPUT_TYPES": Object {
            "CHECK_IN": "check-in",
            "CHECK_OUT": "check-out",
          },
          "labels": Object {
            "checkIn": "Check In",
            "checkOut": "Check Out",
            "dates": "Dates",
          },
        }
      `);
    });
  });

  describe("events", () => {
    describe("click", () => {
      let wrapper;

      beforeEach(() => {
        wrapper = createWrapper();

        wrapper.vm.$emit = jest.fn();
      });

      it(`should be called when click event fired on first input`, () => {
        wrapper.findAll('input').at(0).trigger('click');

        expect(wrapper.vm.$emit).toHaveBeenCalledWith('click', INPUT_TYPES.CHECK_IN);
      });

      it(`should be called when click event fired on second input`, () => {
        wrapper.findAll('input').at(1).trigger('click');

        expect(wrapper.vm.$emit).toHaveBeenCalledWith('click', INPUT_TYPES.CHECK_OUT)
      });
    });
  });
});
