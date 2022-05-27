//配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
//配置路由
export default new VueRouter({
    //配置路由
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true}
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false}
        },
        {
            path:"/search/:keyWord?",
            component:Search,
            meta:{show:true},
            name:"search",
            //路由组件能不能传递props数据？  可以
            //布尔值写法:params
            //props:true,
            //对象写法
            //props:{a:1,b:2},
            //函数写法 可以把params参数  query函数通过props传递给路由组件
            //props:($route)=>({keyWord:$route.params.keyWord,k:$route.query.k})
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false}
        },
        {
            path: '*',
            redirect:"/home"
        }
    ]
})