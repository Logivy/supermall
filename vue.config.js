/*
 * @Descripttion:
 * @version:
 * @Author: Logivy
 * @Date: 2021-05-10 08:16:54
 * @LastEditors: Logivy
 * @LastEditTime: 2021-08-09 22:51:21
 */
const path = require("path");

module.exports = {

  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views"
      }
    }
  }
};
