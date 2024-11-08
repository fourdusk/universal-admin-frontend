import { defineStore } from 'pinia'

import { WHETHER_TYPE } from '@/global/constant/common/index'
import { type Resource, RESOURCE_TYPE } from '@/global/constant/resource/index'

type State = {
  accessToken: string | null
  refreshToken: string | null
  info: {
    username: string
    isAdmin: WhetherType
    status: WhetherType
  } | null
  resourceTree: Resource[]
}

export const useUserStore = defineStore('user', {
  state: (): State => ({
    accessToken: null,
    refreshToken: null,
    info: {
      username: '',
      isAdmin: WHETHER_TYPE.no,
      status: WHETHER_TYPE.no
    },
    resourceTree: []
  }),
  actions: {
    setAccessToken(val: string) {
      this.accessToken = val
      gbUtil.localStorager.setItem('accessToken', val)
    },
    getAccessToken() {
      const token = gbUtil.localStorager.getItem('accessToken')
      if (gbUtil.isString(token)) {
        this.setAccessToken(token)
        return this.accessToken
      }
      return this.accessToken
    },
    removeAccessToken() {
      gbUtil.localStorager.removeItem('accessToken')
      this.accessToken = null
    },
    setInfo(val: State['info']) {
      this.info = val
      gbUtil.localStorager.setItem('userInfo', JSON.stringify(val))
    },
    getInfo() {
      const info = gbUtil.localStorager.getItem('userInfo')
      if (gbUtil.isObject(info)) {
        this.setInfo(info as State['info'])
        return this.info
      }
      return this.info
    },
    removeInfo() {
      gbUtil.localStorager.removeItem('userInfo')
    },
    setResourceTree(val: State['resourceTree']) {
      this.resourceTree = val
      gbUtil.localStorager.setItem('resourceTree', JSON.stringify(val))
    },
    getResourceTree() {
      const resourceTree = gbUtil.localStorager.getItem('resourceTree')
      if (gbUtil.isArray(resourceTree)) {
        this.setResourceTree(resourceTree as State['resourceTree'])
        return this.resourceTree
      }
      return []
    },
    getResources() {
      return gbUtil.treeToList(this.getResourceTree())
    },
    getMenuResources() {
      const resources = this.getResources()
      return resources.filter(o => RESOURCE_TYPE.menu.value === o.resourceType)
    },
    getMenuAndPageResources() {
      const resources = this.getResources()
      return resources.filter(
        o =>
          o.resourceType === RESOURCE_TYPE.menu.value || o.resourceType === RESOURCE_TYPE.page.value
      )
    },
    getMenuAndPageResourceTree() {
      const resources = this.getMenuAndPageResources().filter(o => o.isHide === WHETHER_TYPE.no)
      return gbUtil.listToTree(resources, {
        judgeParentIdFn: item => item.parentId === 0
      })
    },
    getPageResources() {
      const resources = this.getResources()
      return resources.filter(o => o.resourceType === RESOURCE_TYPE.page.value)
    },
    getElementResources() {
      const resources = this.getResources()
      return resources.filter(o => o.resourceType === RESOURCE_TYPE.element.value)
    },
    removeResources() {
      gbUtil.localStorager.removeItem('resourceTree')
      this.resourceTree = []
    }
  }
})
