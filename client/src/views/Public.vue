<template>
  <div>
    <div class="products-container">
      <item
        v-for="(item, index) in availableItems.slice(startItem, startItem + displayAmount)"
        v-bind:key="index"
        v-bind:item="item"
      />
    </div>
    <div class="pagination">
      <button
        class="pagination-btn pagination-control-btn"
        :class="{'disabled': currentPage === 1}"
        v-on:click="changePage(currentPage - 1)"
      >
        <icon-base class="pagination-icon" icon-name="previous">
          <previous-icon></previous-icon>
        </icon-base>
      </button>
      <ul class="pagination-item-list">
        <li
          v-for="n in pageCount"
          :key="n"
          class="pagination-item"
          :class="{'current': n == currentPage, 'radius-left': n === 1, 'radius-right':  n === pageCount}"
          v-on:click="changePage(n)"
        >
          <button class="pagination-btn" :class="{'border-right': n < pageCount}">{{n}}</button>
        </li>
      </ul>
      <button
        class="pagination-btn pagination-control-btn"
        :class="{'disabled': currentPage === pageCount-1}"
        v-on:click="changePage(currentPage + 1)"
      >
        <icon-base class="pagination-icon" icon-name="next">
          <next-icon></next-icon>
        </icon-base>
      </button>
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
      order: "A-Z",
      displayAmount: 1,
      currentPage: 1
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
    },
    totalItems: function() {
      return this.items.length;
    },
    startItem: function() {
      return this.displayAmount * (this.currentPage - 1);
    },
    endItem: function() {
      return this.startItem + this.displayAmount;
    },
    pageCount: function() {
      return Math.ceil(this.totalItems / this.displayAmount);
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
    },

    changePage(page) {
      this.currentPage = page;
    }
  }
};
</script>
