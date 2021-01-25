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
          <span class="calendar-wrapper__arrow">&#8594;</span>
          <input
            :value="labels.checkOut"
            v-on="inputEvents.end"
            readonly
          />
        </div>

        <div class="calendar-wrapper__summary">
          <span>{{ summaryInputValue }}</span>
          <button @click="onClearClicked">{{ labels.clear }}</button>
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
        checkIn: 'Check In',
        checkOut: 'Check Out',
        clear: 'Clear',
      },
      range: {
        start: '',
        end: '',
      },
    };
  },

  computed: {
    summaryInputValue() {
      return `${this.range.start.toLocaleDateString()} - ${this.range.end.toLocaleDateString()}`;
    },
  },

  mounted() {
    this.range.start = new Date(this.dateFrom);
    this.range.end = new Date(this.dateTo);
  },

  methods: {
    onClearClicked() {

    },
  }
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
    margin-bottom: 15px;
  }

  &__arrow {
    font-size: 25px;
    margin-bottom: 7px;
    line-height: 15px;
    margin-right: 20px;
  }

  input {
    cursor: pointer;
    font-size: 15px;
    width: 50%;

    line-height: 15px;
    background-color: transparent;
    border: 0;

    &:focus {
      outline: none;
    }
  }
}
</style>
