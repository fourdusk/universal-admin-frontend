import router from './index'
import { pageNotMatchRouter } from './static'
import { RouterMeta } from './type'

const modules = import.meta.glob('@/module/**/*.vue')

export const addDynamicRouter = () => {
  const userStore = gbStore.useUserStore()
  const pageResources = userStore.getPageResources()
  for (const item of pageResources) {
    const componentUrl = `/src/module${item.component as string}.vue`
    router.addRoute({
      name: item.resourceCode,
      path: item.path as string,
      component: modules[componentUrl],
      meta: {
        resourceType: item.resourceType,
        resourceNameEn: item.resourceNameEn,
        resourceNameZhCn: item.resourceNameZhCn,
        icon: item.icon,
        status: item.status,
        isAffix: item.isAffix,
        isCache: item.isCache,
        isHide: item.isHide,
        isLink: item.isLink
      } as RouterMeta
    })
  }
  router.addRoute(pageNotMatchRouter)
}

export const removeDynamicRouter = (): void => {
  const userStore = gbStore.useUserStore()
  const routerStore = gbStore.useRouterStore()
  const pageResources = userStore.getPageResources()
  pageResources.forEach(item => {
    const { resourceCode } = item
    if (router.hasRoute(resourceCode)) {
      router.removeRoute(resourceCode)
    }
  })
  routerStore.setAdded(false)
}
