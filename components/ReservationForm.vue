<template>
  <ReservationCard
    :price="price"
    :currency="currency"
    :rating="rating"
    :ratingQuantity="ratingQuantity"
  >
    <DatesInput
      @click="onInputClicked"
      @blur="onInputClicked(null)"
    />
    <Calendar
      :dateFrom="dateFrom"
      :dateTo="dateTo"
    />
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
      console.log(`*********onInputClicked`, type);
    }
  }
}
</script>
