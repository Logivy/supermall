<!--
 * @Descripttion: 
 * @version: 
 * @Author: Logivy
 * @Date: 2021-08-10 22:01:23
 * @LastEditors: Logivy
 * @LastEditTime: 2021-08-15 00:51:02
-->
<template>
  <div v-if="Object.keys(goods).length" class="base-info">
      <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
            <span class="n-price">{{goods.newPrice}}</span>
            <span class="o-price">{{goods.oldPrice}}</span>
            <span class="discount">{{goods.discount}}</span>
        </div>
  </div>
</template>
<script>
export default {
  name: "DetailBaseInfo",
  props: {
      goods:{
          type:Object,
      }
  },
};
</script>
<style scoped>
.base-info{
    margin-top: 15px;
    padding: 0 8px;
    color:#999;
    border-bottom: 5px solid #f2f5f8;
}

.info-title{
    color:#222;
}

.info-price{
    margin-top:10px;
}



</style>
