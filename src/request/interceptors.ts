import { ElMessage } from "element-plus";
import service from "./service";
import { InternalAxiosRequestConfig } from "axios";

service.interceptors.request.use(
  (config:InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    ElMessage.error(error.message);
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  (response) => {
    const { code, msg, data, success } = response.data;
    if (success === true) {
      return data;
    } else {
      ElMessage.error(msg);
      return Promise.reject(new Error(msg));
    }
  },
  (error) => {
    let message = "";
    const status = error.response?.status;
    switch (status) {
      case 401:
        message = "token失效,请重新登录";
        break;
      case 403:
        message = "没有权限,请获取权限后登录";
        break;
      case 404:
        message = "页面不存在";
        break;
      case 500:
        message = "服务器故障";
        break;
      case 502:
        message = "数据库查询错误";
        break;
      default:
        message = "网络连接错误";
    }
    ElMessage.error(message);
    return Promise.reject(error);
  }
);
export default service;