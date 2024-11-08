export const RESOURCE_TYPE = {
  menu: {
    label: 'global.constant.resource.options.menu',
    value: 'Menu'
  },
  page: {
    label: 'global.constant.resource.options.page',
    value: 'Pgae'
  },
  element: {
    label: 'global.constant.resource.options.element',
    value: 'Element'
  }
} as const

export type ResourceType = (typeof RESOURCE_TYPE)[keyof typeof RESOURCE_TYPE]['value']

export type Resource = {
  id: number
  remark: null | string
  sort: number
  delFlag: WhetherType
  createdAt: number
  updatedAt: number
  createdBy: string
  updatedBy: string
  status: WhetherType
  parentId: number
  resourceCode: string
  resourceNameEn: string
  resourceNameZhCn: string
  resourceType: ResourceType
  path: null | string
  activePath: null | string
  component: null | string
  icon: null | string
  isLink: WhetherType
  isCache: WhetherType
  isAffix: WhetherType
  isHide: WhetherType
  children: Resource[]
}

export const LOCALE_RESOURCE_NAME_MAP = {
  en: 'resourceNameEn',
  'zh-cn': 'resourceNameZhCn'
} as const
