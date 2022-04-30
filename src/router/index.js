import Vue from "vue"
import Router from "vue-router"
import Message from 'components/common/message/index.js'
import {
  sessionCache
} from 'common/storage'
import {
  localCache
} from 'common/storage'
Vue.use(Router)

//导入componets

const Home = () => import("views/home/Home")


const Profile = () => import("views/user/Profile")
const User = () => import("views/user/User")

const AllBooks = () => import("views/library/AllBooks")
const EachBook = () => import("views/library/EachBook")


const Admin = () => import("views/admin/Admin")
const AdminBook = () => import("views/admin/AdminBook")
const AdminUser = () => import("views/admin/AdminUser")
const AdminRecord = () => import("views/admin/AdminRecord")

const Login = () => import("views/func/Login")




const NotFound = () => import("views/func/NotFound")


//routes

const routes = [{
    path: "/",
    redirect: "/home",

  },


  {
    path: "/library",
    redirect: "/library/allbooks",

  },

  {
    path: "/library/allbooks",
    component: AllBooks
  },


  {
    path: "/home",
    component: Home,

  },
  {
    path: "/userlogin",
    component: Login
  },
  // {
  //   path: "/userregister",
  //   component: Register
  // },
  {
    path: "/user",
    component: User,
    meta: {
      requiresLogin: true
    },
    children: [{
        path: "profile",
        component: Profile,
        meta: {
          requiresLogin: true
        }
      },

    ]
  },

  {
    path: "/library",
    component: AllBooks,
    children: [{
      path: "eachbook",
      component: EachBook
    }]
  },
  {
    path: "/admin",
    component: Admin,
    meta: {
      requiresAuth: true
    },
    children: [{
        path: "adminuser",
        component: AdminUser,
        meta: {
          requiresAuth: true
        },

      },
      {
        path: "adminbook",
        component: AdminBook,
        meta: {
          requiresAuth: true
        },

      },
      {
        path: "adminrecord",
        component: AdminRecord,
        meta: {
          requiresAuth: true
        },

      },
    ]
  },

  //捕获notfound
  {

    path: '*',

    component: NotFound
  },


]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  //登录验证
  if (to.matched.some(record => record.meta.requiresLogin)) {
    if (sessionCache.getItem("isLogin") == true) {
      next()
    } else {
      Message({
        type: 'error',
        message: '请先登录'
      })
      next({
        path: '/userlogin'
      })
    }
  }

  //管理者回退页面
  if (from.matched.some(record => record.meta.requiresAuth) && !to.matched.some(record => record.meta.requiresAuth)) {
    sessionCache.setItem("version", "user")
  }

  //权限验证
  if (to.matched.some(record => record.meta.requiresAuth)) {

    if (sessionCache.getItem("isadmin") == true) {
      next()
    } else {
      Message({
        type: 'error',
        message: '你没有管理员权限，请先登录'
      })
      next({
        path: '/'
      })  
    }




  } else {
    next()
  }
})


export default router