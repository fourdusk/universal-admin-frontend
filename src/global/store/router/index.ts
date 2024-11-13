type State = {
  isAdded: boolean
}

export const useRouterStore = defineStore('router', {
  state: (): State => ({
    isAdded: false
  }),
  actions: {
    setAdded(val: boolean) {
      this.isAdded = val
    }
  }
})
