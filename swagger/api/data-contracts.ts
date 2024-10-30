export interface PostAuthSignInPayload {
  /** 用户名 */
  username: string
  /** 密码 */
  password: string
}

export interface PostRoleCreatePayload {
  id?: number
  remark?: (null | string) | null
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
   * @default 1730253856572
   */
  createdAt?: number
  /**
   * 更新时间
   * @default 1730253856572
   */
  updatedAt?: number
  /** 创建人 */
  createdBy: string
  /** 更新人 */
  updatedBy: string
  /**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   */
  status?: 'Y' | 'N'
  /** 角色编码 */
  roleCode: string
  /** 角色名称 */
  roleName: string
}

export interface PostRoleUpdatePayload {
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
  /** 角色编码 */
  roleCode: string
  /** 角色名称 */
  roleName: string
}

export interface PostRoleRemovePayload {
  /** 角色编码 */
  roleCode: string
}

export interface PostRoleGetPayload {
  /** 角色编码 */
  roleCode: string
}

export interface PostRoleFindPayload {
  remark?: (null | string) | null
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
  /** 创建人 */
  createdBy?: string
  /** 更新人 */
  updatedBy?: string
  /**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   */
  status?: 'Y' | 'N'
  /** 角色编码 */
  roleCode?: string
  /** 角色名称 */
  roleName?: string
  /** 是否返回全部数据 */
  isReturnAll?: boolean
  /**
   * 第几页
   * @default 1
   */
  pageIndex?: number
  /**
   * 每页多少条
   * @default 10
   */
  pageSize?: number
  /** 创建时间开始 */
  createdFrom?: number
  /** 创建时间结束 */
  createdTo?: number
  /** 更新时间开始 */
  updatedFrom?: number
  /** 更新时间结束 */
  updatedTo?: number
}

export interface PostRoleGetUsersPayload {
  /** 角色编码 */
  roleCode: string
  /** 是否返回全部数据 */
  isReturnAll?: boolean
  /**
   * 第几页
   * @default 1
   */
  pageIndex?: number
  /**
   * 每页多少条
   * @default 10
   */
  pageSize?: number
}

export interface PostRoleGetResourcesPayload {
  /** 角色编码 */
  roleCode: string
  /** 是否返回全部数据 */
  isReturnAll?: boolean
  /**
   * 第几页
   * @default 1
   */
  pageIndex?: number
  /**
   * 每页多少条
   * @default 10
   */
  pageSize?: number
}

export interface PostRoleFindResourcesPayload {
  /** 角色编码 */
  roleCode?: string
  /** 角色名称 */
  roleName?: string
  /** 是否返回全部数据 */
  isReturnAll?: boolean
  /**
   * 第几页
   * @default 1
   */
  pageIndex?: number
  /**
   * 每页多少条
   * @default 10
   */
  pageSize?: number
}

export interface PostResourceCreatePayload {
  id?: number
  remark?: (null | string) | null
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
   * @default 1730253856572
   */
  createdAt?: number
  /**
   * 更新时间
   * @default 1730253856572
   */
  updatedAt?: number
  /** 创建人 */
  createdBy: string
  /** 更新人 */
  updatedBy: string
  /**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   */
  status?: 'Y' | 'N'
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
  path?: (null | string) | null
  activePath?: (null | string) | null
  component?: (null | string) | null
  icon?: (null | string) | null
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
}

export interface PostResourceUpdatePayload {
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
}

export interface PostResourceRemovePayload {
  /** 资源编码 */
  resourceCode: string
}

export interface PostResourceGetPayload {
  /** 资源编码 */
  resourceCode: string
}

export interface PostResourceFindPayload {
  id?: number
  remark?: (null | string) | null
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
  /** 创建人 */
  createdBy?: string
  /** 更新人 */
  updatedBy?: string
  /**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   */
  status?: 'Y' | 'N'
  /**
   * 父 ID
   * @default 0
   */
  parentId?: number
  /** 资源编码 */
  resourceCode?: string
  /** 资源名称（英文） */
  resourceNameEn?: string
  /** 资源名称（中文） */
  resourceNameZhCn?: string
  /**
   * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
   * @default "Menu"
   */
  resourceType?: 'Menu' | 'Pgae' | 'Element'
  path?: (null | string) | null
  activePath?: (null | string) | null
  component?: (null | string) | null
  icon?: (null | string) | null
  /**
   * 是否外链，是(Y)/否(N)
   * @default "N"
   */
  isLink?: 'Y' | 'N'
  /**
   * 是否缓存，是(Y)/否(N)
   * @default "N"
   */
  isCache?: 'Y' | 'N'
  /**
   * 是否固定，是(Y)/否(N)
   * @default "N"
   */
  isAffix?: 'Y' | 'N'
  /**
   * 是否隐藏，是(Y)/否(N)
   * @default "N"
   */
  isHide?: 'Y' | 'N'
  /** 是否返回全部数据 */
  isReturnAll?: boolean
  /** 创建时间开始 */
  createdFrom?: number
  /** 创建时间结束 */
  createdTo?: number
  /** 更新时间开始 */
  updatedFrom?: number
  /** 更新时间结束 */
  updatedTo?: number
  /**
   * 第几页
   * @default 1
   */
  pageIndex?: number
  /**
   * 每页多少条
   * @default 10
   */
  pageSize?: number
}

export interface PostResourceFindTreePayload {
  id?: number
  remark?: (null | string) | null
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
  /** 创建人 */
  createdBy?: string
  /** 更新人 */
  updatedBy?: string
  /**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   */
  status?: 'Y' | 'N'
  /**
   * 父 ID
   * @default 0
   */
  parentId?: number
  /** 资源编码 */
  resourceCode?: string
  /** 资源名称（英文） */
  resourceNameEn?: string
  /** 资源名称（中文） */
  resourceNameZhCn?: string
  /**
   * 资源类型，菜单(Menu)/页面(Page)/元素(Element)
   * @default "Menu"
   */
  resourceType?: 'Menu' | 'Pgae' | 'Element'
  path?: (null | string) | null
  activePath?: (null | string) | null
  component?: (null | string) | null
  icon?: (null | string) | null
  /**
   * 是否外链，是(Y)/否(N)
   * @default "N"
   */
  isLink?: 'Y' | 'N'
  /**
   * 是否缓存，是(Y)/否(N)
   * @default "N"
   */
  isCache?: 'Y' | 'N'
  /**
   * 是否固定，是(Y)/否(N)
   * @default "N"
   */
  isAffix?: 'Y' | 'N'
  /**
   * 是否隐藏，是(Y)/否(N)
   * @default "N"
   */
  isHide?: 'Y' | 'N'
  /** 创建时间开始 */
  createdFrom?: number
  /** 创建时间结束 */
  createdTo?: number
  /** 更新时间开始 */
  updatedFrom?: number
  /** 更新时间结束 */
  updatedTo?: number
}

export interface PostResourceGetUsersPayload {
  /** 资源编码 */
  resourceCode: string
  /** 是否返回全部数据 */
  isReturnAll?: boolean
  /**
   * 第几页
   * @default 1
   */
  pageIndex?: number
  /**
   * 每页多少条
   * @default 10
   */
  pageSize?: number
}

export interface PostResourceGetRolesPayload {
  /** 资源编码 */
  resourceCode: string
  /** 是否返回全部数据 */
  isReturnAll?: boolean
  /**
   * 第几页
   * @default 1
   */
  pageIndex?: number
  /**
   * 每页多少条
   * @default 10
   */
  pageSize?: number
}

export interface PostUserToRoleCreatePayload {
  id?: number
  remark?: (null | string) | null
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
   * @default 1730253856572
   */
  createdAt?: number
  /**
   * 更新时间
   * @default 1730253856572
   */
  updatedAt?: number
  /** 创建人 */
  createdBy: string
  /** 更新人 */
  updatedBy: string
  /** 用户名 */
  username: string
  /** 角色编码 */
  roleCode: string
}

export interface PostUserToRoleRemovePayload {
  /** 用户名 */
  username: string
  /** 角色编码 */
  roleCode: string
}

export interface PostUserToRoleFindPayload {
  id?: number
  remark?: (null | string) | null
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
  /** 创建人 */
  createdBy?: string
  /** 更新人 */
  updatedBy?: string
  /** 用户名 */
  username?: string
  /** 角色编码 */
  roleCode?: string
  /**
   * 第几页
   * @default 1
   */
  pageIndex?: number
  /**
   * 每页多少条
   * @default 10
   */
  pageSize?: number
  /** 创建时间开始 */
  createdFrom?: number
  /** 创建时间结束 */
  createdTo?: number
  /** 更新时间开始 */
  updatedFrom?: number
  /** 更新时间结束 */
  updatedTo?: number
}

export interface PostUserToRoleFindAllPayload {
  id?: number
  remark?: (null | string) | null
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
  /** 创建人 */
  createdBy?: string
  /** 更新人 */
  updatedBy?: string
  /** 用户名 */
  username?: string
  /** 角色编码 */
  roleCode?: string
  /** 创建时间开始 */
  createdFrom?: number
  /** 创建时间结束 */
  createdTo?: number
  /** 更新时间开始 */
  updatedFrom?: number
  /** 更新时间结束 */
  updatedTo?: number
}

export interface PostRoleToResourceCreatePayload {
  id?: number
  remark?: (null | string) | null
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
   * @default 1730253856572
   */
  createdAt?: number
  /**
   * 更新时间
   * @default 1730253856572
   */
  updatedAt?: number
  /** 创建人 */
  createdBy: string
  /** 更新人 */
  updatedBy: string
  /** 角色编码 */
  roleCode: string
  /** 资源编码 */
  resourceCode: string
}

export interface PostRoleToResourceRemovePayload {
  /** 角色编码 */
  roleCode: string
  /** 资源编码 */
  resourceCode: string
}

export interface PostRoleToResourceFindPayload {
  id?: number
  remark?: (null | string) | null
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
  /** 创建人 */
  createdBy?: string
  /** 更新人 */
  updatedBy?: string
  /** 角色编码 */
  roleCode?: string
  /** 资源编码 */
  resourceCode?: string
  /** 是否返回全部数据 */
  isReturnAll?: boolean
  /** 创建时间开始 */
  createdFrom?: number
  /** 创建时间结束 */
  createdTo?: number
  /** 更新时间开始 */
  updatedFrom?: number
  /** 更新时间结束 */
  updatedTo?: number
  /**
   * 第几页
   * @default 1
   */
  pageIndex?: number
  /**
   * 每页多少条
   * @default 10
   */
  pageSize?: number
}

export interface PostUserCreatePayload {
  id?: number
  remark?: (null | string) | null
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
   * @default 1730253856572
   */
  createdAt?: number
  /**
   * 更新时间
   * @default 1730253856572
   */
  updatedAt?: number
  /** 创建人 */
  createdBy: string
  /** 更新人 */
  updatedBy: string
  /**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   */
  status?: 'Y' | 'N'
  /** 用户名 */
  username: string
  /** 密码 */
  password: string
  /**
   * 是否管理员，是(Y)/否(N)
   * @default "N"
   */
  isAdmin?: 'Y' | 'N'
  /** 最后登录时间 */
  lastSignInAt?: number | null
}

export interface PostUserUpdatePayload {
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
  /** 用户名 */
  username: string
  /** 密码 */
  password: string
  /**
   * 是否管理员，是(Y)/否(N)
   * @default "N"
   */
  isAdmin: 'Y' | 'N'
  /** 最后登录时间 */
  lastSignInAt: number | null
}

export interface PostUserRemovePayload {
  /** 用户名 */
  username: string
}

export interface PostUserGetPayload {
  /** 用户名 */
  username: string
}

export interface PostUserFindPayload {
  remark?: (null | string) | null
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
  /** 创建人 */
  createdBy?: string
  /** 更新人 */
  updatedBy?: string
  /**
   * 状态，启用(Y)/禁用(N)
   * @default "N"
   */
  status?: 'Y' | 'N'
  /** 用户名 */
  username?: string
  /**
   * 是否管理员，是(Y)/否(N)
   * @default "N"
   */
  isAdmin?: 'Y' | 'N'
  /** 是否返回全部数据 */
  isReturnAll?: boolean
  /**
   * 第几页
   * @default 1
   */
  pageIndex?: number
  /**
   * 每页多少条
   * @default 10
   */
  pageSize?: number
  /** 创建时间开始 */
  createdFrom?: number
  /** 创建时间结束 */
  createdTo?: number
  /** 更新时间开始 */
  updatedFrom?: number
  /** 更新时间结束 */
  updatedTo?: number
}

export interface PostUserGetRolesPayload {
  /** 用户名 */
  username: string
  /**
   * 第几页
   * @default 1
   */
  pageIndex?: number
  /**
   * 每页多少条
   * @default 10
   */
  pageSize?: number
}

export interface PostUserGetResourcesPayload {
  /** 用户名 */
  username: string
  /**
   * 第几页
   * @default 1
   */
  pageIndex?: number
  /**
   * 每页多少条
   * @default 10
   */
  pageSize?: number
}

export interface PostUserFindRolesPayload {
  /** 用户名 */
  username?: string
  /** 是否返回全部数据 */
  isReturnAll?: boolean
  /**
   * 第几页
   * @default 1
   */
  pageIndex?: number
  /**
   * 每页多少条
   * @default 10
   */
  pageSize?: number
}

export interface PostUserFindResourcesPayload {
  /** 用户名 */
  username?: string
  /** 是否返回全部数据 */
  isReturnAll?: boolean
  /**
   * 第几页
   * @default 1
   */
  pageIndex?: number
  /**
   * 每页多少条
   * @default 10
   */
  pageSize?: number
}

export interface PostUserFindResourceTreePayload {
  /** 用户名 */
  username: string
}
