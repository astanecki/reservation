import { mount } from "@vue/test-utils";

import ReservationForm from "@/components/ReservationForm.vue";
import { INPUT_TYPES } from "~/components/DatesInput";

describe("ReservationForm", () => {
  const propsData = {
    price: 298,
    currency: "zł",
    rating: 4.5,
    ratingQuantity: 123,
    dateFrom: "2017-03-16",
    dateTo: "2017-03-20"
  };

  const createWrapper = () => {
    return mount(ReservationForm, {
      propsData
    });
  };

  it("is a Vue instance", () => {
    const wrapper = createWrapper();

    expect(wrapper.vm).toBeTruthy();
  });

  it(`should match snapshot when props given`, () => {
    const wrapper = createWrapper();

    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  describe("data", () => {
    it(`should return correctly prepared object`, () => {
      expect(ReservationForm.data()).toMatchInlineSnapshot(`
        Object {
          "chosenInputType": "",
          "dateRange": Object {},
        }
      `);
    });
  });

  describe("methods", () => {
    let wrapper;

    describe("onInputClicked", () => {
      const mockedType = "mocked-type";

      beforeEach(() => {
        wrapper = createWrapper();

        wrapper.setData({
          chosenInputType: mockedType
        });
      });

      it(`should set given type when is different than current one`, () => {
        wrapper.vm.onInputClicked(`different-than-${mockedType}`);

        expect(wrapper.vm.chosenInputType).toEqual(
          `different-than-${mockedType}`
        );
      });

      it(`should set empty string when given type is equal as current one`, () => {
        wrapper.vm.onInputClicked(mockedType);

        expect(wrapper.vm.chosenInputType).toEqual("");
      });
    });

    describe("onRangeChosen", () => {
      const dateObject = {};

      beforeEach(() => {
        wrapper = createWrapper();
      });

      it(`should set dateRange`, () => {
        wrapper.vm.onRangeChosen(dateObject);

        expect(wrapper.vm.dateRange).toBe(dateObject);
      });

      it(`should set chosenInputType`, () => {
        wrapper.vm.onRangeChosen(dateObject);

        expect(wrapper.vm.chosenInputType).toBeNull();
      });
    });

    describe("onStartRangeChosen", () => {
      it(`should set chosenInputType`, () => {
        const wrapper = createWrapper();

        wrapper.setData({
          chosenInputType: undefined
        });

        wrapper.vm.onStartRangeChosen();

        expect(wrapper.vm.chosenInputType).toEqual(INPUT_TYPES.CHECK_OUT);
      });
    });
  });
});
