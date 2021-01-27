<template>
  <div class="reservation-card">
    <label class="reservation-card__price">{{ price }} {{ currency }}</label>

    <div class="reservation-card__rating">
      <div class="reservation-card__rating-stars">
        <Stars :number="rating"/>
      </div>
      <div class="reservation-card__rating-quantity">{{ ratingQuantity }}</div>
    </div>

    <div class="reservation-card__divider"></div>

    <slot></slot>
  </div>
</template>
<script>
import Stars from "~/components/Stars";

export default {
  name: 'ReservationCard',

  components: {
    Stars,
  },

  props: {
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    ratingQuantity: {
      type: Number,
      required: true,
    }
  }
}
</script>
<style lang="scss" scoped>
.reservation-card {
  display: flex;
  flex-direction: column;

  width: 330px;
  height: 575px;
  sborder: 1px solid #c6c6c6;
  border-radius: 5px;
  padding: 25px;
  background-color: #e6e6e6;

  &__price {
    font-size: 25px;
    font-weight: 700;
    display: flex;
    margin-bottom: 5px;
  }

  &__rating {
    display: flex;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  &__rating-stars {
    margin-right: 5px;
  }

  &__divider {
    border: 1px solid #c6c6c6;
    margin-bottom: 15px;
  }

  &__rating-quantity {
    font-size: 12px;
    margin-top: 2px;
  }
}
</style>
