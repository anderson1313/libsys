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



const User = () => import("views/user/User")

const AllBooks = () => import("views/library/AllBooks")
const EachBook = () => import("views/library/EachBook")


const Admin = () => import("views/admin/Admin/Admin")
const AdminBook = () => import("views/admin/AdminBook/AdminBook")
const AdminUser = () => import("views/admin/AdminUser/AdminUser")
const AdminRecord = () => import("views/admin/AdminRecord/AdminRecord")

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
  name: "bookdetail",
  path: "/eachbook/:id",
  component: EachBook,

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

},


{
  path: "/admin",
  component: Admin,
  meta: {
    requiresAuth: false
  }
},
{
  path: "/adminuser",
  component: AdminUser,
  meta: {
    requiresAuth: true
  }
},
{
  path: "/adminrecord",
  component: AdminRecord,
  meta: {
    requiresAuth: true
  }
},
{
  path: "/adminbook",
  component: AdminBook,
  meta: {
    requiresAuth: true
  }
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
  if(to.fullPath =="/admin") {
    sessionCache.setItem("version","admin")

  }
  // || from.matched.some(record => record.meta.requiresAuth)

  let toRqLogin = to.matched.some(record => record.meta.requiresLogin) //页面是否需要用户登录
  let toRqAuth = to.matched.some(record => record.meta.requiresAuth) //页面是否需要管理权限
  let fromRqAuth = from.matched.some(record => record.meta.requiresAuth) //来的页面是否需要管理权限

  let flag = toRqLogin || toRqAuth
  if (flag) {
    //登录验证
    if (toRqLogin) {
      // console.log("登陆验证")
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
    //权限验证
    if (toRqAuth) {
      // console.log("权限验证")
      if (sessionCache.getItem("isadmin") == true) {
        next()
      } else {
        Message({
          type: 'error',
          message: '你没有管理员权限，请先登录'
        })
        next({
          path: '/admin'
        })
        sessionCache.setItem("version","admin")
      }
    }
  } else {
    // console.log("无验证跳转")
    next()
  }


})


export default router