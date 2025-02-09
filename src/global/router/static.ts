import { WHETHER_TYPE } from '@/global/constant/common/index'
import { RESOURCE_TYPE } from '@/global/constant/resource/index'
import {
  HOME_ROUTER,
  PAGE_NOT_FOUND_ROUTER,
  PAGE_NOT_MATCH_ROUTER,
  ROOT_ROUTER,
  SIGN_IN_ROUTER
} from '@/global/constant/router/index'

import { RouterMeta } from './type'

export const pageNotMatchRouter: RouteRecordRaw = {
  path: PAGE_NOT_MATCH_ROUTER.path,
  name: PAGE_NOT_MATCH_ROUTER.name,
  redirect: { path: PAGE_NOT_FOUND_ROUTER.path }
}

export const staticRouter: RouteRecordRaw[] = [
  {
    path: ROOT_ROUTER.path,
    redirect: HOME_ROUTER.path
  },
  {
    path: HOME_ROUTER.path,
    name: HOME_ROUTER.name,
    component: () => import('@/module/home/view/index.vue'),
    meta: {
      resourceType: RESOURCE_TYPE.page.value,
      resourceNameEn: 'Home',
      resourceNameZhCn: '首页',
      icon: null,
      status: WHETHER_TYPE.yes,
      isAffix: WHETHER_TYPE.yes,
      isCache: WHETHER_TYPE.yes,
      isHide: WHETHER_TYPE.no,
      isLink: WHETHER_TYPE.no
    } as RouterMeta
  },
  {
    path: SIGN_IN_ROUTER.path,
    name: SIGN_IN_ROUTER.name,
    component: () => import('@/module/auth/view/sign-in/index.vue'),
    meta: {
      resourceType: RESOURCE_TYPE.page.value,
      resourceNameEn: 'Sign-in',
      resourceNameZhCn: '登录',
      icon: null,
      status: WHETHER_TYPE.yes,
      isAffix: WHETHER_TYPE.no,
      isCache: WHETHER_TYPE.no,
      isHide: WHETHER_TYPE.no,
      isLink: WHETHER_TYPE.no
    } as RouterMeta
  },
  {
    path: PAGE_NOT_FOUND_ROUTER.path,
    name: PAGE_NOT_FOUND_ROUTER.name,
    component: () => import('@/module/error/view/page-not-found/index.vue'),
    meta: {
      resourceType: RESOURCE_TYPE.page.value,
      resourceNameEn: 'Page Not Found',
      resourceNameZhCn: '找不到页面',
      icon: null,
      status: WHETHER_TYPE.yes,
      isAffix: WHETHER_TYPE.no,
      isCache: WHETHER_TYPE.no,
      isHide: WHETHER_TYPE.no,
      isLink: WHETHER_TYPE.no
    } as RouterMeta
  }
]
