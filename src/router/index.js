import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Layout from '../views/layout'
import kaoQinRecord from '../views/kaoQinRecord'
import costRecord from '../views/costRecord'
import oneWeekMenu from '../views/oneWeekMenu'
import menuDetail from '../views/menuDetail'
import costDetail from '../views/costDetail'
import foodEvaluate from '../views/foodEvaluate'
import myAccount from '../views/myAccount'
import transMoney from '../views/transMoney'
import kaoQinDate from '../views/kaoQinDate'
import kaoQinDetail from '../views/kaoQinDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/views/kaoQinRecord',
      name: 'kaoQinRecord',
      component: kaoQinRecord
    },
    {
      path: '/views/kaoQinDetail',
      name: 'kaoQinDetail',
      component: kaoQinDetail
    },
    {
      path: '/views/oneWeekMenu',
      name: 'oneWeekMenu',
      component: oneWeekMenu
    },
    {
      path: '/views/costRecord',
      name: 'costRecord',
      component: costRecord
    },
    {
      path: '/views/menuDetail',
      name: 'menuDetail',
      component: menuDetail
    },
    {
      path: '/views/costDetail',
      name: 'costDetail',
      component: costDetail
    },
    {
      path: '/views/foodEvaluate',
      name: 'foodEvaluate',
      component: foodEvaluate
    },
    {
      path: '/views/myAccount',
      name: 'myAccount',
      component: myAccount
    },
    {
      path: '/views/transMoney',
      name: 'transMoney',
      component: transMoney
    },
    {
      path: '/views/kaoQinDate',
      name: 'kaoQinDate',
      component: kaoQinDate
    }
  ]
})
