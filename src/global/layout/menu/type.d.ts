import { ResourceType } from '@/global/constant/resource/index'

export type Resource = {
  id: number
  remark: null | string
  sort: number
  delFlag: BoolType
  createdAt: number
  updatedAt: number
  createdBy: string
  updatedBy: string
  status: BoolType
  parentId: number
  resourceCode: string
  resourceNameEn: string
  resourceNameZhCn: string
  resourceType: ResourceType
  path: null | string
  activePath: null | string
  component: null | string
  icon: null | string
  isLink: BoolType
  isCache: BoolType
  isAffix: BoolType
  isHide: BoolType
  children: Resource[]
}
