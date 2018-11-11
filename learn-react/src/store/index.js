

import CountStore from './CountStore'
// mobx.configure({ enforceActions: true }) // 不允许在动作之外进行状态修改

class store {
  constructor(){
    this.CountStore = CountStore
  }
}

export default new store()