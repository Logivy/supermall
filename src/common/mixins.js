import BackTop from "@/components/content/backTop/BackTop";
import {BACK_POSITION} from "common/const";

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
