<!--
 * @Descripttion: 
 * @version: 
 * @Author: Logivy
 * @Date: 2021-07-29 22:18:36
 * @LastEditors: Logivy
 * @LastEditTime: 2021-08-10 22:00:28
-->
<template>
  <swiper class="detail-swiper">
    <swiper-item  v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="" />
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
