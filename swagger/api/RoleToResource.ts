import {
  PostRoleToResourceCreatePayload,
  PostRoleToResourceFindAllPayload,
  PostRoleToResourceFindPayload,
  PostRoleToResourceRemovePayload
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class RoleToResource<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
 * No description
 *
 * @tags Permission
 * @name PostRoleToResourceCreate
 * @summary 授权资源给角色
 * @request POST:/roleToResource/create
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
  \** 资源编码 *\
    resourceCode: string,

}`
 */
  postRoleToResourceCreate = (data: PostRoleToResourceCreatePayload, params: RequestParams = {}) =>
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
        /** 资源编码 */
        resourceCode: string
      },
      any
    >({
      path: `/roleToResource/create`,
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
 * @name PostRoleToResourceRemove
 * @summary 删除角色资源
 * @request POST:/roleToResource/remove
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
  \** 资源编码 *\
    resourceCode: string,

}`
 */
  postRoleToResourceRemove = (data: PostRoleToResourceRemovePayload, params: RequestParams = {}) =>
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
        /** 资源编码 */
        resourceCode: string
      },
      any
    >({
      path: `/roleToResource/remove`,
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
 * @name PostRoleToResourceFind
 * @summary 角色资源关系列表
 * @request POST:/roleToResource/find
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
  \** 资源编码 *\
    resourceCode: string,

})[],
    total: number,

}`
 */
  postRoleToResourceFind = (data: PostRoleToResourceFindPayload, params: RequestParams = {}) =>
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
          /** 资源编码 */
          resourceCode: string
        }[]
        total: number
      },
      any
    >({
      path: `/roleToResource/find`,
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
 * @name PostRoleToResourceFindAll
 * @summary 角色资源关系全部
 * @request POST:/roleToResource/findAll
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
  \** 资源编码 *\
    resourceCode: string,

})[],
    total: number,

}`
 */
  postRoleToResourceFindAll = (
    data: PostRoleToResourceFindAllPayload,
    params: RequestParams = {}
  ) =>
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
          /** 资源编码 */
          resourceCode: string
        }[]
        total: number
      },
      any
    >({
      path: `/roleToResource/findAll`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
}
