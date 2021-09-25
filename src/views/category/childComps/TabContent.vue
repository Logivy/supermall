<template>
  <scroll id="tab-content">
    <tab-content-category/>
    <tab-control
      :title="['综合', '新品', '销量']"
      @tabClick="tabClick"
    ></tab-control>
    <tab-content-detail />
  </scroll>
</template>
<script>
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import TabContentCategory from "./TabContentCategory";
import TabContentDetail from "./TabContentDetail";

export default {
  name: "TabContent",
  components: {
    TabContentCategory,
    TabContentDetail,
    TabControl,
    Scroll,
  },
  methods:{
     tabClick(){}
  }
};
</script>
<style scoped>
#tab-content {
  height: 100%;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;

}
</style>
