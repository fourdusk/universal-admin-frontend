import { resolve } from 'node:path'
import { writeFileSync, mkdirSync, existsSync, rmSync } from 'node:fs'
import { generateApi } from 'swagger-typescript-api'
import prettierConfig from '../prettier.config.js'

generateApi({
  // swagger 接口文件
  url: 'http://localhost:3000/swagger/json',
  // ts 文件输出目录
  // output: resolve(process.cwd(), './swagger/api'),
  // 模板目录
  templates: resolve(process.cwd(), './swagger/templates'),
  // 客户端类型
  httpClientType: 'axios',
  // 是否清除输出目录
  cleanOutput: true,
  // 是否将客户端、数据类型、路由，生成单独的文件
  modular: true,
  // 是否生成请求体类型
  extractRequestBody: true,
  // 是否生成请求参数类型
  extractRequestParams: true,
  // 是否生成客户端
  generateClient: true,
  // 是否生成路由类型
  generateRouteTypes: false,
  // 是否生成响应
  generateResponses: true,
  // 是否将 tags 的第一个标签进行路由分离
  moduleNameFirstTag: false,
  // 是否将响应的 data 展开
  unwrapResponseData: true,
  // 类型前缀
  typePrefix: '',
  // 类型后缀
  typeSuffix: '',
  // prettier 配置
  prettier: prettierConfig,
  hooks: {
    onPrepareConfig(currentConfiguration) {
      currentConfiguration.apiConfig.baseUrl = '/api'
      return currentConfiguration
    },
  }
}).then(({ files }) => {
  const dir = resolve(process.cwd(), './swagger/api')
  if (existsSync(dir)) {
    rmSync(dir, { recursive: true })
  }
  setTimeout(() => {
    mkdirSync(dir)
    files.forEach(({ fileContent, fileName }) => {
      if (!fileName.includes('Swagger')) {
        writeFileSync(`${dir}/${fileName}.ts`, fileContent)
      }
    })
  }, 1000)
})
