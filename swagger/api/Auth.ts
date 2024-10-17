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

}`
 */
  postAuthSignIn = (data: PostAuthSignInPayload, params: RequestParams = {}) =>
    this.request<
      {
        /** 用户名 */
        username: string
        accessToken: string
        refreshToken: string
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
