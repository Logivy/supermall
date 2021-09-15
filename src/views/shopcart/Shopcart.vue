<template>
  <div id="shopcart">
    <nav-bar class="cart-nav"
      ><div slot="center">购物车({{ cartLength }})</div></nav-bar
    >
    <cart-list />
    <bottom-bar />
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import NavBar from "components/common/navbar/NavBar";
import BottomBar from "./childComps/BottomBar";
import CartList from "./childComps/CartList";

export default {
  name: "Shopcart",
  components: {
    NavBar,
    CartList,
    BottomBar,
  },
  computed: {
    ...mapGetters(["cartLength"]),
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
