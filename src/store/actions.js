export default {
  addCart({ state, commit }, payload) {
    //   let oldProduct = null;
    //   for (let item of state.cartList) {
    //     if (item.iid === payload.iid) {
    //       oldProduct = item;
    //     }
    //   }

    let oldProduct = state.cartList.find(item => item.iid === payload.iid);

    if (oldProduct) {
      commit("addCounter", oldProduct);
    } else {
      payload.count = 1;
      commit("addToCart", payload);
    }
  }
};
