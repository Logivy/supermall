<!--
 * @Descripttion: 
 * @version: 
 * @Author: Logivy
 * @Date: 2021-05-16 09:36:06
 * @LastEditors: Logivy
 * @LastEditTime: 2021-07-26 21:11:11
-->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    // 创建better-scroll
    let wrapper = this.$refs.wrapper;
    this.scroll = BScroll(wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
      // 更新自动计算image
      // observeImage: true,
      // observeDOM: true,
    });

    // 监听滚动位置
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    }

    // 监听上滚动到底部
    if(this.pullUpLoad){
    this.scroll.on("pullingUp", () => {
      // 上拉加载更多
      this.$emit("pullUpLoad");
    });
    }

  },
  methods: {
    // backTop
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, 300);
    },

    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>
<style scoped>
</style>
