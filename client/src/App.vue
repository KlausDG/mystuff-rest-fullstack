<template>
  <div id="app">
    <main-header></main-header>
    <sub-header></sub-header>
    <filter-menu></filter-menu>
    <router-view />
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@import "sass/Main.scss";
</style>