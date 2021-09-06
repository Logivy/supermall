
<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" />
    <scroll class="wrapper" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages" @imageLoad="imageLoad" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-Image-info :image-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info
        ref="param"
        :param-info="goodsParam"
      ></detail-param-info>
      <detail-comment-info
        ref="comment"
        :comment-info="commentInfo"
      ></detail-comment-info>
      <detail-recommend-info
        ref="recommend"
        :recommend-list="recommendList"
      ></detail-recommend-info>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <detail-bottom-bar @addToCart="addToCart" />
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
import DetailBottomBar from "./childComps/DetailBottomBar";

import {backTopMixin} from 'common/mixins';
import {
  getDetail,
  getRecommend,
  GoodsInfo,
  Shop,
  GoodsParam,
} from "network/detail";
import { debounce } from "common/utils";
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
    DetailBottomBar,
    Scroll,
  },

  mixins:[backTopMixin],

  data() {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {},
      recommendList: [],
      themeTopYs: [],
      getThemeTopY: null,
    };
  },

  created() {
    this._getDatailData();
    this._getRecommentData();
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];

      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      console.log(this.themeTopYs);
    });
  },
  methods: {
        _getRecommentData() {
      getRecommend().then((res, err) => {
        if (err) return;
        this.recommendList = res.data.list;
      });
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

    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index] + 44, 100);
    },
    contentScroll(position){
      let positionY = -position.y
      // for (let i= 0; this.themeTopYs.length;i++) {
      //     // if(positionY >= this.themeTopYs[i] ) {
      //     //   console.log(i)
      //     // }
      // }
      this.listenShowBackTop(position);
    },

    addToCart(){
      const obj = {};
      obj.iid = this.iid;
      obj.imgURL = this.topImages[0];
      obj.title = this.goods.title;
      obj.desc = this.goods.desc;
      obj.newPrice = this.goods.realPrice;
      this.$store.dispatch("addCart",obj)
    },
    imageLoad() {
      this.getThemeTopY();
      console.log(123);
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
  height: calc(100% - 44px - 58px);
  overflow: hidden;
}
</style>

