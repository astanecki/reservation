<template>
  <div class="month-selector">
    <span
      class="month-selector__arrow"
      @click="changeMonth(-1)"
    >
      &#8249;
    </span>
    <span class="month-selector__header">
      {{ headerLabel }}
    </span>
    <span
      class="month-selector__arrow"
      @click="changeMonth(+1)"
    >
      &#8250;
    </span>
  </div>
</template>
<script>
import moment from 'moment';

import CONFIG from '~/config/config.json';

export default {
  name: 'MonthSelector',

  data() {
    return {
      currentDate: moment(),
    };
  },

  computed: {
    headerLabel() {
      const { YEAR, MONTH } = CONFIG.DATE_FORMATS;

      return `${this.currentDate.format(MONTH)} ${this.currentDate.format(YEAR)}`;
    },
  },

  methods: {
    /**
     * @function
     * @param {Number} direction
     */
    changeMonth(direction) {
      this.currentDate = moment(this.currentDate).add(direction, 'month');

      this.$emit('monthChanged', this.currentDate);
    },
  }
}
</script>
<style lang="scss" scoped>
.month-selector {
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: white;
  font-weight: 700;
  background-color: #17d09e;
  padding: 10px 15px;

  &__arrow {
    cursor: pointer;

    padding: 0 5px;
    color: black;
    font-size: 28px;
  }
}
</style>
