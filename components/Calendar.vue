<template>
  <div class="calendar-wrapper">
    <MonthSelector />
    <Days />
  </div>
</template>
<script>
import MonthSelector from '~/components/MonthSelector';
import Days from '~/components/Days';

export default {
  components: {
    MonthSelector,
    Days,
  },

  props: {
    dateFrom: {
      type: String,
      required: true,
    },
    dateTo: {
      type: String,
      required: true,
    }
  },

  data() {
    return {

    };
  },

  computed: {

  },

  mounted() {

  },

  methods: {

  }
};
</script>
<style lang="scss" scoped>
.calendar-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
