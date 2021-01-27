<template>
  <ReservationCard
    :price="price"
    :currency="currency"
    :rating="rating"
    :ratingQuantity="ratingQuantity"
  >
    <DatesInput
      :focusedInputType="chosenInputType"
      @click="onInputClicked"
    />
    <Calendar
      v-if="chosenInputType"
      @startRangeChosen="onStartRangeChosen"
      @endRangeChosen="onRangeChosen"
    />

    {{ dateRange }}
  </ReservationCard>
</template>
<script>
import Calendar from "~/components/Calendar";
import ReservationCard from "~/components/ReservationCard";
import DatesInput, { INPUT_TYPES } from "~/components/DatesInput";

export default {
  name: 'ReservationForm',

  components: {
    ReservationCard,
    DatesInput,
    Calendar,
  },

  data() {
    return {
      chosenInputType: '',
      dateRange: null,
    };
  },

  props: {
    price: {
      type: Number,
    },
    currency: {
      type: String,
    },
    rating: {
      type: Number,
    },
    dateFrom: {
      type: String,
    },
    dateTo: {
      type: String,
    },
    ratingQuantity: {
      type: Number,
    }
  },

  methods: {
    /**
     * @function
     * @param {String} type
     */
    onInputClicked(type) {
      this.chosenInputType = type === this.chosenInputType ? '' : type;
    },

    /**
     * @function
     * @param {Object} date
     */
    onRangeChosen(date) {
      this.dateRange = date;
      this.chosenInputType = null;
    },

    /**
     * @function
     */
    onStartRangeChosen() {
      this.chosenInputType = INPUT_TYPES.CHECK_OUT;
    },
  }
}
</script>
