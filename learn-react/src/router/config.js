import Index from '../view/index'
import Login from '../view/login'
import FourOFour from '../view/fourOfour'

let routeConfig = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/404',
    component: FourOFour,
  },
]

export default routeConfig