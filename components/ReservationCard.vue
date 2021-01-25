<template>
  <div class="reservation-card">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ReservationCard',

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
      // in format YYYY-MM-DD
      type: String,
    },
    dateTo: {
      // in format YYYY-MM-DD
      type: String,
    }
  }
}
</script>
<style lang="scss" scoped>
.reservation-card {
  width: 483px;
  height: 620px;
  border: 1px solid gray;
}
</style>
