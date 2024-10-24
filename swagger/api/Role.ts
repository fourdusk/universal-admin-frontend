import {
  PostRoleCreatePayload,
  PostRoleFindAllPayload,
  PostRoleFindAllResourcesPayload,
  PostRoleFindAllUsersPayload,
  PostRoleFindPayload,
  PostRoleFindResourcesPayload,
  PostRoleFindUsersPayload,
  PostRoleGetPayload,
  PostRoleRemovePayload,
  PostRoleUpdatePayload
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Role<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
 * No description
 *
 * @tags Permission
 * @name PostRoleCreate
 * @summary 角色创建
 * @request POST:/role/create
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
  \** 角色编码 *\
    roleCode: string,
  \** 角色名称 *\
    roleName: string,

}`
 */
  postRoleCreate = (data: PostRoleCreatePayload, params: RequestParams = {}) =>
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
        /** 角色编码 */
        roleCode: string
        /** 角色名称 */
        roleName: string
      },
      any
    >({
      path: `/role/create`,
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
 * @name PostRoleUpdate
 * @summary 角色更新
 * @request POST:/role/update
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
  \** 角色编码 *\
    roleCode: string,
  \** 角色名称 *\
    roleName: string,

}`
 */
  postRoleUpdate = (data: PostRoleUpdatePayload, params: RequestParams = {}) =>
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
        /** 角色编码 */
        roleCode: string
        /** 角色名称 */
        roleName: string
      },
      any
    >({
      path: `/role/update`,
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
 * @name PostRoleRemove
 * @summary 角色删除
 * @request POST:/role/remove
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
  \** 角色编码 *\
    roleCode: string,
  \** 角色名称 *\
    roleName: string,

}`
 */
  postRoleRemove = (data: PostRoleRemovePayload, params: RequestParams = {}) =>
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
        /** 角色编码 */
        roleCode: string
        /** 角色名称 */
        roleName: string
      },
      any
    >({
      path: `/role/remove`,
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
 * @name PostRoleGet
 * @summary 角色信息
 * @request POST:/role/get
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
  \** 角色编码 *\
    roleCode: string,
  \** 角色名称 *\
    roleName: string,

}`
 */
  postRoleGet = (data: PostRoleGetPayload, params: RequestParams = {}) =>
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
        /** 角色编码 */
        roleCode: string
        /** 角色名称 */
        roleName: string
      },
      any
    >({
      path: `/role/get`,
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
 * @name PostRoleFind
 * @summary 角色列表
 * @request POST:/role/find
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
  postRoleFind = (data: PostRoleFindPayload, params: RequestParams = {}) =>
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
      path: `/role/find`,
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
 * @name PostRoleFindAll
 * @summary 角色全部
 * @request POST:/role/findAll
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
  postRoleFindAll = (data: PostRoleFindAllPayload, params: RequestParams = {}) =>
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
      path: `/role/findAll`,
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
 * @name PostRoleFindUsers
 * @summary 角色拥有的用户列表
 * @request POST:/role/findUsers
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
  postRoleFindUsers = (data: PostRoleFindUsersPayload, params: RequestParams = {}) =>
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
      path: `/role/findUsers`,
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
 * @name PostRoleFindAllUsers
 * @summary 角色拥有的用户全部
 * @request POST:/role/findAllUsers
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
  postRoleFindAllUsers = (data: PostRoleFindAllUsersPayload, params: RequestParams = {}) =>
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
      path: `/role/findAllUsers`,
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
 * @name PostRoleFindResources
 * @summary 角色拥有的资源列表
 * @request POST:/role/findResources
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
  postRoleFindResources = (data: PostRoleFindResourcesPayload, params: RequestParams = {}) =>
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
      path: `/role/findResources`,
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
 * @name PostRoleFindAllResources
 * @summary 角色拥有的资源全部
 * @request POST:/role/findAllResources
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
  postRoleFindAllResources = (data: PostRoleFindAllResourcesPayload, params: RequestParams = {}) =>
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
      path: `/role/findAllResources`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
}
