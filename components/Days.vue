<template>
  <div class="days">
    <div class="days__names">
      <span v-for="day in days">{{ day }}</span>
    </div>
    <div class="days__list-of-days">
      <span
        v-for="day in previousMonthDays"
        class="days__list-of-days-item days__list-of-days-item--not-current-month"
      >
        {{ day }}
      </span>
      <span
        v-for="day in currentMonthDays"
        class="days__list-of-days-item"
        :class="{
          'days__list-of-days-item--today': isCurrentMonthShown && day === currentDayIndex,
          'days__list-of-days-item--selected': day === startDay || day === endDay,
          'days__list-of-days-item--hovered': day >= startDay && day < lastDayWithHoverBackground,
          'days__list-of-days-item--hovered-last': day === lastDayWithHoverBackground && day !== startDay
        }"
        @mouseover="onMouseOver(day)"
        @click="onDayClicked(day)"
      >
        {{ day }}
      </span>
      <span
        v-for="day in nextMonthDays"
        class="days__list-of-days-item days__list-of-days-item--not-current-month"
      >
        {{ day }}
      </span>
    </div>
  </div>
</template>
<script>
import moment from 'moment';

import CONFIG from '~/config/config.json';

export default {
  name: 'Days',

  props: {
    date: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      days: moment.weekdaysShort(),
      startDay: null,
      endDay: null,
      lastDayWithHoverBackground: null,
    };
  },

  watch: {
    date() {
      this.startDay = null;
      this.endDay = null;
    },
  },

  computed: {
    previousMonthDays() {
      const number = moment(this.date).add(-1, 'month').daysInMonth();
      const allDaysArray = Array.from(Array(number + 1).keys());

      return allDaysArray.slice(allDaysArray.length - this.firstDayIndex, allDaysArray.length);
    },

    nextMonthDays() {
      return (this.days.length - 1) - this.lastDayIndex;
    },

    currentMonthDays() {
      return moment(this.date).daysInMonth();
    },

    firstDayIndex() {
      return moment(this.date).startOf('month').day()
    },

    lastDayIndex() {
      return moment(this.date).endOf('month').day();
    },

    currentDayIndex() {
      return moment(new Date()).days();
    },

    isCurrentMonthShown() {
      return moment(new Date()).format(CONFIG.DATE_FORMATS.MONTH) === moment(this.date).format(CONFIG.DATE_FORMATS.MONTH);
    }
  },

  methods: {
    /**
     * @function
     * @param {String} day
     */
    onDayClicked(day) {
      if (!this.startDay) {
        this.startDay = day;
      } else {
        this.endDay = day;

        this.$emit('rangeChosen', {
          start: this.startDay,
          end: this.endDay
        });
      }
    },

    /**
     * @function
     * @param {String} day
     */
    onMouseOver(day) {
      if (this.startDay) {
        this.lastDayWithHoverBackground = day;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.days {
  $root: &;

  width: 100%;
  background-color: white;

  &__names {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    color: #c6c6c6;
    padding: 10px;
  }

  &__list-of-days {
    margin-top: 5px;
    display: flex;
    flex-wrap: wrap;
  }

  &__list-of-days-item {
    cursor: pointer;

    width: calc(100% / 7);
    font-size: 15px;
    margin: 5px 0;
    padding: 10px;

    &--today {
      border: 2px solid #17d09e;
      border-radius: 50%;
    }

    &--not-current-month {
      color: #c6c6c6;
      pointer-events: none;
    }

    &--hovered {
      color: #17d09e;
      background-color: #d0f5eb;
    }

    &:hover {
      color: white;
      background-color: #17d09e;
      border-radius: 50%;
    }

    #{$root}  &--selected {
      color: white;
      background-color: #17d09e;
      border-radius: 50% 0 0 50%;
    }

    #{$root} &--hovered-last {
      border-radius: 0 50% 50% 0;
    }
  }
}
</style>
