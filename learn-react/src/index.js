import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './asset/styles/reset.css'
import { BrowserRouter as Router } from "react-router-dom";

import Aside from './components/aside'
import Header from './components/header'
import RouterView from "./router";

import * as serviceWorker from './serviceWorker'


class App extends Component{
  render(){
    return (
      <Router>
        <div>
          <Header></Header>
          <Aside></Aside>
          <RouterView></RouterView>
        </div>
      </Router>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
