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
    onInputClicked() {
      console.log(`*********onInputClicked`, );
    }
  }
}
</script>
