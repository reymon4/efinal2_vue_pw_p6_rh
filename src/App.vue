<template>
  <nav-bar-vue></nav-bar-vue>
  <router-view></router-view>
</template>

<script>
import NavBarVue from "./components/NavBar.vue";

export default {
  components: {
    NavBarVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
