<template>
  <div class="item">
    <img :src="product.img" :alt="product.title" />
    <router-link :to="'/vue2-store/shop/' + product.id" class="link">{{
      product.title
    }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object | Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.item___wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item {
  max-width: 48%;
  text-align: center;
  p {
    font-size: 22px;
  }
}
</style>
