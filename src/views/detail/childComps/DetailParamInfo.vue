<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length">
    <table
      v-for="(table, index) in paramInfo.sizes"
      class="info-size"
      :key="index"
    >
      <tr v-for="(tr,index) in table" :key="index">
         <td v-for="(item,index) in tr" :key="index">{{item}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info,index) in paramInfo.infos" :key="index">
        <td class="info-param-key">{{info.key}}</td>
        <td class="info-param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-image" v-if="paramInfo.image.length">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.param-info{
  padding: 20px 15px;
  font-size: 15px;
  border-bottom: 5px solid #f2f5f8;
}

.param-info table{
  width: 100%;
  border-collapse: collapse;
}

.param-info table tr{
  height: 42px;
}

.param-info table tr td{
  border-bottom: 1px solid rgba(100,100,100,.1);
}

.info-param-key{
  width: 95px;
}

.info-param{
  border-top: 1px solid rgba(100,100,100,.1);
}
.info-param-value{
  color: #eb4848;
}

.info-image img{
  width: 100%;
}

</style>
