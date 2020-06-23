<template>
  <section class="container">
    <div class="filter">
      <h1 class="filter-current">
        {{ currentFilter }}
        (
        <span class="filter-current-secondary">{{ quantity }}</span>
        )
      </h1>
      <ul class="filter-container">
        <li class="filter-item">
          <p class="filter-item-label">Ordenar por</p>
          <select class="filter-item-dropdown filter-item-input" name="sort" id="sort">
              <option value="a-z">A - Z</option>
              <option value="z-a">Z - A</option>
              <option value="asc">Menor Preço</option>
              <option value="desc">Maior Preço</option>
          </select>
        </li>
        <li class="filter-item">
          <p class="filter-item-label">Exibir</p>
          <select class="filter-item-dropdown filter-item-input" name="display-qtd" id="display-qtd">
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="48">48</option>
              <option value="96">96</option>
              <option value="todos">Todos</option>
          </select>
        </li>
        <li class="filter-item">
          <input class="filter-item-input filter-item-search" type="text" name="search" id="search" placeholder="Procure por um livro"/>
          <icon-base class="search-icon" icon-name="search"><search-icon></search-icon></icon-base>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentFilter: "Todos",
      quantity: 400,
    };
  }
};
</script>
