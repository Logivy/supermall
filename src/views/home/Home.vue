<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      ref="tabControl1"
      :titles="['流行', '新款', '精品']"
      @tabClick="tabClick"
      class="tab-control"
      v-show="isTabFixed"
    />
    <!-- <div class="content"> -->
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullUpLoad="loadMore"
    >
      <home-swiper :banners="banners" @swiperLoad="swiperLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        ref="tabControl2"
        :titles="['流行', '新款', '精品']"
        @tabClick="tabClick"
        class="{ fixed: isTabFixed }"
      />
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <!-- </div> -->
  </div>
</template>
<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/HomeRecommendView";
import FeatureView from "./childComps/Feature";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";
import debounce from "common/utils";

export default {
  name: "Home",

  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,

    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },

  data() {
    return {
      // 拿到请求数据
      banners: [],
      dKeyword: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
    };
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata();

    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  mounted() {
    // 监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh);

    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },

  methods: {
    /**
     * 事件监听
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 上拉加载更多
    loadMore() {
      setTimeout(() => {
        this.getHomeGoods(this.currentType);
      }, 1000);
      this.$refs.scroll.finishPullUp();
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
    swiperLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

    /**
     * 网络请求
     */
    getHomeMultidata() {
      getHomeMultidata()
        .then((result) => {
          this.banners = result.data.banner.list;
          this.dKeyword = result.data.dKeyword.list;
          this.recommends = result.data.recommend.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then((res) => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>
<style scoped>
.home-nav {
  /* 设置home的导航栏背景 */
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  /* 
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.fiexd {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}

.tab-control {
  position: relative;
  z-index: 9;
}
</style>
