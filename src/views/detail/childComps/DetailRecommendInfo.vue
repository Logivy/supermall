<!--
 * @Descripttion: 
 * @version: 
 * @Author: Logivy
 * @Date: 2021-08-26 14:38:55
 * @LastEditors: Logivy
 * @LastEditTime: 2021-08-26 15:56:55
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: Logivy
 * @Date: 2021-08-26 14:38:55
 * @LastEditors: Logivy
 * @LastEditTime: 2021-08-26 14:56:50
-->
<template>
<div class="recommend-info" v-if="Object.keys(recommendList).length">
    <div class="info-title">热门推荐</div>
    <!-- <div class="recommend-list" v-for="(item,index) in recommendList" :key="index">
        <img :src="item.image" >
    </div> -->
    <goods-list :goods="recommendList"></goods-list>
</div>
</template>
<script>
import GoodsList from "components/content/goods/GoodsList";

export default {
   name:'DetailRecommendInfo',
   props:{
       recommendList:{
           type:Array,
           default(){
               return []
           }
       }
   },
   components:{
       GoodsList
   }
   
}
</script>
<style scoped>
.recommend-info{
    padding: 5px;
}

.info-title{
    line-height: 40px;
    padding-left: 10px;
    font-size: 15px;
    color: #333;
}
</style>
