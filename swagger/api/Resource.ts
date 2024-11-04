import {
  PostResourceCreatePayload,
  PostResourceFindPayload,
  PostResourceFindTreePayload,
  PostResourceGetPayload,
  PostResourceGetRolesPayload,
  PostResourceGetUsersPayload,
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
   * @default 1730691246457
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1730691246457
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
  \** 资源名称（英文） *\
    resourceNameEn: string,
  \** 资源名称（中文） *\
    resourceNameZhCn: string,
  \**
   * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
   * @default "Menu"
   *\
    resourceType: ("Menu" | "Pgae" | "Element"),
  \** 页面路径 *\
    path: (string | null),
  \** 激活路径 *\
    activePath: (string | null),
  \** 组件路径 *\
    component: (string | null),
  \** 图标 *\
    icon: (string | null),
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
         * @default 1730691246457
         */
        createdAt: number
        /**
         * 更新时间
         * @default 1730691246457
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
        /** 资源名称（英文） */
        resourceNameEn: string
        /** 资源名称（中文） */
        resourceNameZhCn: string
        /**
         * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
         * @default "Menu"
         */
        resourceType: 'Menu' | 'Pgae' | 'Element'
        /** 页面路径 */
        path: string | null
        /** 激活路径 */
        activePath: string | null
        /** 组件路径 */
        component: string | null
        /** 图标 */
        icon: string | null
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
   * @default 1730691246457
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1730691246457
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
  \** 资源名称（英文） *\
    resourceNameEn: string,
  \** 资源名称（中文） *\
    resourceNameZhCn: string,
  \**
   * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
   * @default "Menu"
   *\
    resourceType: ("Menu" | "Pgae" | "Element"),
  \** 页面路径 *\
    path: (string | null),
  \** 激活路径 *\
    activePath: (string | null),
  \** 组件路径 *\
    component: (string | null),
  \** 图标 *\
    icon: (string | null),
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
         * @default 1730691246457
         */
        createdAt: number
        /**
         * 更新时间
         * @default 1730691246457
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
        /** 资源名称（英文） */
        resourceNameEn: string
        /** 资源名称（中文） */
        resourceNameZhCn: string
        /**
         * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
         * @default "Menu"
         */
        resourceType: 'Menu' | 'Pgae' | 'Element'
        /** 页面路径 */
        path: string | null
        /** 激活路径 */
        activePath: string | null
        /** 组件路径 */
        component: string | null
        /** 图标 */
        icon: string | null
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
   * @default 1730691246457
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1730691246457
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
  \** 资源名称（英文） *\
    resourceNameEn: string,
  \** 资源名称（中文） *\
    resourceNameZhCn: string,
  \**
   * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
   * @default "Menu"
   *\
    resourceType: ("Menu" | "Pgae" | "Element"),
  \** 页面路径 *\
    path: (string | null),
  \** 激活路径 *\
    activePath: (string | null),
  \** 组件路径 *\
    component: (string | null),
  \** 图标 *\
    icon: (string | null),
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
         * @default 1730691246457
         */
        createdAt: number
        /**
         * 更新时间
         * @default 1730691246457
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
        /** 资源名称（英文） */
        resourceNameEn: string
        /** 资源名称（中文） */
        resourceNameZhCn: string
        /**
         * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
         * @default "Menu"
         */
        resourceType: 'Menu' | 'Pgae' | 'Element'
        /** 页面路径 */
        path: string | null
        /** 激活路径 */
        activePath: string | null
        /** 组件路径 */
        component: string | null
        /** 图标 */
        icon: string | null
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
   * @default 1730691246457
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1730691246457
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
  \** 资源名称（英文） *\
    resourceNameEn: string,
  \** 资源名称（中文） *\
    resourceNameZhCn: string,
  \**
   * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
   * @default "Menu"
   *\
    resourceType: ("Menu" | "Pgae" | "Element"),
  \** 页面路径 *\
    path: (string | null),
  \** 激活路径 *\
    activePath: (string | null),
  \** 组件路径 *\
    component: (string | null),
  \** 图标 *\
    icon: (string | null),
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
         * @default 1730691246457
         */
        createdAt: number
        /**
         * 更新时间
         * @default 1730691246457
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
        /** 资源名称（英文） */
        resourceNameEn: string
        /** 资源名称（中文） */
        resourceNameZhCn: string
        /**
         * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
         * @default "Menu"
         */
        resourceType: 'Menu' | 'Pgae' | 'Element'
        /** 页面路径 */
        path: string | null
        /** 激活路径 */
        activePath: string | null
        /** 组件路径 */
        component: string | null
        /** 图标 */
        icon: string | null
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
   * @default 1730691246457
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1730691246457
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
  \** 资源名称（英文） *\
    resourceNameEn: string,
  \** 资源名称（中文） *\
    resourceNameZhCn: string,
  \**
   * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
   * @default "Menu"
   *\
    resourceType: ("Menu" | "Pgae" | "Element"),
  \** 页面路径 *\
    path: (string | null),
  \** 激活路径 *\
    activePath: (string | null),
  \** 组件路径 *\
    component: (string | null),
  \** 图标 *\
    icon: (string | null),
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
           * @default 1730691246457
           */
          createdAt: number
          /**
           * 更新时间
           * @default 1730691246457
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
          /** 资源名称（英文） */
          resourceNameEn: string
          /** 资源名称（中文） */
          resourceNameZhCn: string
          /**
           * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
           * @default "Menu"
           */
          resourceType: 'Menu' | 'Pgae' | 'Element'
          /** 页面路径 */
          path: string | null
          /** 激活路径 */
          activePath: string | null
          /** 组件路径 */
          component: string | null
          /** 图标 */
          icon: string | null
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
 * @name PostResourceFindTree
 * @summary 资源树
 * @request POST:/resource/findTree
 * @response `200` `({
    id: number,
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
   * @default 1730691246457
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1730691246457
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
  \** 资源名称（英文） *\
    resourceNameEn: string,
  \** 资源名称（中文） *\
    resourceNameZhCn: string,
  \**
   * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
   * @default "Menu"
   *\
    resourceType: ("Menu" | "Pgae" | "Element"),
  \** 页面路径 *\
    path: (string | null),
  \** 激活路径 *\
    activePath: (string | null),
  \** 组件路径 *\
    component: (string | null),
  \** 图标 *\
    icon: (string | null),
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
  postResourceFindTree = (data: PostResourceFindTreePayload, params: RequestParams = {}) =>
    this.request<
      {
        id: number
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
         * @default 1730691246457
         */
        createdAt: number
        /**
         * 更新时间
         * @default 1730691246457
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
        /** 资源名称（英文） */
        resourceNameEn: string
        /** 资源名称（中文） */
        resourceNameZhCn: string
        /**
         * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
         * @default "Menu"
         */
        resourceType: 'Menu' | 'Pgae' | 'Element'
        /** 页面路径 */
        path: string | null
        /** 激活路径 */
        activePath: string | null
        /** 组件路径 */
        component: string | null
        /** 图标 */
        icon: string | null
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
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
  /**
 * No description
 *
 * @tags Permission
 * @name PostResourceGetUsers
 * @summary 获取资源的用户列表
 * @request POST:/resource/getUsers
 * @response `200` `{
    records: ({
    id: number,
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
   * @default 1730691246457
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1730691246457
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
  postResourceGetUsers = (data: PostResourceGetUsersPayload, params: RequestParams = {}) =>
    this.request<
      {
        records: {
          id: number
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
           * @default 1730691246457
           */
          createdAt: number
          /**
           * 更新时间
           * @default 1730691246457
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
      path: `/resource/getUsers`,
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
 * @name PostResourceGetRoles
 * @summary 获取资源的角色列表
 * @request POST:/resource/getRoles
 * @response `200` `{
    records: ({
    id: number,
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
   * @default 1730691246457
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1730691246457
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
  postResourceGetRoles = (data: PostResourceGetRolesPayload, params: RequestParams = {}) =>
    this.request<
      {
        records: {
          id: number
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
           * @default 1730691246457
           */
          createdAt: number
          /**
           * 更新时间
           * @default 1730691246457
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
      path: `/resource/getRoles`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
}
