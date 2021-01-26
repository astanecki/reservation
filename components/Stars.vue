<template>
  <div class="stars" v-html="stars" />
</template>
<script>
export default {
  name: 'Stars',

  props: {
    number: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      filledStar: `&#9733;`,
      emptyStar: `&#x2606;`,
      allStarsNumber: 5,
    };
  },

  computed: {
    stars() {
      let htmlContent = '';
      let i = 0;

      for(i; i < this.allStarsNumber; i++) {
        htmlContent += i <= (this.number - 1) ? `<span class="stars--filled">${this.filledStar}</span>` : this.emptyStar;
      }

      return htmlContent;
    }
  },
}
</script>
<style lang="scss">
.stars {
  &--filled {
    color: #12a67e;
    margin-right: 1px;
  }
}
</style>
