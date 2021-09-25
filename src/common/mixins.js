import BackTop from "@/components/content/backTop/BackTop";
import TabControl from "components/content/tabControl/TabControl";

import { BACK_POSITION, POP, NEW, SELL } from "common/const";

export const backTopMixin = {
  components: { BackTop },
  data() {
    return {
      isShowBackTop: false
    };
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, BACK_POSITION);
    },
    listenShowBackTop(position) {
      this.isShowBackTop = -position.y > BACK_POSITION;
    }
  }
};

export const tabControlMixin = {
  components: { TabControl },
  data() {
    return {
      currentType: POP
    };
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP;
          break;
        case 1:
          this.currentType = NEW;
          break;
        case 2:
          this.currentType = SELL;
          break;
      }
    }
  }
};
