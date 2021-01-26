<template>
  <div class="calendar-wrapper">
    <MonthSelector v-model="currentDate" />
    <Days
      :date="currentDate"
      @rangeChosen="data => $emit('rangeChosen', data)"
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
      currentDate: moment(),
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
