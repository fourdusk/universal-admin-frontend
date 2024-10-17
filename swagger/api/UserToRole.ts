import {
  PostUserToRoleCreatePayload,
  PostUserToRoleFindAllPayload,
  PostUserToRoleFindPayload
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
   * @default 1729130957503
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1729130957503
   *\
    updatedAt: number,
  \** 创建人 *\
    createdBy: string,
  \** 更新人 *\
    updatedBy: string,
    id: number,
  \** 用户名 *\
    username: string,
  \** 角色编码 *\
    roleCode: string,

}`
 */
  postUserToRoleCreate = (data: PostUserToRoleCreatePayload, params: RequestParams = {}) =>
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
         * @default 1729130957503
         */
        createdAt: number
        /**
         * 更新时间
         * @default 1729130957503
         */
        updatedAt: number
        /** 创建人 */
        createdBy: string
        /** 更新人 */
        updatedBy: string
        id: number
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
 * @name PostUserToRoleFind
 * @summary 用户角色关系列表
 * @request POST:/userToRole/find
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
   * @default 1729130957503
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1729130957503
   *\
    updatedAt: number,
  \** 创建人 *\
    createdBy: string,
  \** 更新人 *\
    updatedBy: string,
    id: number,
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
           * @default 1729130957503
           */
          createdAt: number
          /**
           * 更新时间
           * @default 1729130957503
           */
          updatedAt: number
          /** 创建人 */
          createdBy: string
          /** 更新人 */
          updatedBy: string
          id: number
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
   * @default 1729130957503
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1729130957503
   *\
    updatedAt: number,
  \** 创建人 *\
    createdBy: string,
  \** 更新人 *\
    updatedBy: string,
    id: number,
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
           * @default 1729130957503
           */
          createdAt: number
          /**
           * 更新时间
           * @default 1729130957503
           */
          updatedAt: number
          /** 创建人 */
          createdBy: string
          /** 更新人 */
          updatedBy: string
          id: number
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
