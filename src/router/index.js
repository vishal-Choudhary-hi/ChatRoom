import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import ChatRoom from '../views/ChatRoom.vue'
import { projectAuth } from '@/firebase/config'

const requireAuth=(to,from,next)=>{
  let user = projectAuth.currentUser;
  if(!user){
    next({name:'Welcome'})
  }
  next()
}
const requireNoAuth=(to,from,next)=>{
  let user = projectAuth.currentUser;
  if(user){
    next({name:'ChatRoom'})
  }
  next()
}

const routes = [
  {
    path:'/',
    name:'Welcome',
    component: Welcome,
    beforeEnter:requireNoAuth
  },
  {
    path:'/chatroom',
    name:'ChatRoom',
    component:ChatRoom,
    beforeEnter:requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
