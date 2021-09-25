<template>
  <div id="category">
    <nav-bar class="category-nav"
      ><template #center>商品分类</template></nav-bar
    >
    <div class="category-content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
      <scroll id="tab-content">
        <div>
          <tab-content-category
            :subcategories="showSubcategory"
            v-if="showSubcategory.list"
          />
          <tab-control
            :titles="['综合', '新品', '销量']"
            @tabClick="tabClick"
          ></tab-control>
          <!-- <tab-content-detail
            :categoryDetail="showCategoryDetail"
            v-if="showCategoryDetail"
          /> -->
        </div>
      </scroll>
    </div>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import TabMenu from "./childComps/TabMenu";
import Scroll from "components/common/scroll/Scroll";
import TabContentCategory from "./childComps/TabContentCategory";
import TabContentDetail from "./childComps/TabContentDetail";
import { POP, SELL, NEW } from "common/const";

import { tabControlMixin } from "common/mixins";
import {
  getCategory,
  getSubCategory,
  getCategoryDetail,
} from "network/category";
export default {
  name: "Category",
  components: {
    NavBar,
    TabMenu,
    Scroll,
    TabContentCategory,
    TabContentDetail,
  },
  mixins: [tabControlMixin],
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
    };
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subcategories;
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].categoryDetail[
        this.currentType
      ];
    },
  },
  created() {
    this._getCategory();
  },

  methods: {
    _getCategory() {
      getCategory().then((res) => {
        // 1.获取分类数据
        this.categories = res.data.category.list;
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          };
        }
        // 3.请求第一个分类的数据
        this._getSubcategories(0);
      });
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubCategory(mailKey).then((res) => {
        this.categoryData[index].subcategories = res.data;
        this.categoryData = { ...this.categoryData };
        console.log(this.categoryData);

        this._getCategoryDetail(POP);
        this._getCategoryDetail(SELL);
        this._getCategoryDetail(NEW);
      });
    },
    _getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then((res) => {
        // 3.将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        this.categoryData = { ...this.categoryData };
      });
    },
    /**
     * 事件响应相关的方法
     */
    selectItem(index) {
      this._getSubcategories(index);
    },
  },
};
</script>
<style scoped>
#category {
  height: 100vh;
}
.category-nav {
  /* 设置home的导航栏背景 */
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}

.category-content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
}

#tab-content {
  flex: 1;
  height: 100%;
}
</style>
