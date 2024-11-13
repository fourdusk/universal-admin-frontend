import { LOCALE_RESOURCE_NAME_MAP } from '@/global/constant/resource/index'
import { SIGN_IN_ROUTER, WHITE_LIST_ROUTES } from '@/global/constant/router/index'

import { addDynamicRouter, removeDynamicRouter } from './dynamic'
import { staticRouter } from './static'
import { RouterMeta } from './type'

const router = createRouter({
  history: createWebHistory(),
  routes: staticRouter
})

/* eslint-disable max-statements */
router.beforeEach((to, from, next) => {
  const routerMeta = to.meta as RouterMeta
  const userStore = gbStore.useUserStore()
  const routerStore = gbStore.useRouterStore()
  const localeStore = gbStore.useLocaleStore()
  const resourceName = LOCALE_RESOURCE_NAME_MAP[gbLocale.getAppLang()]
  const accessToken = userStore.getAccessToken()
  localeStore.setDocumentTitle(routerMeta[resourceName])
  if (to.path === SIGN_IN_ROUTER.path) {
    if (accessToken) {
      next(from.fullPath)
      return
    }
    removeDynamicRouter()
    next()
    return
  }
  if (WHITE_LIST_ROUTES.includes(to.path)) {
    next()
    return
  }
  if (!accessToken) {
    next({ path: SIGN_IN_ROUTER.path, query: { from: to.fullPath }, replace: true })
    return
  }
  if (!routerStore.isAdded) {
    addDynamicRouter()
    routerStore.setAdded(true)
    next({ ...to, replace: true })
    return
  }
  next()
})

export default router
