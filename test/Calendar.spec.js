import { mount } from "@vue/test-utils";
import Calendar from "@/components/Calendar.vue";

// todo add to jest configuration not to add Vue.use in each case
import Vue from 'vue';
import VCalendar from 'v-calendar';

Vue.use(VCalendar);

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

  it("is a Vue instance", () => {
    const wrapper = createWrapper();

    expect(wrapper.vm).toBeTruthy();
  });

  it(`should match initial snapshot`, () => {
    const wrapper = createWrapper();

    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  describe("computed", () => {
    const wrapper = createWrapper();

    expect(wrapper.vm.summaryInputValue).toMatchInlineSnapshot(
      `"1/11/2020 - 1/11/2021"`
    );
  });

  describe("mounted", () => {
    it(`should call setDefaultRange`, () => {
      const setDefaultRange = jest.fn();

      createWrapper({ setDefaultRange });

      expect(setDefaultRange).toHaveBeenCalledWith();
    });
  });

  describe("methods", () => {
    it(`should set range.start and range.end based on props`, () => {
      const wrapper = createWrapper();

      wrapper.setData({
        range: {
          start: "2022-02-22",
          end: "2033-03-01"
        }
      });

      wrapper.vm.setDefaultRange();

      expect(wrapper.vm.range).toMatchInlineSnapshot(`
        Object {
          "end": 2021-01-11T00:00:00.000Z,
          "start": 2020-01-11T00:00:00.000Z,
        }
      `);
    });
  });
});
