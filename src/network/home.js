import { request } from "./request";

// 对home的网络请求封装
export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  });
}

export function getHomeGoods(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page
    }
  });
}
