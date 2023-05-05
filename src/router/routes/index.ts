import type { RouteRecordRaw } from 'vue-router'

/**
 * 路由配置
 * @description 所有路由都在这里集中管理
 */
const routes: RouteRecordRaw[] = [
  /**
   * 首页
   */
  {
    path: '/',
    redirect:'/home',
  },

  /**
   * home页
   */
  {
    path:'/home',
    name:'home',
    component:()=> import('@/views/student/studentHome.vue'),
    meta:{
      title:'Home',
    },
  },

  /**
   * 登陆页
   */
  {
    path:'/login',
    name:'login',
    component:()=>import('@/views/LoginAndSignUp/login.vue'),
    meta:{
      title:'Login',
    },
  },

  /**
   * 注册页
   */
  {
    path:'/signup',
    name:'signup',
    component:()=>import('@/views/LoginAndSignUp/signup.vue'),
    meta:{
      title:'SignUp',
    },
  },
  /**
   * 子路由示例
   */
  {
    path: '/foo',
    name: 'foo',
    component: () => import('@/components/TransferStation.vue'),
    meta: {
      title: 'Foo',
    },
    redirect: {
      name: 'bar',
    },
    children: [
      {
        path: 'bar',
        name: 'bar',
        component: () => import('@/views/foo/bar.vue'),
        meta: {
          title: 'Bar',
        },
      },
    ],
  },
    /**
   * 404页面
   */
    {
      path:'/:pathMatch(.*)*',
      redirect:'/404',
    },
    {
      path:'/404',
      name:'404',
      component:()=>import('@/views/error/error.vue'),
      meta:{
        title:'404',
      }
    },
]

export default routes
