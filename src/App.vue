<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar></main-tab-bar>
    <icon></icon>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";
import NavBar from "components/common/navbar/NavBar";
import Icon from "components/content/Icon/Icon.vue";
import SvgIcon from "components/content/Icon/svg.vue";

export default {
  name: "App",
  components: {
    MainTabBar,
    NavBar,
    Icon,
    SvgIcon,
  },
};
</script>

<style scoped>
@import "assets/css/base.css";
</style>
