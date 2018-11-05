import React, { Component } from 'react'
import {Link} from 'react-router-dom'


const asideItems = [
  {
    path: '/',
    name:'首页'
  },
  {
    path: '/login',
    name:'登录'
  },
  {
    path: '/404',
    name:'404'
  },
]

function setAside() {
  return asideItems.map((item,index) => <li key={index}><Link to={item.path}>{item.name}</Link> </li>)
}
class Aside extends Component {
  render() {
    return (
      <aside>
        <ul>
          {setAside()}
        </ul>
      </aside>
    )
  }
}

export default Aside