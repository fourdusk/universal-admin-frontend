import {
  PostRoleCreatePayload,
  PostRoleFindPayload,
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
  \** 角色编码 *\
    roleCode: string,
  \** 角色名称 *\
    roleName: string,

}`
 */
  postRoleCreate = (data: PostRoleCreatePayload, params: RequestParams = {}) =>
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
  \** 角色编码 *\
    roleCode: string,
  \** 角色名称 *\
    roleName: string,

}`
 */
  postRoleUpdate = (data: PostRoleUpdatePayload, params: RequestParams = {}) =>
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
  \** 角色编码 *\
    roleCode: string,
  \** 角色名称 *\
    roleName: string,

}`
 */
  postRoleRemove = (data: PostRoleRemovePayload, params: RequestParams = {}) =>
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
  \** 角色编码 *\
    roleCode: string,
  \** 角色名称 *\
    roleName: string,

}`
 */
  postRoleGet = (data: PostRoleGetPayload, params: RequestParams = {}) =>
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
}
