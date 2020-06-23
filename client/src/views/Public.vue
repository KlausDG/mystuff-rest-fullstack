<template>
  <div>
    <!-- <button @click="sortItems('A-Z')">A-Z</button>
    <button @click="sortItems('Z-A')">Z-A</button>
    <button @click="sortItems('Menor Preço')">Menor Preço</button>
    <button @click="sortItems('Maior Preço')">Maior Preço</button> -->
    <div class="products-container">
      <item v-for="(item, index) in availableItems" v-bind:key="index" v-bind:item="item"/>

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

  computed: {
    availableItems: function() {
      let vm = this;
      return this.items.filter(function(e) {
        return e.isAvailable && vm.canShow(e.category);
      });
    }
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
