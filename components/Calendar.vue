<template>
  <div class="calendar-wrapper">
    <span class="calendar-wrapper__dates-label">{{ labels.dates }}</span>
    <v-date-picker v-model="range" is-range>
      <template v-slot="{ inputValue, inputEvents }">
        <input
          :value="labels.checkIn"
          v-on="inputEvents.start"
        />
        <input
          :value="labels.checkOut"
          v-on="inputEvents.end"
        />
      </template>
    </v-date-picker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labels: {
        // TODO i18n
        dates: 'Dates',
        checkIn: 'Check in',
        checkOut: 'Check out',
      },
      range: {
        start: new Date(2020, 9, 12),
        end: new Date(2020, 9, 16),
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.calendar-wrapper {
  &__dates-wrapper {
    font-weight: 700;
  }
}
</style>
