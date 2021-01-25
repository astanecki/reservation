<template>
  <div class="container">
    <div>
      <ReservationForm
        :price="price"
        :currency="currency"
        :rating="rating"
        :dateFrom="dateFrom"
        :dateTo="dateTo"
        :ratingQuantity="ratingQuantity"
      />
    </div>
  </div>
</template>

<script>
import ReservationForm from "~/components/ReservationForm";

export default {
  components: {
    ReservationForm,
  },

  data() {
    return {
      price: 298,
      currency: 'zł',
      rating: 4.5,
      ratingQuantity: 123,
      dateFrom: '2017-03-16',
      dateTo: '2017-03-20',
    };
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
