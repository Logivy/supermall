<!--
 * @Descripttion: 
 * @version: 
 * @Author: Logivy
 * @Date: 2021-07-29 22:18:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-03 22:17:20
-->
<template>
  <swiper class="detail-swiper">
    <swiper-item  v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="" @load="imageLoad"/>
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
 
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
   
};
</script>
<style scoped>
.detail-swiper{
  height: 300px;
  overflow: hidden;

}
</style>
