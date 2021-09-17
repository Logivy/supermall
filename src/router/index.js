import Vue from "vue";
import Router from "vue-router";

// 懒加载
const Home = () => import("views/home/Home");
const Category = () => import("views/category/Category");
const Shopcart = () => import("views/shopcart/Shopcart");
const Profile = () => import("views/profile/Profile");
const Detail = () => import("views/detail/Detail");
// 1、安装router插件
Vue.use(Router);

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 2、路由映射表
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/shopcart",
    component: Shopcart
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/detail/:iid",
    component: Detail
  }
];

// 3、创建router实例
const router = new Router({
  routes,
  mode: "history"
});

// 4、导出
export default router;
