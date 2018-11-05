import React, {Component} from 'react';
import { Route} from 'react-router-dom'
import reouteConfig from './config'

class RouterView extends Component {
  render() {
    return (
      <main>

        {reouteConfig.map((config, index) => <Route
          path={config.path} component={config.component}
          key={index} exact></Route>)}

      </main>
    )
  }
}


export default RouterView
