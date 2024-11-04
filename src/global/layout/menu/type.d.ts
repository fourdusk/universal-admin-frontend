import { ResourceType } from '@/global/constant/resource/index'

export type Resource = {
  id: number
  remark: null | string
  sort: number
  delFlag: BoolMap
  createdAt: number
  updatedAt: number
  createdBy: string
  updatedBy: string
  status: BoolMap
  parentId: number
  resourceCode: string
  resourceNameEn: string
  resourceNameZhCn: string
  resourceType: ResourceType
  path: null | string
  activePath: null | string
  component: null | string
  icon: null | string
  isLink: BoolMap
  isCache: BoolMap
  isAffix: BoolMap
  isHide: BoolMap
  children: Resource[]
}
