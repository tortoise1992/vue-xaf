import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import Login from '@/views/login'
import Index from '@/views/index'
import Detail from '@/views/detail'
Vue.use(Router)

const routes=[
  {
    path: '/',
    name: '/',
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
    //此处需要设置授权
    meta: {
      auth: true
    },
  }
]
if(window.localStorage.getItem('item')){
  store.commit('login',window.localStorage.getItem('item'))
}

let router=new Router({
  routes
})
//to是需要到达的路径,from是旧的路径
router.beforeEach((to,from,next)=>{
  console.log(to)
  console.log(from)
  if(to.meta.auth){
    if(store.state.token){
      next()
    }else{
      next({'path':'/login'})
    }
  }else{
    next()
  }
})

export default router
// http://api.douban.com/v2/movie/in_theaters