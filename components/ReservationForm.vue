<template>
  <ReservationCard
    :price="price"
    :currency="currency"
    :rating="rating"
    :ratingQuantity="ratingQuantity"
  >
    <DatesInput
      @click="onInputClicked"
    />
    <Calendar
      v-if="chosenInputType"
      @rangeChosen="onRangeChosen"
    />

    {{ dateRange }}
  </ReservationCard>
</template>
<script>
import Calendar from "~/components/Calendar";
import ReservationCard from "~/components/ReservationCard";
import DatesInput from "~/components/DatesInput";

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
    onInputClicked(type) {
      this.chosenInputType = type;
    },

    onRangeChosen(data) {
      this.dateRange = data;
      this.chosenInputType = null;
    },
  }
}
</script>
