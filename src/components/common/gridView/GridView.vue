<template>
  <div class="grid-view" ref="gridView">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GridView",
  props: {
    cols: {
      type: Number,
      default: 2,
    },
    hMargin: {
      type: Number,
      default: 8,
    },
    vMargin: {
      type: Number,
      default: 8,
    },
    itemSpace: {
      type: Number,
      default: 8,
    },
    linSpace: {
      type: Number,
      default: 8,
    },
  },
  mounted() {
    setTimeout(this._autoLayout, 20);
  },
  updated() {
    this._autoLayout();
  },

  methods: {
    _autoLayout() {
      //   1、获取gridViewEl和children
      let gridEl = this.$refs.gridView;
      let children = gridEl.children;

      //2、设置gridViewEl的内边距
      gridEl.style.padding = `${this.vMargin}px ${this.hMargin}px`;
    
    // 3、计算item的宽度
    let itemWidth = (gridEl.clientWidth - 2 *this.hMargin)
    },
  },
};
</script>
<style scoped>
.grid-view {
  display: flex;
  flex-wrap: wrap;
}
</style>
