<template>
  <ReservationCard
    :price="price"
    :currency="currency"
    :rating="rating"
    :ratingQuantity="ratingQuantity"
  >
    <Calendar
      :dateFrom="dateFrom"
      :dateTo="dateTo"
    />
  </ReservationCard>
</template>
<script>
import Calendar from "~/components/Calendar";
import ReservationCard from "~/components/ReservationCard";

export default {
  name: 'ReservationForm',

  components: {
    Calendar,
    ReservationCard,
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
  }
}
</script>
