import axios from "axios";

export function request(config) {
  // 1、创建axios实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/hy66",
    timeout: 5000
  });

//   请求拦截器
//   instance.interceptors.request.use(config =>{
//       return config
//   },err =>{
//       // ...
//   })

//   响应拦截器
  instance.interceptors.response.use(res =>{
      return res.data
  },err =>{
  })

  return instance(config);
}
