//需要对于axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css";
//start进度条开始   done 进度条结束
//1利用axios方法 create 创建一个axios实例
const requests = axios.create({
    //基础路径 发请求时 路径当中会出现api
    baseURL:"/api",
    timeout:5000,//超时时间5s
});
//请求拦截器：在发请求之间请求拦截器科技监测到   可以在请求发出之前做出行动
requests.interceptors.request.use((config) =>{
    //config配置对象  对象里面有一个属性  headers请求头
    //进度条开始动
    nprogress.start();
    return config;
});
//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调  服务器响应数据回来以后可以做一些事情
    //进度条结束
    nprogress.done();
    return res.data;
},(err)=>{
    //响应失败的回调
    return Promise.reject(new Error('faile'));//终止promise链
});

//对外暴露
export default requests;