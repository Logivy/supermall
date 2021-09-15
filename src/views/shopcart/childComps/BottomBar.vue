<template>
  <div class="bottom-bar">
    <CheckButton class="select-all" @checkBtnClick="checkBtnClick" :checked="isSelectAll"/>
    <span>全选</span>
    <span class="total-price">合计：￥{{ totalPrice }}</span>
    <span class="buy">下单({{ totalPrice }})</span>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import CheckButton from "./CheckButton";

export default {
  name: "BottomBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.cartList
        .filter((item) => item.checked)
        .reduce((preVal, item) => {
          return preVal + item.count * item.newPrice;
        }, 0)
        .toFixed(2);
    },
    isSelectAll(){
        return this.cartList.find(item =>item.checked === false) === undefined
    }
  },
  methods: {
    //判断是否全选
    checkBtnClick() {
      let isSelectAll = this.cartList.find((item) => !item.checked);

      if (isSelectAll) {
        this.cartList.forEach((item) => {
          item.checked = true;
        });
      } else {
        this.cartList.forEach((item) => {
          item.checked = false;
        });
      }
    },
  },
};
</script>
<style scoped>
.bottom-bar {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 50px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 44px;
  box-sizing: border-box;
}
.bottom-bar .select-all {
  position: absolute;
  line-height: 0;
  left: 13px;
  top: 13px;
}

.bottom-bar .total-price {
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}
.bottom-bar .buy {
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>

    