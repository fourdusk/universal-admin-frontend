type TreeNode<T, K extends number | string> = T & {
  [_K in K]: TreeNode<T, K>[]
}

export const listToTree = <
  T extends Record<number | string, any>,
  K extends keyof T & (number | string),
  C extends number | string = 'children'
>(
  list: T[],
  props?: {
    parentId?: K
    id?: K
    childrenKey?: C
    judgeParentIdFn?: (item: T) => boolean
  }
): TreeNode<T, C>[] => {
  const {
    parentId = 'parentId',
    id = 'id',
    childrenKey = 'children',
    judgeParentIdFn = (item: T) => gbUtil.isEmpty(item[parentId])
  } = props ?? {}
  const result: TreeNode<T, C>[] = []
  const idMap: {
    [key: number | string]: TreeNode<T, C>
  } = {}

  for (const item of list) {
    idMap[item[id]] = { ...item, [childrenKey]: [] }
  }

  for (const item of list) {
    const pId = item[parentId]
    const cId = item[id]
    if (judgeParentIdFn(item)) {
      result.push(idMap[cId] as TreeNode<T, C>)
    } else {
      const mapItem = idMap[pId] as {
        [key: number | string]: TreeNode<T, C>[]
      }
      mapItem[childrenKey].push(idMap[cId])
    }
  }

  return result
}

export const treeToList = <T extends Record<string | number, unknown>, C extends keyof T>(
  tree: T[],
  props?: { childrenKey?: C; isDepthFirst?: boolean }
) => {
  const { childrenKey = 'children', isDepthFirst = true } = props ?? {}
  const stack = tree.slice()
  const result: T[] = []
  while (stack.length > 0) {
    const topItem = stack.shift()
    if (topItem) {
      result.push(topItem)
      const children = topItem[childrenKey]
      if (Array.isArray(children)) {
        if (isDepthFirst) {
          stack.unshift(...children)
        } else {
          stack.push(...children)
        }
      }
    }
  }
  return result
}
