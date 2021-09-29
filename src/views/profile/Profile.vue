<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <!-- v2.6.0 具名插槽写法 -->
      <template v-slot:center>我的信息</template>
    </nav-bar>
    <user-info />
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar';
import UserInfo from './childComps/UserInfo';
export default {
  name: "Profile",
  components:{
    NavBar,
    UserInfo
  },

};
</script>
<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
</style>