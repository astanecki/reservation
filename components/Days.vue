<template>
  <div class="days">
    <div class="days__names">
      <span v-for="day in days">{{ day }}</span>
    </div>

    {{ numberOfDays }}, {{ firstDayNameOfMonth }}
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
    numberOfDays() {
      return moment(this.date).daysInMonth();
    },

    firstDayNameOfMonth() {
      return moment(this.date).startOf('month').format('ddd');
    }
  }
}
</script>
<style lang="scss" scoped>
.days {
  width: 100%;
  height: 250px;
  background-color: white;
  padding: 10px;

  &__names {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    color: #c6c6c6;
  }
}
</style>
