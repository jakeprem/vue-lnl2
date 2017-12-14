import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Question from '@/views/SingleQuestion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/question/:id',
      name: 'Question',
      component: Question
    }
  ]
})
