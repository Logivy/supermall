<!--
 * @Descripttion: 
 * @version: 
 * @Author: Logivy
 * @Date: 2021-07-29 20:40:30
 * @LastEditors: Logivy
 * @LastEditTime: 2021-08-17 00:20:51
-->
<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper  :topImages="topImages"  />
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from './childComps/DetailBaseInfo';

import { getDetail,GoodsInfo } from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  data() {
    return {
      iid: null,
      topImages: null,
      goods:{},
    };
  },
  created() {
    //   1、保持传入的iid
    this.iid = this.$route.params.iid;
    // 2、根据iid请求
    getDetail(this.iid).then((res) => {
      // 顶部图片
      // 1、获取轮播图数据
      const data = res.result
      this.topImages = data.itemInfo.topImages;
      
      // 2、获取商品信息
      this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
    });
  },

};
</script>
<style scoped>
</style>

