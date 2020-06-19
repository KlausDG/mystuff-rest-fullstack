<template>
  <div class="product">
    <img :src="item.image" :alt="'imagem do produto de nome ' + item.title" class="product-image" />
    <h1 class="product-title">{{ item.title }}</h1>
    <p class="product-category">
      {{ item.category }} -
      <span v-if="item.isSealed" class="color-contrast">Lacrado</span>
    </p>
    <h2 class="product-price color-contrast">
      R$ {{ item.currentPrice }}
      <span v-if="item.oldPrice < item.currentPrice" class="faded">{{item.oldPrice}}</span>
    </h2>
    <button class="product-btn"> {{ btnText }} </button>
  </div>
</template>

<script>
export default {
  name: "product",
  props: {
    item: Object
  },
  data() {
    return {
      btnText: "ENTRAR EM CONTATO"
    }
  },
};
</script>

<style scoped>

</style>
