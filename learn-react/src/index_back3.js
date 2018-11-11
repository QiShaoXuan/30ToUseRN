import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import './asset/styles/reset.css'

import {Provider, inject, observer} from 'mobx-react';


import * as serviceWorker from './serviceWorker'

class CountStore {
  // constructor(){
  //   this.store = store
  // }
  @observable cc = {
    count: 0,
    aaa: 1
  }

  @action add() {
    this.cc.count += 1
  }

  @action aa() {
    this.cc.aaa -= 1
  }
}

class store {
  constructor() {
    this.countStore = new CountStore();
  }
}

@inject('store')
@observer
class Home extends Component {
  constructor(props) {
    super(props)
    this.countStore = this.props.store.countStore
  }

  render() {
    let count = this.countStore.cc.count
    let aaa = this.countStore.cc.aaa
    return (
      <div>
        <p>{count}</p>
        <p>{aaa}</p>
      </div>
    )
  }
}

@inject('store')
@observer
class Button extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.increment()}
          style={{marginRight: '15px'}}>click to add
        </button>
        <button onClick={() => {
          this.aaa()
        }}> click to reduce
        </button>
      </div>
    )
  }

  increment() {
    this.props.store.countStore.add()
    console.log()
  }

  aaa() {
    this.props.store.countStore.aa()
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={new store()}>
        <div>
          <Button></Button>
          <Home/>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))

serviceWorker.unregister()
