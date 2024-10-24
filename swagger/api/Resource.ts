import {
  PostResourceCreatePayload,
  PostResourceFindAllPayload,
  PostResourceFindAllRolesPayload,
  PostResourceFindAllUsersPayload,
  PostResourceFindPayload,
  PostResourceFindRolesPayload,
  PostResourceFindUsersPayload,
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
    id: number,
    remark: ((null | string) | null),
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
   * @default 1729735172479
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1729735172479
   *\
    updatedAt: number,
  \** 创建人 *\
    createdBy: string,
  \** 更新人 *\
    updatedBy: string,
  \**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   *\
    status: ("Y" | "N"),
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
    path: ((null | string) | null),
    activePath: ((null | string) | null),
    component: ((null | string) | null),
    icon: ((null | string) | null),
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
        id: number
        remark: (null | string) | null
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
         * @default 1729735172479
         */
        createdAt: number
        /**
         * 更新时间
         * @default 1729735172479
         */
        updatedAt: number
        /** 创建人 */
        createdBy: string
        /** 更新人 */
        updatedBy: string
        /**
         * 状态，启用(Y)/禁用(N)
         * @default "N"
         */
        status: 'Y' | 'N'
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
        path: (null | string) | null
        activePath: (null | string) | null
        component: (null | string) | null
        icon: (null | string) | null
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
    id: number,
    remark: ((null | string) | null),
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
   * @default 1729735172479
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1729735172479
   *\
    updatedAt: number,
  \** 创建人 *\
    createdBy: string,
  \** 更新人 *\
    updatedBy: string,
  \**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   *\
    status: ("Y" | "N"),
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
    path: ((null | string) | null),
    activePath: ((null | string) | null),
    component: ((null | string) | null),
    icon: ((null | string) | null),
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
        id: number
        remark: (null | string) | null
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
         * @default 1729735172479
         */
        createdAt: number
        /**
         * 更新时间
         * @default 1729735172479
         */
        updatedAt: number
        /** 创建人 */
        createdBy: string
        /** 更新人 */
        updatedBy: string
        /**
         * 状态，启用(Y)/禁用(N)
         * @default "N"
         */
        status: 'Y' | 'N'
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
        path: (null | string) | null
        activePath: (null | string) | null
        component: (null | string) | null
        icon: (null | string) | null
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
    id: number,
    remark: ((null | string) | null),
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
   * @default 1729735172479
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1729735172479
   *\
    updatedAt: number,
  \** 创建人 *\
    createdBy: string,
  \** 更新人 *\
    updatedBy: string,
  \**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   *\
    status: ("Y" | "N"),
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
    path: ((null | string) | null),
    activePath: ((null | string) | null),
    component: ((null | string) | null),
    icon: ((null | string) | null),
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
        id: number
        remark: (null | string) | null
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
         * @default 1729735172479
         */
        createdAt: number
        /**
         * 更新时间
         * @default 1729735172479
         */
        updatedAt: number
        /** 创建人 */
        createdBy: string
        /** 更新人 */
        updatedBy: string
        /**
         * 状态，启用(Y)/禁用(N)
         * @default "N"
         */
        status: 'Y' | 'N'
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
        path: (null | string) | null
        activePath: (null | string) | null
        component: (null | string) | null
        icon: (null | string) | null
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
    id: number,
    remark: ((null | string) | null),
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
   * @default 1729735172479
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1729735172479
   *\
    updatedAt: number,
  \** 创建人 *\
    createdBy: string,
  \** 更新人 *\
    updatedBy: string,
  \**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   *\
    status: ("Y" | "N"),
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
    path: ((null | string) | null),
    activePath: ((null | string) | null),
    component: ((null | string) | null),
    icon: ((null | string) | null),
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
        id: number
        remark: (null | string) | null
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
         * @default 1729735172479
         */
        createdAt: number
        /**
         * 更新时间
         * @default 1729735172479
         */
        updatedAt: number
        /** 创建人 */
        createdBy: string
        /** 更新人 */
        updatedBy: string
        /**
         * 状态，启用(Y)/禁用(N)
         * @default "N"
         */
        status: 'Y' | 'N'
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
        path: (null | string) | null
        activePath: (null | string) | null
        component: (null | string) | null
        icon: (null | string) | null
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
    id: number,
    remark: ((null | string) | null),
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
   * @default 1729735172479
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1729735172479
   *\
    updatedAt: number,
  \** 创建人 *\
    createdBy: string,
  \** 更新人 *\
    updatedBy: string,
  \**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   *\
    status: ("Y" | "N"),
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
    path: ((null | string) | null),
    activePath: ((null | string) | null),
    component: ((null | string) | null),
    icon: ((null | string) | null),
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
          id: number
          remark: (null | string) | null
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
           * @default 1729735172479
           */
          createdAt: number
          /**
           * 更新时间
           * @default 1729735172479
           */
          updatedAt: number
          /** 创建人 */
          createdBy: string
          /** 更新人 */
          updatedBy: string
          /**
           * 状态，启用(Y)/禁用(N)
           * @default "N"
           */
          status: 'Y' | 'N'
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
          path: (null | string) | null
          activePath: (null | string) | null
          component: (null | string) | null
          icon: (null | string) | null
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
    id: number,
    remark: ((null | string) | null),
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
   * @default 1729735172479
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1729735172479
   *\
    updatedAt: number,
  \** 创建人 *\
    createdBy: string,
  \** 更新人 *\
    updatedBy: string,
  \**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   *\
    status: ("Y" | "N"),
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
    path: ((null | string) | null),
    activePath: ((null | string) | null),
    component: ((null | string) | null),
    icon: ((null | string) | null),
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
          id: number
          remark: (null | string) | null
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
           * @default 1729735172479
           */
          createdAt: number
          /**
           * 更新时间
           * @default 1729735172479
           */
          updatedAt: number
          /** 创建人 */
          createdBy: string
          /** 更新人 */
          updatedBy: string
          /**
           * 状态，启用(Y)/禁用(N)
           * @default "N"
           */
          status: 'Y' | 'N'
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
          path: (null | string) | null
          activePath: (null | string) | null
          component: (null | string) | null
          icon: (null | string) | null
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
  /**
 * No description
 *
 * @tags Permission
 * @name PostResourceFindTree
 * @summary 资源树
 * @request POST:/resource/findTree
 * @response `200` `({
    id: number,
    remark: ((null | string) | null),
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
   * @default 1729735172479
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1729735172479
   *\
    updatedAt: number,
  \** 创建人 *\
    createdBy: string,
  \** 更新人 *\
    updatedBy: string,
  \**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   *\
    status: ("Y" | "N"),
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
    path: ((null | string) | null),
    activePath: ((null | string) | null),
    component: ((null | string) | null),
    icon: ((null | string) | null),
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
    children: (any)[],

})[]`
 */
  postResourceFindTree = (params: RequestParams = {}) =>
    this.request<
      {
        id: number
        remark: (null | string) | null
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
         * @default 1729735172479
         */
        createdAt: number
        /**
         * 更新时间
         * @default 1729735172479
         */
        updatedAt: number
        /** 创建人 */
        createdBy: string
        /** 更新人 */
        updatedBy: string
        /**
         * 状态，启用(Y)/禁用(N)
         * @default "N"
         */
        status: 'Y' | 'N'
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
        path: (null | string) | null
        activePath: (null | string) | null
        component: (null | string) | null
        icon: (null | string) | null
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
        children: any[]
      }[],
      any
    >({
      path: `/resource/findTree`,
      method: 'POST',
      format: 'json',
      ...params
    })
  /**
 * No description
 *
 * @tags Permission
 * @name PostResourceFindUsers
 * @summary 资源拥有的用户列表
 * @request POST:/resource/findUsers
 * @response `200` `{
    records: ({
    id: number,
    remark: ((null | string) | null),
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
   * @default 1729735172479
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1729735172479
   *\
    updatedAt: number,
  \** 创建人 *\
    createdBy: string,
  \** 更新人 *\
    updatedBy: string,
  \**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   *\
    status: ("Y" | "N"),
  \** 用户名 *\
    username: string,
  \**
   * 是否管理员，是(Y)/否(N)
   * @default "N"
   *\
    isAdmin: ("Y" | "N"),
  \** 最后登录时间 *\
    lastSignInAt: (number | null),

})[],
    total: number,

}`
 */
  postResourceFindUsers = (data: PostResourceFindUsersPayload, params: RequestParams = {}) =>
    this.request<
      {
        records: {
          id: number
          remark: (null | string) | null
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
           * @default 1729735172479
           */
          createdAt: number
          /**
           * 更新时间
           * @default 1729735172479
           */
          updatedAt: number
          /** 创建人 */
          createdBy: string
          /** 更新人 */
          updatedBy: string
          /**
           * 状态，启用(Y)/禁用(N)
           * @default "N"
           */
          status: 'Y' | 'N'
          /** 用户名 */
          username: string
          /**
           * 是否管理员，是(Y)/否(N)
           * @default "N"
           */
          isAdmin: 'Y' | 'N'
          /** 最后登录时间 */
          lastSignInAt: number | null
        }[]
        total: number
      },
      any
    >({
      path: `/resource/findUsers`,
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
 * @name PostResourceFindAllUsers
 * @summary 资源拥有的用户全部
 * @request POST:/resource/findAllUsers
 * @response `200` `{
    records: ({
    id: number,
    remark: ((null | string) | null),
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
   * @default 1729735172479
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1729735172479
   *\
    updatedAt: number,
  \** 创建人 *\
    createdBy: string,
  \** 更新人 *\
    updatedBy: string,
  \**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   *\
    status: ("Y" | "N"),
  \** 用户名 *\
    username: string,
  \**
   * 是否管理员，是(Y)/否(N)
   * @default "N"
   *\
    isAdmin: ("Y" | "N"),
  \** 最后登录时间 *\
    lastSignInAt: (number | null),

})[],
    total: number,

}`
 */
  postResourceFindAllUsers = (data: PostResourceFindAllUsersPayload, params: RequestParams = {}) =>
    this.request<
      {
        records: {
          id: number
          remark: (null | string) | null
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
           * @default 1729735172479
           */
          createdAt: number
          /**
           * 更新时间
           * @default 1729735172479
           */
          updatedAt: number
          /** 创建人 */
          createdBy: string
          /** 更新人 */
          updatedBy: string
          /**
           * 状态，启用(Y)/禁用(N)
           * @default "N"
           */
          status: 'Y' | 'N'
          /** 用户名 */
          username: string
          /**
           * 是否管理员，是(Y)/否(N)
           * @default "N"
           */
          isAdmin: 'Y' | 'N'
          /** 最后登录时间 */
          lastSignInAt: number | null
        }[]
        total: number
      },
      any
    >({
      path: `/resource/findAllUsers`,
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
 * @name PostResourceFindRoles
 * @summary 资源拥有的角色列表
 * @request POST:/resource/findRoles
 * @response `200` `{
    records: ({
    id: number,
    remark: ((null | string) | null),
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
   * @default 1729735172479
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1729735172479
   *\
    updatedAt: number,
  \** 创建人 *\
    createdBy: string,
  \** 更新人 *\
    updatedBy: string,
  \**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   *\
    status: ("Y" | "N"),
  \** 角色编码 *\
    roleCode: string,
  \** 角色名称 *\
    roleName: string,

})[],
    total: number,

}`
 */
  postResourceFindRoles = (data: PostResourceFindRolesPayload, params: RequestParams = {}) =>
    this.request<
      {
        records: {
          id: number
          remark: (null | string) | null
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
           * @default 1729735172479
           */
          createdAt: number
          /**
           * 更新时间
           * @default 1729735172479
           */
          updatedAt: number
          /** 创建人 */
          createdBy: string
          /** 更新人 */
          updatedBy: string
          /**
           * 状态，启用(Y)/禁用(N)
           * @default "N"
           */
          status: 'Y' | 'N'
          /** 角色编码 */
          roleCode: string
          /** 角色名称 */
          roleName: string
        }[]
        total: number
      },
      any
    >({
      path: `/resource/findRoles`,
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
 * @name PostResourceFindAllRoles
 * @summary 资源拥有的角色全部
 * @request POST:/resource/findAllRoles
 * @response `200` `{
    records: ({
    id: number,
    remark: ((null | string) | null),
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
   * @default 1729735172479
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1729735172479
   *\
    updatedAt: number,
  \** 创建人 *\
    createdBy: string,
  \** 更新人 *\
    updatedBy: string,
  \**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   *\
    status: ("Y" | "N"),
  \** 角色编码 *\
    roleCode: string,
  \** 角色名称 *\
    roleName: string,

})[],
    total: number,

}`
 */
  postResourceFindAllRoles = (data: PostResourceFindAllRolesPayload, params: RequestParams = {}) =>
    this.request<
      {
        records: {
          id: number
          remark: (null | string) | null
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
           * @default 1729735172479
           */
          createdAt: number
          /**
           * 更新时间
           * @default 1729735172479
           */
          updatedAt: number
          /** 创建人 */
          createdBy: string
          /** 更新人 */
          updatedBy: string
          /**
           * 状态，启用(Y)/禁用(N)
           * @default "N"
           */
          status: 'Y' | 'N'
          /** 角色编码 */
          roleCode: string
          /** 角色名称 */
          roleName: string
        }[]
        total: number
      },
      any
    >({
      path: `/resource/findAllRoles`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
}
