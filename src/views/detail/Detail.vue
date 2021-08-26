<!--
 * @Descripttion: 
 * @version: 
 * @Author: Logivy
 * @Date: 2021-07-29 20:40:30
 * @LastEditors: Logivy
 * @LastEditTime: 2021-08-26 16:05:09
-->
<template>
  <div id="detail">
    <detail-nav-bar />
    <scroll class="wrapper">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-Image-info :image-info="detailInfo" />
      <detail-param-info :param-info="goodsParam"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
      <detail-recommend-info :recommend-list="recommendList"></detail-recommend-info>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />

  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar";
import Scroll from "components/common/scroll/Scroll";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailImageInfo from "./childComps/DetailImageInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailRecommendInfo from "./childComps/DetailRecommendInfo";

import BackTop from "@/components/content/backTop/BackTop";


import {
  getDetail,
  getRecommend,
  GoodsInfo,
  Shop,
  GoodsParam,
} from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImageInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    Scroll,
    BackTop
  },
  data() {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {},
      recommendList: []
    };
  },
  created() {
    this._getDatailData();
    this._getRecommentData();
  },
  methods: {

    _getRecommentData(){
      getRecommend().then((res,err)=>{
        if(err) return 
        this.recommendList = res.data.list
      })
    },
    _getDatailData() {
      //   1、保持传入的iid
      this.iid = this.$route.params.iid;
      // 2、根据iid请求
      getDetail(this.iid).then((res) => {
        // 顶部图片
        // 1、获取轮播图数据
        const data = res.result;

        // navbar信息
        this.topImages = data.itemInfo.topImages;

        // 2、获取商品信息
        this.goods = new GoodsInfo(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );

        //3、获取商家信息
        this.shop = new Shop(data.shopInfo);

        // 4.详情的信息
        this.detailInfo = data.detailInfo;

        // 5.商品参数
        this.goodsParam = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );

        // 6.评价信息
        this.commentInfo = data.rate.list[0];
      });
    },
    contentScroll(position) {
      // 判断backTop
      if (position.y < -500) {
        this.isShowBackTop = true;
      } else {
        this.isShowBackTop = false;
      }

      // 判断tabControl2吸顶
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
  },
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.wrapper {
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>

