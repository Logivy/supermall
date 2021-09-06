<template>
  <div id="shopcart">
    <nav-bar class="cart-nav"
      ><div slot="center">购物车({{ cartLength }})</div></nav-bar
    >
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Shopcart",
  components: {
    NavBar,
  },
  computed: {
    // cartLength() {
    //   return this.$store.getters.cartLength;
    // },
    ...mapGetters(['cartLength'])
  },
};
</script>
<style scoped>
.cart-nav {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
</style>
