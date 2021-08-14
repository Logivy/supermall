/*
 * @Descripttion: 
 * @version: 
 * @Author: Logivy
 * @Date: 2021-07-26 20:24:03
 * @LastEditors: Logivy
 * @LastEditTime: 2021-07-26 20:28:23
 */

// 防抖
export default function debounce(func, delay) {
    let timer = null;

    return function (...args) {
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }