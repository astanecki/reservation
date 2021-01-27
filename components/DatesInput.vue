<template>
  <div class="dates-input">
    <div class="dates-input__label">
      {{ labels.dates }}
    </div>

    <div class="dates-input__wrapper">
      <input
        :value="labels.checkIn"
        :class="{ 'dates-input--focused': focusedInputType === INPUT_TYPES.CHECK_IN }"
        @click="$emit('click', INPUT_TYPES.CHECK_IN)"
        @blur="$emit('blur')"
        readonly
      />
      <span class="dates-input__arrow">&#8594;</span>
      <input
        :value="labels.checkOut"
        :class="{ 'dates-input--focused': focusedInputType === INPUT_TYPES.CHECK_OUT }"
        @click="$emit('click', INPUT_TYPES.CHECK_OUT)"
        @blur="$emit('blur')"
        readonly
      />
    </div>
  </div>
</template>
<script>
/**
 * @enum {String}
 */
export const INPUT_TYPES = {
  CHECK_IN: 'check-in',
  CHECK_OUT: 'check-out',
};

export default {
  name: 'DatesInput',

  props: {
    focusedInputType: {
      type: String,
      default: '',
    }
  },

  data() {
    return {
      labels: {
        dates: 'Dates',
        checkIn: 'Check In',
        checkOut: 'Check Out',
      },
      INPUT_TYPES,
    }
  },
}
</script>
<style lang="scss" scoped>
.dates-input {
  &__label {
    text-align: left;
    font-weight: 700;
    color: #848484;
    font-size: 13px;
    margin-bottom: 5px;
  }

  &__wrapper {
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

  & &--focused {
    outline: none;
    background-color: #8be7ce;
  }
}
</style>
