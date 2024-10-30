import { PostAuthSignInPayload } from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Auth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
 * No description
 *
 * @tags Auth
 * @name PostAuthSignIn
 * @summary 用户登录
 * @request POST:/auth/signIn
 * @response `200` `{
  \** 用户名 *\
    username: string,
    accessToken: string,
    refreshToken: string,
    resourceTree: ({
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
   * @default 1730253856572
   *\
    createdAt: number,
  \**
   * 更新时间
   * @default 1730253856572
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

})[],

}`
 */
  postAuthSignIn = (data: PostAuthSignInPayload, params: RequestParams = {}) =>
    this.request<
      {
        /** 用户名 */
        username: string
        accessToken: string
        refreshToken: string
        resourceTree: {
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
           * @default 1730253856572
           */
          createdAt: number
          /**
           * 更新时间
           * @default 1730253856572
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
        }[]
      },
      any
    >({
      path: `/auth/signIn`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
  /**
 * No description
 *
 * @tags Auth
 * @name PostAuthRefresh
 * @summary 令牌刷新
 * @request POST:/auth/refresh
 * @response `200` `{
    accessToken: string,
    refreshToken: string,

}`
 */
  postAuthRefresh = (params: RequestParams = {}) =>
    this.request<
      {
        accessToken: string
        refreshToken: string
      },
      any
    >({
      path: `/auth/refresh`,
      method: 'POST',
      format: 'json',
      ...params
    })
  /**
   * No description
   *
   * @tags Auth
   * @name PostAuthSignOut
   * @summary 用户登出
   * @request POST:/auth/signOut
   * @response `200` `void`
   */
  postAuthSignOut = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/auth/signOut`,
      method: 'POST',
      ...params
    })
}
