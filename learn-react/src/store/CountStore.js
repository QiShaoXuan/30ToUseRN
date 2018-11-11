import {observable, action, computed,runInAction} from "mobx"

function getData () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve('success')
    },1*1000)
  })
}

class CountStore {
  @observable count = 0
  @observable status ='counted'

  @action add() {
    this.count += 1
  }

  @action minus() {
    this.count -= 1
  }

  @action addAfterTenSeconds(){
    this.status = 'counting'
    if(this.status === 'counting'){
      getData().then(() => {
        runInAction(() => {
          this.status = 'counted'
          this.count += 2
        })
      })
    }

  }
  @computed get addTwo() {
    return this.count + 2
  }


}

export default new CountStore()
