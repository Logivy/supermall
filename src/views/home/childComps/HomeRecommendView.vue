<!--
 * @Descripttion: 
 * @version: 
 * @Author: Logivy
 * @Date: 2021-05-10 22:33:04
 * @LastEditors: Logivy
 * @LastEditTime: 2021-08-26 00:22:27
-->
<template>
  <div class="recommend">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="recommend-item"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <span>{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;

  padding: 10px 0 20px 0;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
}

.recommend-item a {
  display: block;
}

.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}

.recommend-item span {
  display: inline-block;
  width: 100%;
}
</style>
