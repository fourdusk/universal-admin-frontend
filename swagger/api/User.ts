import {
  PostUserCreatePayload,
  PostUserFindPayload,
  PostUserFindResourcesPayload,
  PostUserFindResourceTreePayload,
  PostUserFindRolesPayload,
  PostUserGetPayload,
  PostUserGetResourcesPayload,
  PostUserGetRolesPayload,
  PostUserRemovePayload,
  PostUserUpdatePayload
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
 * No description
 *
 * @tags User
 * @name PostUserCreate
 * @summary 用户创建
 * @request POST:/user/create
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
   * @default 1731575784888
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1731575784888
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

}`
 */
  postUserCreate = (data: PostUserCreatePayload, params: RequestParams = {}) =>
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
         * @default 1731575784888
         */
        createdAt: number
        /**
         * 更新时间
         * @default 1731575784888
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
      },
      any
    >({
      path: `/user/create`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
  /**
 * No description
 *
 * @tags User
 * @name PostUserUpdate
 * @summary 用户更新
 * @request POST:/user/update
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
   * @default 1731575784888
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1731575784888
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

}`
 */
  postUserUpdate = (data: PostUserUpdatePayload, params: RequestParams = {}) =>
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
         * @default 1731575784888
         */
        createdAt: number
        /**
         * 更新时间
         * @default 1731575784888
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
      },
      any
    >({
      path: `/user/update`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
  /**
 * No description
 *
 * @tags User
 * @name PostUserRemove
 * @summary 用户删除
 * @request POST:/user/remove
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
   * @default 1731575784888
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1731575784888
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

}`
 */
  postUserRemove = (data: PostUserRemovePayload, params: RequestParams = {}) =>
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
         * @default 1731575784888
         */
        createdAt: number
        /**
         * 更新时间
         * @default 1731575784888
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
      },
      any
    >({
      path: `/user/remove`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
  /**
 * No description
 *
 * @tags User
 * @name PostUserGet
 * @summary 用户信息
 * @request POST:/user/get
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
   * @default 1731575784888
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1731575784888
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

}`
 */
  postUserGet = (data: PostUserGetPayload, params: RequestParams = {}) =>
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
         * @default 1731575784888
         */
        createdAt: number
        /**
         * 更新时间
         * @default 1731575784888
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
      },
      any
    >({
      path: `/user/get`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
  /**
 * No description
 *
 * @tags User
 * @name PostUserFind
 * @summary 用户列表
 * @request POST:/user/find
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
   * @default 1731575784888
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1731575784888
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
  postUserFind = (data: PostUserFindPayload, params: RequestParams = {}) =>
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
           * @default 1731575784888
           */
          createdAt: number
          /**
           * 更新时间
           * @default 1731575784888
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
      path: `/user/find`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
  /**
 * No description
 *
 * @tags User
 * @name PostUserGetRoles
 * @summary 获取用户的角色列表
 * @request POST:/user/getRoles
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
   * @default 1731575784888
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1731575784888
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
  postUserGetRoles = (data: PostUserGetRolesPayload, params: RequestParams = {}) =>
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
           * @default 1731575784888
           */
          createdAt: number
          /**
           * 更新时间
           * @default 1731575784888
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
      path: `/user/getRoles`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
  /**
 * No description
 *
 * @tags User
 * @name PostUserGetResources
 * @summary 获取用户的资源列表
 * @request POST:/user/getResources
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
   * @default 1731575784888
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1731575784888
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
  postUserGetResources = (data: PostUserGetResourcesPayload, params: RequestParams = {}) =>
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
           * @default 1731575784888
           */
          createdAt: number
          /**
           * 更新时间
           * @default 1731575784888
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
      path: `/user/getResources`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
  /**
 * No description
 *
 * @tags User
 * @name PostUserFindRoles
 * @summary 查询用户的角色列表
 * @request POST:/user/findRoles
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
   * @default 1731575784888
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1731575784888
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
  postUserFindRoles = (data: PostUserFindRolesPayload, params: RequestParams = {}) =>
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
           * @default 1731575784888
           */
          createdAt: number
          /**
           * 更新时间
           * @default 1731575784888
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
      path: `/user/findRoles`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
  /**
 * No description
 *
 * @tags User
 * @name PostUserFindResources
 * @summary 查询用户的资源列表
 * @request POST:/user/findResources
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
   * @default 1731575784888
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1731575784888
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
  postUserFindResources = (data: PostUserFindResourcesPayload, params: RequestParams = {}) =>
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
           * @default 1731575784888
           */
          createdAt: number
          /**
           * 更新时间
           * @default 1731575784888
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
      path: `/user/findResources`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
  /**
 * No description
 *
 * @tags User
 * @name PostUserFindResourceTree
 * @summary 用户资源树
 * @request POST:/user/findResourceTree
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
   * @default 1731575784888
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1731575784888
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
  postUserFindResourceTree = (data: PostUserFindResourceTreePayload, params: RequestParams = {}) =>
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
         * @default 1731575784888
         */
        createdAt: number
        /**
         * 更新时间
         * @default 1731575784888
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
      path: `/user/findResourceTree`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
}
