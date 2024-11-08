import {
  createRouter,
  createWebHistory,
  NavigationGuardNext as RouterNext,
  RouteLocationNormalizedGeneric as RouterLocation
} from 'vue-router'

import { LOCALE_RESOURCE_NAME_MAP } from '@/global/constant/resource/index'
import {
  HOME_ROUTER,
  NO_RESOURCE_PERMISSION_ROUTER,
  SIGN_IN_ROUTER,
  WHITE_LIST_ROUTES
} from '@/global/constant/router/index'

import { addDynamicRouter, removeDynamicRouter } from './dynamic'
import { staticRouter } from './static'
import { RouterMeta } from './type'

const router = createRouter({
  history: createWebHistory(),
  routes: staticRouter
})

const userStore = gbStore.useUserStore()
const routerStore = gbStore.useRouterStore()
const localeStore = gbStore.useLocaleStore()
const resourceName = LOCALE_RESOURCE_NAME_MAP[gbLocale.getAppLang()]
const accessToken = userStore.getAccessToken()

const handleSignIn = (to: RouterLocation, from: RouterLocation, next: RouterNext) => {
  if (to.path === SIGN_IN_ROUTER.path) {
    if (accessToken) {
      next(from.fullPath)
      return
    }
    removeDynamicRouter()
    next()
  }
}

const handleWhiteList = (to: RouterLocation, _from: RouterLocation, next: RouterNext) => {
  if (WHITE_LIST_ROUTES.includes(to.path)) {
    next()
  }
}

const handleNoAccessToken = (to: RouterLocation, _from: RouterLocation, next: RouterNext) => {
  if (!accessToken) {
    next({ path: SIGN_IN_ROUTER.path, query: { from: to.fullPath }, replace: true })
  }
}

const handleRouterNotAdded = (to: RouterLocation, _from: RouterLocation, next: RouterNext) => {
  addDynamicRouter()
  if (!routerStore.isAdded) {
    routerStore.setAdded(true)
    if (userStore.getPageResources().length === 0) {
      next({ path: NO_RESOURCE_PERMISSION_ROUTER.path })
      return
    }
    if (to.path === NO_RESOURCE_PERMISSION_ROUTER.path) {
      next({ path: HOME_ROUTER.path, replace: true })
      return
    }
    next({ ...to, replace: true })
  }
}

router.beforeEach((to, from, next) => {
  const routerMeta = to.meta as RouterMeta
  localeStore.setDocumentTitle(routerMeta[resourceName])
  handleSignIn(to, from, next)
  handleWhiteList(to, from, next)
  handleNoAccessToken(to, from, next)
  handleRouterNotAdded(to, from, next)
  next()
})

export default router
