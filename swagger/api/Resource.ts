import {
  PostResourceCreatePayload,
  PostResourceFindAllPayload,
  PostResourceFindPayload,
  PostResourceGetPayload,
  PostResourceRemovePayload,
  PostResourceUpdatePayload
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Resource<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
 * No description
 *
 * @tags Permission
 * @name PostResourceCreate
 * @summary 资源创建
 * @request POST:/resource/create
 * @response `200` `{
  \**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   *\
    status: ("Y" | "N"),
  \** 备注 *\
    remark: (string | null),
  \**
   * 排序
   * @default 0
   *\
    sort: number,
  \**
   * 删除标记，已删除(Y)/未删除(N)
   * @default "N"
   *\
    delFlag: ("Y" | "N"),
  \**
   * 创建时间
   * @default 1729149009087
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1729149009087
   *\
    updatedAt: number,
  \** 创建人 *\
    createdBy: string,
  \** 更新人 *\
    updatedBy: string,
    id: number,
  \**
   * 父 ID
   * @default 0
   *\
    parentId: number,
  \** 资源编码 *\
    resourceCode: string,
  \** 资源名称 *\
    resourceName: string,
  \**
   * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
   * @default "Menu"
   *\
    resourceType: ("Menu" | "Pgae" | "Element"),
  \**
   * 页面路径
   * @default ""
   *\
    path: string,
  \**
   * 激活路径
   * @default ""
   *\
    activePath: string,
  \**
   * 组件路径
   * @default ""
   *\
    component: string,
  \**
   * 图标
   * @default ""
   *\
    icon: string,
  \**
   * 是否外链，是(Y)/否(N)
   * @default "N"
   *\
    isLink: ("Y" | "N"),
  \**
   * 是否缓存，是(Y)/否(N)
   * @default "N"
   *\
    isCache: ("Y" | "N"),
  \**
   * 是否固定，是(Y)/否(N)
   * @default "N"
   *\
    isAffix: ("Y" | "N"),
  \**
   * 是否隐藏，是(Y)/否(N)
   * @default "N"
   *\
    isHide: ("Y" | "N"),

}`
 */
  postResourceCreate = (data: PostResourceCreatePayload, params: RequestParams = {}) =>
    this.request<
      {
        /**
         * 状态，启用(Y)/禁用(N)
         * @default "N"
         */
        status: 'Y' | 'N'
        /** 备注 */
        remark: string | null
        /**
         * 排序
         * @default 0
         */
        sort: number
        /**
         * 删除标记，已删除(Y)/未删除(N)
         * @default "N"
         */
        delFlag: 'Y' | 'N'
        /**
         * 创建时间
         * @default 1729149009087
         */
        createdAt: number
        /**
         * 更新时间
         * @default 1729149009087
         */
        updatedAt: number
        /** 创建人 */
        createdBy: string
        /** 更新人 */
        updatedBy: string
        id: number
        /**
         * 父 ID
         * @default 0
         */
        parentId: number
        /** 资源编码 */
        resourceCode: string
        /** 资源名称 */
        resourceName: string
        /**
         * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
         * @default "Menu"
         */
        resourceType: 'Menu' | 'Pgae' | 'Element'
        /**
         * 页面路径
         * @default ""
         */
        path: string
        /**
         * 激活路径
         * @default ""
         */
        activePath: string
        /**
         * 组件路径
         * @default ""
         */
        component: string
        /**
         * 图标
         * @default ""
         */
        icon: string
        /**
         * 是否外链，是(Y)/否(N)
         * @default "N"
         */
        isLink: 'Y' | 'N'
        /**
         * 是否缓存，是(Y)/否(N)
         * @default "N"
         */
        isCache: 'Y' | 'N'
        /**
         * 是否固定，是(Y)/否(N)
         * @default "N"
         */
        isAffix: 'Y' | 'N'
        /**
         * 是否隐藏，是(Y)/否(N)
         * @default "N"
         */
        isHide: 'Y' | 'N'
      },
      any
    >({
      path: `/resource/create`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
  /**
 * No description
 *
 * @tags Permission
 * @name PostResourceUpdate
 * @summary 资源更新
 * @request POST:/resource/update
 * @response `200` `{
  \**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   *\
    status: ("Y" | "N"),
  \** 备注 *\
    remark: (string | null),
  \**
   * 排序
   * @default 0
   *\
    sort: number,
  \**
   * 删除标记，已删除(Y)/未删除(N)
   * @default "N"
   *\
    delFlag: ("Y" | "N"),
  \**
   * 创建时间
   * @default 1729149009087
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1729149009087
   *\
    updatedAt: number,
  \** 创建人 *\
    createdBy: string,
  \** 更新人 *\
    updatedBy: string,
    id: number,
  \**
   * 父 ID
   * @default 0
   *\
    parentId: number,
  \** 资源编码 *\
    resourceCode: string,
  \** 资源名称 *\
    resourceName: string,
  \**
   * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
   * @default "Menu"
   *\
    resourceType: ("Menu" | "Pgae" | "Element"),
  \**
   * 页面路径
   * @default ""
   *\
    path: string,
  \**
   * 激活路径
   * @default ""
   *\
    activePath: string,
  \**
   * 组件路径
   * @default ""
   *\
    component: string,
  \**
   * 图标
   * @default ""
   *\
    icon: string,
  \**
   * 是否外链，是(Y)/否(N)
   * @default "N"
   *\
    isLink: ("Y" | "N"),
  \**
   * 是否缓存，是(Y)/否(N)
   * @default "N"
   *\
    isCache: ("Y" | "N"),
  \**
   * 是否固定，是(Y)/否(N)
   * @default "N"
   *\
    isAffix: ("Y" | "N"),
  \**
   * 是否隐藏，是(Y)/否(N)
   * @default "N"
   *\
    isHide: ("Y" | "N"),

}`
 */
  postResourceUpdate = (data: PostResourceUpdatePayload, params: RequestParams = {}) =>
    this.request<
      {
        /**
         * 状态，启用(Y)/禁用(N)
         * @default "N"
         */
        status: 'Y' | 'N'
        /** 备注 */
        remark: string | null
        /**
         * 排序
         * @default 0
         */
        sort: number
        /**
         * 删除标记，已删除(Y)/未删除(N)
         * @default "N"
         */
        delFlag: 'Y' | 'N'
        /**
         * 创建时间
         * @default 1729149009087
         */
        createdAt: number
        /**
         * 更新时间
         * @default 1729149009087
         */
        updatedAt: number
        /** 创建人 */
        createdBy: string
        /** 更新人 */
        updatedBy: string
        id: number
        /**
         * 父 ID
         * @default 0
         */
        parentId: number
        /** 资源编码 */
        resourceCode: string
        /** 资源名称 */
        resourceName: string
        /**
         * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
         * @default "Menu"
         */
        resourceType: 'Menu' | 'Pgae' | 'Element'
        /**
         * 页面路径
         * @default ""
         */
        path: string
        /**
         * 激活路径
         * @default ""
         */
        activePath: string
        /**
         * 组件路径
         * @default ""
         */
        component: string
        /**
         * 图标
         * @default ""
         */
        icon: string
        /**
         * 是否外链，是(Y)/否(N)
         * @default "N"
         */
        isLink: 'Y' | 'N'
        /**
         * 是否缓存，是(Y)/否(N)
         * @default "N"
         */
        isCache: 'Y' | 'N'
        /**
         * 是否固定，是(Y)/否(N)
         * @default "N"
         */
        isAffix: 'Y' | 'N'
        /**
         * 是否隐藏，是(Y)/否(N)
         * @default "N"
         */
        isHide: 'Y' | 'N'
      },
      any
    >({
      path: `/resource/update`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
  /**
 * No description
 *
 * @tags Permission
 * @name PostResourceRemove
 * @summary 资源删除
 * @request POST:/resource/remove
 * @response `200` `{
  \**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   *\
    status: ("Y" | "N"),
  \** 备注 *\
    remark: (string | null),
  \**
   * 排序
   * @default 0
   *\
    sort: number,
  \**
   * 删除标记，已删除(Y)/未删除(N)
   * @default "N"
   *\
    delFlag: ("Y" | "N"),
  \**
   * 创建时间
   * @default 1729149009087
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1729149009087
   *\
    updatedAt: number,
  \** 创建人 *\
    createdBy: string,
  \** 更新人 *\
    updatedBy: string,
    id: number,
  \**
   * 父 ID
   * @default 0
   *\
    parentId: number,
  \** 资源编码 *\
    resourceCode: string,
  \** 资源名称 *\
    resourceName: string,
  \**
   * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
   * @default "Menu"
   *\
    resourceType: ("Menu" | "Pgae" | "Element"),
  \**
   * 页面路径
   * @default ""
   *\
    path: string,
  \**
   * 激活路径
   * @default ""
   *\
    activePath: string,
  \**
   * 组件路径
   * @default ""
   *\
    component: string,
  \**
   * 图标
   * @default ""
   *\
    icon: string,
  \**
   * 是否外链，是(Y)/否(N)
   * @default "N"
   *\
    isLink: ("Y" | "N"),
  \**
   * 是否缓存，是(Y)/否(N)
   * @default "N"
   *\
    isCache: ("Y" | "N"),
  \**
   * 是否固定，是(Y)/否(N)
   * @default "N"
   *\
    isAffix: ("Y" | "N"),
  \**
   * 是否隐藏，是(Y)/否(N)
   * @default "N"
   *\
    isHide: ("Y" | "N"),

}`
 */
  postResourceRemove = (data: PostResourceRemovePayload, params: RequestParams = {}) =>
    this.request<
      {
        /**
         * 状态，启用(Y)/禁用(N)
         * @default "N"
         */
        status: 'Y' | 'N'
        /** 备注 */
        remark: string | null
        /**
         * 排序
         * @default 0
         */
        sort: number
        /**
         * 删除标记，已删除(Y)/未删除(N)
         * @default "N"
         */
        delFlag: 'Y' | 'N'
        /**
         * 创建时间
         * @default 1729149009087
         */
        createdAt: number
        /**
         * 更新时间
         * @default 1729149009087
         */
        updatedAt: number
        /** 创建人 */
        createdBy: string
        /** 更新人 */
        updatedBy: string
        id: number
        /**
         * 父 ID
         * @default 0
         */
        parentId: number
        /** 资源编码 */
        resourceCode: string
        /** 资源名称 */
        resourceName: string
        /**
         * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
         * @default "Menu"
         */
        resourceType: 'Menu' | 'Pgae' | 'Element'
        /**
         * 页面路径
         * @default ""
         */
        path: string
        /**
         * 激活路径
         * @default ""
         */
        activePath: string
        /**
         * 组件路径
         * @default ""
         */
        component: string
        /**
         * 图标
         * @default ""
         */
        icon: string
        /**
         * 是否外链，是(Y)/否(N)
         * @default "N"
         */
        isLink: 'Y' | 'N'
        /**
         * 是否缓存，是(Y)/否(N)
         * @default "N"
         */
        isCache: 'Y' | 'N'
        /**
         * 是否固定，是(Y)/否(N)
         * @default "N"
         */
        isAffix: 'Y' | 'N'
        /**
         * 是否隐藏，是(Y)/否(N)
         * @default "N"
         */
        isHide: 'Y' | 'N'
      },
      any
    >({
      path: `/resource/remove`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
  /**
 * No description
 *
 * @tags Permission
 * @name PostResourceGet
 * @summary 资源信息
 * @request POST:/resource/get
 * @response `200` `{
  \**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   *\
    status: ("Y" | "N"),
  \** 备注 *\
    remark: (string | null),
  \**
   * 排序
   * @default 0
   *\
    sort: number,
  \**
   * 删除标记，已删除(Y)/未删除(N)
   * @default "N"
   *\
    delFlag: ("Y" | "N"),
  \**
   * 创建时间
   * @default 1729149009087
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1729149009087
   *\
    updatedAt: number,
  \** 创建人 *\
    createdBy: string,
  \** 更新人 *\
    updatedBy: string,
    id: number,
  \**
   * 父 ID
   * @default 0
   *\
    parentId: number,
  \** 资源编码 *\
    resourceCode: string,
  \** 资源名称 *\
    resourceName: string,
  \**
   * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
   * @default "Menu"
   *\
    resourceType: ("Menu" | "Pgae" | "Element"),
  \**
   * 页面路径
   * @default ""
   *\
    path: string,
  \**
   * 激活路径
   * @default ""
   *\
    activePath: string,
  \**
   * 组件路径
   * @default ""
   *\
    component: string,
  \**
   * 图标
   * @default ""
   *\
    icon: string,
  \**
   * 是否外链，是(Y)/否(N)
   * @default "N"
   *\
    isLink: ("Y" | "N"),
  \**
   * 是否缓存，是(Y)/否(N)
   * @default "N"
   *\
    isCache: ("Y" | "N"),
  \**
   * 是否固定，是(Y)/否(N)
   * @default "N"
   *\
    isAffix: ("Y" | "N"),
  \**
   * 是否隐藏，是(Y)/否(N)
   * @default "N"
   *\
    isHide: ("Y" | "N"),

}`
 */
  postResourceGet = (data: PostResourceGetPayload, params: RequestParams = {}) =>
    this.request<
      {
        /**
         * 状态，启用(Y)/禁用(N)
         * @default "N"
         */
        status: 'Y' | 'N'
        /** 备注 */
        remark: string | null
        /**
         * 排序
         * @default 0
         */
        sort: number
        /**
         * 删除标记，已删除(Y)/未删除(N)
         * @default "N"
         */
        delFlag: 'Y' | 'N'
        /**
         * 创建时间
         * @default 1729149009087
         */
        createdAt: number
        /**
         * 更新时间
         * @default 1729149009087
         */
        updatedAt: number
        /** 创建人 */
        createdBy: string
        /** 更新人 */
        updatedBy: string
        id: number
        /**
         * 父 ID
         * @default 0
         */
        parentId: number
        /** 资源编码 */
        resourceCode: string
        /** 资源名称 */
        resourceName: string
        /**
         * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
         * @default "Menu"
         */
        resourceType: 'Menu' | 'Pgae' | 'Element'
        /**
         * 页面路径
         * @default ""
         */
        path: string
        /**
         * 激活路径
         * @default ""
         */
        activePath: string
        /**
         * 组件路径
         * @default ""
         */
        component: string
        /**
         * 图标
         * @default ""
         */
        icon: string
        /**
         * 是否外链，是(Y)/否(N)
         * @default "N"
         */
        isLink: 'Y' | 'N'
        /**
         * 是否缓存，是(Y)/否(N)
         * @default "N"
         */
        isCache: 'Y' | 'N'
        /**
         * 是否固定，是(Y)/否(N)
         * @default "N"
         */
        isAffix: 'Y' | 'N'
        /**
         * 是否隐藏，是(Y)/否(N)
         * @default "N"
         */
        isHide: 'Y' | 'N'
      },
      any
    >({
      path: `/resource/get`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
  /**
 * No description
 *
 * @tags Permission
 * @name PostResourceFind
 * @summary 资源列表
 * @request POST:/resource/find
 * @response `200` `{
    records: ({
  \**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   *\
    status: ("Y" | "N"),
  \** 备注 *\
    remark: (string | null),
  \**
   * 排序
   * @default 0
   *\
    sort: number,
  \**
   * 删除标记，已删除(Y)/未删除(N)
   * @default "N"
   *\
    delFlag: ("Y" | "N"),
  \**
   * 创建时间
   * @default 1729149009087
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1729149009087
   *\
    updatedAt: number,
  \** 创建人 *\
    createdBy: string,
  \** 更新人 *\
    updatedBy: string,
    id: number,
  \**
   * 父 ID
   * @default 0
   *\
    parentId: number,
  \** 资源编码 *\
    resourceCode: string,
  \** 资源名称 *\
    resourceName: string,
  \**
   * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
   * @default "Menu"
   *\
    resourceType: ("Menu" | "Pgae" | "Element"),
  \**
   * 页面路径
   * @default ""
   *\
    path: string,
  \**
   * 激活路径
   * @default ""
   *\
    activePath: string,
  \**
   * 组件路径
   * @default ""
   *\
    component: string,
  \**
   * 图标
   * @default ""
   *\
    icon: string,
  \**
   * 是否外链，是(Y)/否(N)
   * @default "N"
   *\
    isLink: ("Y" | "N"),
  \**
   * 是否缓存，是(Y)/否(N)
   * @default "N"
   *\
    isCache: ("Y" | "N"),
  \**
   * 是否固定，是(Y)/否(N)
   * @default "N"
   *\
    isAffix: ("Y" | "N"),
  \**
   * 是否隐藏，是(Y)/否(N)
   * @default "N"
   *\
    isHide: ("Y" | "N"),

})[],
    total: number,

}`
 */
  postResourceFind = (data: PostResourceFindPayload, params: RequestParams = {}) =>
    this.request<
      {
        records: {
          /**
           * 状态，启用(Y)/禁用(N)
           * @default "N"
           */
          status: 'Y' | 'N'
          /** 备注 */
          remark: string | null
          /**
           * 排序
           * @default 0
           */
          sort: number
          /**
           * 删除标记，已删除(Y)/未删除(N)
           * @default "N"
           */
          delFlag: 'Y' | 'N'
          /**
           * 创建时间
           * @default 1729149009087
           */
          createdAt: number
          /**
           * 更新时间
           * @default 1729149009087
           */
          updatedAt: number
          /** 创建人 */
          createdBy: string
          /** 更新人 */
          updatedBy: string
          id: number
          /**
           * 父 ID
           * @default 0
           */
          parentId: number
          /** 资源编码 */
          resourceCode: string
          /** 资源名称 */
          resourceName: string
          /**
           * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
           * @default "Menu"
           */
          resourceType: 'Menu' | 'Pgae' | 'Element'
          /**
           * 页面路径
           * @default ""
           */
          path: string
          /**
           * 激活路径
           * @default ""
           */
          activePath: string
          /**
           * 组件路径
           * @default ""
           */
          component: string
          /**
           * 图标
           * @default ""
           */
          icon: string
          /**
           * 是否外链，是(Y)/否(N)
           * @default "N"
           */
          isLink: 'Y' | 'N'
          /**
           * 是否缓存，是(Y)/否(N)
           * @default "N"
           */
          isCache: 'Y' | 'N'
          /**
           * 是否固定，是(Y)/否(N)
           * @default "N"
           */
          isAffix: 'Y' | 'N'
          /**
           * 是否隐藏，是(Y)/否(N)
           * @default "N"
           */
          isHide: 'Y' | 'N'
        }[]
        total: number
      },
      any
    >({
      path: `/resource/find`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
  /**
 * No description
 *
 * @tags Permission
 * @name PostResourceFindAll
 * @summary 资源全部
 * @request POST:/resource/findAll
 * @response `200` `{
    records: ({
  \**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   *\
    status: ("Y" | "N"),
  \** 备注 *\
    remark: (string | null),
  \**
   * 排序
   * @default 0
   *\
    sort: number,
  \**
   * 删除标记，已删除(Y)/未删除(N)
   * @default "N"
   *\
    delFlag: ("Y" | "N"),
  \**
   * 创建时间
   * @default 1729149009087
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1729149009087
   *\
    updatedAt: number,
  \** 创建人 *\
    createdBy: string,
  \** 更新人 *\
    updatedBy: string,
    id: number,
  \**
   * 父 ID
   * @default 0
   *\
    parentId: number,
  \** 资源编码 *\
    resourceCode: string,
  \** 资源名称 *\
    resourceName: string,
  \**
   * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
   * @default "Menu"
   *\
    resourceType: ("Menu" | "Pgae" | "Element"),
  \**
   * 页面路径
   * @default ""
   *\
    path: string,
  \**
   * 激活路径
   * @default ""
   *\
    activePath: string,
  \**
   * 组件路径
   * @default ""
   *\
    component: string,
  \**
   * 图标
   * @default ""
   *\
    icon: string,
  \**
   * 是否外链，是(Y)/否(N)
   * @default "N"
   *\
    isLink: ("Y" | "N"),
  \**
   * 是否缓存，是(Y)/否(N)
   * @default "N"
   *\
    isCache: ("Y" | "N"),
  \**
   * 是否固定，是(Y)/否(N)
   * @default "N"
   *\
    isAffix: ("Y" | "N"),
  \**
   * 是否隐藏，是(Y)/否(N)
   * @default "N"
   *\
    isHide: ("Y" | "N"),

})[],
    total: number,

}`
 */
  postResourceFindAll = (data: PostResourceFindAllPayload, params: RequestParams = {}) =>
    this.request<
      {
        records: {
          /**
           * 状态，启用(Y)/禁用(N)
           * @default "N"
           */
          status: 'Y' | 'N'
          /** 备注 */
          remark: string | null
          /**
           * 排序
           * @default 0
           */
          sort: number
          /**
           * 删除标记，已删除(Y)/未删除(N)
           * @default "N"
           */
          delFlag: 'Y' | 'N'
          /**
           * 创建时间
           * @default 1729149009087
           */
          createdAt: number
          /**
           * 更新时间
           * @default 1729149009087
           */
          updatedAt: number
          /** 创建人 */
          createdBy: string
          /** 更新人 */
          updatedBy: string
          id: number
          /**
           * 父 ID
           * @default 0
           */
          parentId: number
          /** 资源编码 */
          resourceCode: string
          /** 资源名称 */
          resourceName: string
          /**
           * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
           * @default "Menu"
           */
          resourceType: 'Menu' | 'Pgae' | 'Element'
          /**
           * 页面路径
           * @default ""
           */
          path: string
          /**
           * 激活路径
           * @default ""
           */
          activePath: string
          /**
           * 组件路径
           * @default ""
           */
          component: string
          /**
           * 图标
           * @default ""
           */
          icon: string
          /**
           * 是否外链，是(Y)/否(N)
           * @default "N"
           */
          isLink: 'Y' | 'N'
          /**
           * 是否缓存，是(Y)/否(N)
           * @default "N"
           */
          isCache: 'Y' | 'N'
          /**
           * 是否固定，是(Y)/否(N)
           * @default "N"
           */
          isAffix: 'Y' | 'N'
          /**
           * 是否隐藏，是(Y)/否(N)
           * @default "N"
           */
          isHide: 'Y' | 'N'
        }[]
        total: number
      },
      any
    >({
      path: `/resource/findAll`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
}
