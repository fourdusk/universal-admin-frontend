import {
  PostUserToRoleCreatePayload,
  PostUserToRoleFindAllPayload,
  PostUserToRoleFindPayload,
  PostUserToRoleRemovePayload
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class UserToRole<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
 * No description
 *
 * @tags Permission
 * @name PostUserToRoleCreate
 * @summary 授权角色给用户
 * @request POST:/userToRole/create
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
  \** 用户名 *\
    username: string,
  \** 角色编码 *\
    roleCode: string,

}`
 */
  postUserToRoleCreate = (data: PostUserToRoleCreatePayload, params: RequestParams = {}) =>
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
        /** 用户名 */
        username: string
        /** 角色编码 */
        roleCode: string
      },
      any
    >({
      path: `/userToRole/create`,
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
 * @name PostUserToRoleRemove
 * @summary 删除用户角色
 * @request POST:/userToRole/remove
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
  \** 用户名 *\
    username: string,
  \** 角色编码 *\
    roleCode: string,

}`
 */
  postUserToRoleRemove = (data: PostUserToRoleRemovePayload, params: RequestParams = {}) =>
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
        /** 用户名 */
        username: string
        /** 角色编码 */
        roleCode: string
      },
      any
    >({
      path: `/userToRole/remove`,
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
 * @name PostUserToRoleFind
 * @summary 用户角色关系列表
 * @request POST:/userToRole/find
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
  \** 用户名 *\
    username: string,
  \** 角色编码 *\
    roleCode: string,

})[],
    total: number,

}`
 */
  postUserToRoleFind = (data: PostUserToRoleFindPayload, params: RequestParams = {}) =>
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
          /** 用户名 */
          username: string
          /** 角色编码 */
          roleCode: string
        }[]
        total: number
      },
      any
    >({
      path: `/userToRole/find`,
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
 * @name PostUserToRoleFindAll
 * @summary 用户角色关系所有
 * @request POST:/userToRole/findAll
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
  \** 用户名 *\
    username: string,
  \** 角色编码 *\
    roleCode: string,

})[],
    total: number,

}`
 */
  postUserToRoleFindAll = (data: PostUserToRoleFindAllPayload, params: RequestParams = {}) =>
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
          /** 用户名 */
          username: string
          /** 角色编码 */
          roleCode: string
        }[]
        total: number
      },
      any
    >({
      path: `/userToRole/findAll`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
}
