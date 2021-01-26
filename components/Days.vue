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
        :class="{ 'days__list-of-days-item--today': day === currentDayIndex }"
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
    };
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
      return moment(this.date).days();
    }
  }
}
</script>
<style lang="scss" scoped>
.days {
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
  }
}
</style>
