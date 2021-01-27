<template>
  <div class="calendar-wrapper">
    <MonthSelector
      v-model="month"
    />
    <Days
      :month="month"
      @startRangeChosen="$emit('startRangeChosen')"
      @endRangeChosen="data => $emit('endRangeChosen', data)"
    />
  </div>
</template>
<script>
import moment from 'moment';

import MonthSelector from '~/components/MonthSelector';
import Days from '~/components/Days';

export default {
  components: {
    MonthSelector,
    Days,
  },

  data() {
    return {
      /**
       * @type {String}
       */
      month: moment(),
    };
  },
};
</script>
<style lang="scss" scoped>
.calendar-wrapper {
  $root: &;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 250px;
  position: relative;
}
</style>
