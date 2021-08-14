<!--
 * @Descripttion: 
 * @version: 
 * @Author: Logivy
 * @Date: 2021-05-10 22:19:54
 * @LastEditors: Logivy
 * @LastEditTime: 2021-07-26 21:46:18
-->
<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      isLoad: false,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("swiperLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>
<style scoped>
</style>
