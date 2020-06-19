<template>
  <div>
    <button @click="sortItems('A-Z')">A-Z</button>
    <button @click="sortItems('Z-A')">Z-A</button>
    <button @click="sortItems('Menor Preço')">Menor Preço</button>
    <button @click="sortItems('Maior Preço')">Maior Preço</button>
    <div v-for="(item, index) in items" v-bind:key="index">
      <div v-if="canShow(item.category)">
        <p>{{item.title}}</p>
        <!-- <img src="https://thumbnails-photos.amazon.com/v1/thumbnail/OukdnsmEQdmO-mKHDGyp7g?viewBox=575&ownerId=AHWBTWJRHNSH8" alt=""> -->
        <img :src="item.image" alt="imagem" />
        <p>{{item.price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  data() {
    return {
      items: [],
      filter: "all",
      order: "A-Z"
    };
  },

  created() {
    this.fetch();
  },

  methods: {
    fetch(url) {
      url = url || "all";

      Axios.get(url).then(res => {
        this.items = res.data;
      });
    },

    canShow(category) {
      return this.filter == category || this.filter == "all";
    },

    sortItems(val) {
      this.items.sort(function(a, b) {
        if (val == "A-Z") {
          return a.title > b.title ? 1 : b.title > a.title ? -1 : 0;
        } else if (val == "Z-A") {
          return a.title > b.title ? -1 : b.title > a.title ? 1 : 0;
        } else if (val == "Menor Preço") {
          return a.price - b.price;
        } else if (val == "Maior Preço") {
          return b.price - a.price;
        }
      });
    }
  }
};
</script>

<style>
</style>