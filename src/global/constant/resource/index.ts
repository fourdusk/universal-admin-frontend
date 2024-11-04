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
