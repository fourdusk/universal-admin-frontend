import {
  PostUserCreatePayload,
  PostUserFindPayload,
  PostUserGetPayload,
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
  \**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   *\
    status?: ("Y" | "N"),
  \** 备注 *\
    remark?: (string | null),
  \**
   * 排序
   * @default 0
   *\
    sort?: number,
  \**
   * 删除标记，已删除(Y)/未删除(N)
   * @default "N"
   *\
    delFlag?: ("Y" | "N"),
  \**
   * 创建时间
   * @default 1729130957503
   *\
    createdAt?: number,
  \**
   * 更新时间
   * @default 1729130957503
   *\
    updatedAt?: number,
  \** 创建人 *\
    createdBy: string,
  \** 更新人 *\
    updatedBy: string,
    id?: number,
  \** 用户名 *\
    username: string,
  \**
   * 是否管理员，是(Y)/否(N)
   * @default "N"
   *\
    isAdmin?: ("Y" | "N"),
  \** 最后登录时间 *\
    lastSignInAt?: (number | null),

}`
 */
  postUserCreate = (data: PostUserCreatePayload, params: RequestParams = {}) =>
    this.request<
      {
        /**
         * 状态，启用(Y)/禁用(N)
         * @default "N"
         */
        status?: 'Y' | 'N'
        /** 备注 */
        remark?: string | null
        /**
         * 排序
         * @default 0
         */
        sort?: number
        /**
         * 删除标记，已删除(Y)/未删除(N)
         * @default "N"
         */
        delFlag?: 'Y' | 'N'
        /**
         * 创建时间
         * @default 1729130957503
         */
        createdAt?: number
        /**
         * 更新时间
         * @default 1729130957503
         */
        updatedAt?: number
        /** 创建人 */
        createdBy: string
        /** 更新人 */
        updatedBy: string
        id?: number
        /** 用户名 */
        username: string
        /**
         * 是否管理员，是(Y)/否(N)
         * @default "N"
         */
        isAdmin?: 'Y' | 'N'
        /** 最后登录时间 */
        lastSignInAt?: number | null
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
}
