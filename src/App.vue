<!--
 * @Descripttion: 
 * @version: 
 * @Author: Logivy
 * @Date: 2021-05-09 19:02:46
 * @LastEditors: Logivy
 * @LastEditTime: 2021-07-31 22:03:39
-->
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "App",
  components: {
    MainTabBar,
    NavBar,
  },
};
</script>

<style scoped>
@import "assets/css/base.css";
</style>
