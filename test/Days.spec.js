import { mount } from "@vue/test-utils";
import { advanceTo, clear } from "jest-date-mock";
import moment from "moment";

import Days from "~/components/Days";

describe("Days", () => {
  const requiredProps = {};

  const createWrapper = (methods = {}) => {
    return mount(Days, {
      propsData: requiredProps,
      methods,
    });
  };

  beforeEach(() => {
    advanceTo("2000-03-01");

    requiredProps.month = moment();
  });

  afterEach(() => {
    clear();
  });

  it("is a Vue instance", () => {
    const wrapper = createWrapper();

    expect(wrapper.vm).toBeTruthy();
  });

  describe("data", () => {
    it(`should prepare basic data object correctly`, () => {
      expect(Days.data()).toMatchInlineSnapshot(`
        Object {
          "days": Array [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
          ],
          "endDay": null,
          "lastDayWithHoverBackground": null,
          "startDay": null,
        }
      `);
    });
  });

  describe("snapshots", () => {
    it(`should match initial snapshot`, () => {
      const wrapper = createWrapper();

      expect(wrapper.vm.$el).toMatchSnapshot();
    });
  });

  describe("watch", () => {
    describe("month", () => {
      let wrapper;

      beforeEach(() => {
        wrapper = createWrapper();

        wrapper.setData({
          startDay: 1,
          endDay: 3,
          lastDayWithHoverBackground: 2
        });
      });

      it(`should set startDay to null`, () => {
        wrapper.vm.$options.watch.month.call(wrapper.vm);

        expect(wrapper.vm.startDay).toBeNull();
      });

      it(`should set endDay to null`, () => {
        wrapper.vm.$options.watch.month.call(wrapper.vm);

        expect(wrapper.vm.endDay).toBeNull();
      });

      it(`should set lastDayWithHoverBackground to null`, () => {
        wrapper.vm.$options.watch.month.call(wrapper.vm);

        expect(wrapper.vm.lastDayWithHoverBackground).toBeNull();
      });
    });
  });

  describe("computed", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = createWrapper();
    });

    it(`should prepare previousMonthDays correctly`, () => {
      expect(wrapper.vm.previousMonthDays).toMatchInlineSnapshot(`
        Array [
          27,
          28,
          29,
        ]
      `);
    });

    it(`should prepare nextMonthDays correctly`, () => {
      expect(wrapper.vm.nextMonthDays).toMatchInlineSnapshot(`1`);
    });

    it(`should prepare currentMonthDays correctly`, () => {
      expect(wrapper.vm.currentMonthDays).toMatchInlineSnapshot(`31`);
    });

    it(`should prepare firstDayIndex correctly`, () => {
      expect(wrapper.vm.firstDayIndex).toMatchInlineSnapshot(`3`);
    });

    it(`should prepare lastDayIndex correctly`, () => {
      expect(wrapper.vm.lastDayIndex).toMatchInlineSnapshot(`5`);
    });

    it(`should prepare currentDayIndex correctly`, () => {
      expect(wrapper.vm.currentDayIndex).toMatchInlineSnapshot(`3`);
    });

    it(`should prepare isCurrentMonthShown correctly`, () => {
      expect(wrapper.vm.isCurrentMonthShown).toMatchInlineSnapshot(`true`);
    });
  });

  describe("methods", () => {
    let wrapper;

    describe('onDayClicked', () => {
      let onStartRangeChosenSpy;
      let onEndRangeChosenSpy;

      beforeEach(() => {
        onStartRangeChosenSpy = jest.fn();
        onEndRangeChosenSpy = jest.fn();

        wrapper = createWrapper({
          onStartRangeChosen: onStartRangeChosenSpy,
          onEndRangeChosen: onEndRangeChosenSpy,
        });
      });

      it(`should call onStartRangeChosen when there is no startDay`, () => {
        wrapper.setData({
          startDay: undefined,
        });

        wrapper.vm.onDayClicked(2);

        expect(onStartRangeChosenSpy).toHaveBeenCalledWith(2);
      });

      it(`shouldn't call onEndRangeChosen when there is no startDay`, () => {
        wrapper.setData({
          startDay: undefined,
        });

        wrapper.vm.onDayClicked(2);

        expect(onEndRangeChosenSpy).not.toHaveBeenCalled();
      });

      it(`should call onEndRangeChosen when day is bigger than startDay`, () => {
        wrapper.setData({
          startDay: 1,
        });

        wrapper.vm.onDayClicked(2);

        expect(onEndRangeChosenSpy).toHaveBeenCalledWith(2);
      });

      it(`shouldn't call onStartRangeChosen when day is bigger than startDay`, () => {
        wrapper.setData({
          startDay: 1,
        });

        wrapper.vm.onDayClicked(2);

        expect(onStartRangeChosenSpy).not.toHaveBeenCalled();
      });
    });

    describe('onStartRangeChosen', () => {
      beforeEach(() => {
        wrapper = createWrapper();

        wrapper.vm.$emit = jest.fn();
      });

      it(`should set this.startDay`, () => {
        wrapper.setData({ startDay: 11 });

        wrapper.vm.onStartRangeChosen(31);

        expect(wrapper.vm.startDay).toEqual(31);
      });

      it(`should call $emit`, () => {
        wrapper.vm.onStartRangeChosen(31);

        expect(wrapper.vm.$emit).toHaveBeenCalledWith('startRangeChosen');
      });
    });

    describe('onEndRangeChosen', () => {
      beforeEach(() => {
        wrapper = createWrapper();

        wrapper.vm.$emit = jest.fn();
      });

      it(`should set endDay`, () => {
        wrapper.setData({ endDay: 11 });

        wrapper.vm.onEndRangeChosen(29);

        expect(wrapper.vm.endDay).toEqual(29);
      });

      it(`should call $emit`, () => {
        wrapper.setData({ startDay: 11 });

        wrapper.vm.onEndRangeChosen(29);

        expect(wrapper.vm.$emit).toHaveBeenCalledWith('endRangeChosen', {
          month: '2000-03',
          start: 11,
          end: 29,
        });
      });
    });

    describe('onMouseOver', () => {
      beforeEach(() => {
        wrapper = createWrapper();
      });

      it(`should set lastDayWithHoverBackground when startDay is defined`, () => {
        wrapper.setData({ startDay: 11 });

        wrapper.vm.onMouseOver(5);

        expect(wrapper.vm.lastDayWithHoverBackground).toEqual(5);
      });

      it(`shouldn't set lastDayWithHoverBackground when startDay is undefined`, () => {
        wrapper.setData({
          startDay: undefined,
          lastDayWithHoverBackground: 1
        });

        wrapper.vm.onMouseOver(5);

        expect(wrapper.vm.lastDayWithHoverBackground).toEqual(1);
      });
    });
  });
});
