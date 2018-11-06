import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import './asset/styles/reset.css'

import {Observer} from 'mobx-react';
import {observable} from "mobx";


import * as serviceWorker from './serviceWorker'

class Checkbox extends Component {
  constructor() {
    super()
    this.state = {
      data: ['Mike', 'Jhon', 'Simo', 'BBB']
    }
  }

  checkboxChange(value) {
    console.log(value)
    person.name = value
  }

  setCheckbox() {
    return this.state.data.map((value, index) => {
      return (
        <div key={index}>
          <input type="radio" name="vehicle1" value={value}
            id={`radio${index}`}
            onChange={() => this.checkboxChange(value)}/>
          <label htmlFor={`radio${index}`}
            style={{marginLeft: '10px'}}>{value}</label>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.setCheckbox()}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Checkbox></Checkbox>
        <Observer>{() =>
          <div>
            <div>{this.props.person.name}</div>
          </div>}</Observer>
      </div>
    )
  }
}

const person = observable({name: "John"})

ReactDOM.render(<App
  person={person}/>, document.getElementById('root'))

serviceWorker.unregister()
