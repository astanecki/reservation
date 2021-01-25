<template>
  <div class="calendar-wrapper">
    <span class="calendar-wrapper__dates-label">{{ labels.dates }}</span>

    <v-date-picker
      v-if="range.start && range.end"
      v-model="range"
      is-range
    >
      <template v-slot="{ inputValue, inputEvents }">
        <div class="calendar-wrapper__inputs-wrapper">
          <input
            :value="labels.checkIn"
            v-on="inputEvents.start"
            readonly
          />
          <input
            :value="labels.checkOut"
            v-on="inputEvents.end"
            readonly
          />
        </div>
      </template>
    </v-date-picker>
  </div>
</template>
<script>
export default {
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
      labels: {
        // TODO i18n
        dates: 'Dates',
        checkIn: 'Check in',
        checkOut: 'Check out',
      },
      range: {
        start: '',
        end: '',
      },
    };
  },

  mounted() {
    this.range.start = new Date(this.dateFrom);
    this.range.end = new Date(this.dateTo);
  },
};
</script>
<style lang="scss" scoped>
.calendar-wrapper {
  display: flex;
  flex-direction: column;

  &__dates-label {
    text-align: left;
    font-weight: 700;
    color: #848484;
    font-size: 13px;
    margin-bottom: 5px;
  }

  &__inputs-wrapper {
    padding: 4px;
    display: flex;
    border: 1px solid #c6c6c6;
  }

  input {
    cursor: pointer;
    font-size: 15px;
    width: 50%;

    background-color: transparent;
    border: 0;

    &:focus {
      outline: none;
    }
  }
}
</style>
