import { mount } from "@vue/test-utils";
import { advanceTo, clear } from "jest-date-mock";

import Days from "~/components/Days";
import Calendar from "@/components/Calendar.vue";

describe("Calendar", () => {
  const requiredProps = {
    dateFrom: "2020-01-11",
    dateTo: "2021-01-11"
  };

  const createWrapper = (methods = {}) => {
    return mount(Calendar, {
      propsData: requiredProps,
      methods
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

  it(`should match initial snapshot`, () => {
    const wrapper = createWrapper();

    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  describe("data", () => {
    it(`should prepare basic data correctly`, () => {
      expect(Calendar.data()).toMatchInlineSnapshot(`
        Object {
          "month": "2000-01-01T00:00:00.000Z",
        }
      `);
    });
  });

  describe("events", () => {
    describe("startRangeChosen", () => {
      it(`should be called when startRangeChosen event fired on Days component`, () => {
        const wrapper = createWrapper();

        wrapper.vm.$emit = jest.fn();

        wrapper.findComponent(Days).vm.$emit("startRangeChosen");

        expect(wrapper.vm.$emit).toHaveBeenCalledWith('startRangeChosen');
      });
    });

    describe("endRangeChosen", () => {
      it(`should be called when endRangeChosen event fired on Days component`, () => {
        const mockedData = { start: '2020-01-20' };
        const wrapper = createWrapper();

        wrapper.vm.$emit = jest.fn();

        wrapper.findComponent(Days).vm.$emit("endRangeChosen", mockedData);

        expect(wrapper.vm.$emit).toHaveBeenCalledWith('endRangeChosen', mockedData);
      });
    });
  });
});
