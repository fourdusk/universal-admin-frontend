import { ResourceType } from '@/global/constant/resource/index'

export type RouterMeta = {
  resourceType: ResourceType
  resourceNameEn: string
  resourceNameZhCn: string
  icon: null | string
  status: WhetherType
  isAffix: WhetherType
  isCache: WhetherType
  isHide: WhetherType
  isLink: WhetherType
}
