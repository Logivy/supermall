<!--
 * @Descripttion: 
 * @version: 
 * @Author: Logivy
 * @Date: 2021-07-29 20:40:30
 * @LastEditors: Logivy
 * @LastEditTime: 2021-08-18 22:45:37
-->
<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper  :topImages="topImages"  />
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShopInfo from './childComps/DetailShopInfo';

import { getDetail,GoodsInfo,Shop } from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
  },
  data() {
    return {
      iid: null,
      topImages: null,
      goods:{},
      shop:{}
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
      
      //3、获取商家信息
      this.shop = new Shop(data.shopInfo);
      console.log(this.shop);
    });
  },

};
</script>
<style scoped>
</style>

