import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider, inject, observer} from 'mobx-react'

import store from './store'

@inject('store')
@observer
class ButtonGorup extends Component {
  render() {
    return (
      <div>
        <button onClick={() => {
          this.props.store.CountStore.add()
        }}>add
        </button>
        <button
          onClick={()=>{this.props.store.CountStore.minus()}}>minu
        </button>
        <button
          onClick={()=>{this.props.store.CountStore.addAfterTenSeconds()}}>addAfterTenSeconds
        </button>
      </div>
    )
  }
}

@inject('store')
@observer
class Home extends Component {
  render() {
    let count = this.props.store.CountStore.count
    let status = this.props.store.CountStore.status
    let addTwo = this.props.store.CountStore.addTwo
    return (
      <div>
        <div>{status}</div>
        <div>{count}</div>
        <div>computed add two value : {addTwo}</div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Home/>
          <ButtonGorup></ButtonGorup>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))