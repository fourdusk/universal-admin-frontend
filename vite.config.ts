import { resolve } from 'node:path'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoImport from 'unplugin-auto-import/vite'
import { FileSystemIconLoader as iconLoader } from 'unplugin-icons/loaders'
import iconsResolver from 'unplugin-icons/resolver'
import icons from 'unplugin-icons/vite'
import vueComponents from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

const pathResolve = (dir: string) => resolve(process.cwd(), '.', dir)

const config = defineConfig({
  resolve: {
    alias: {
      '@': pathResolve('src'),
      styled: pathResolve('styled'),
      swagger: pathResolve('swagger')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/u, '')
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    icons({
      autoInstall: false,
      scale: 1,
      compiler: 'vue3',
      defaultClass: '',
      defaultStyle: '',
      customCollections: {
        vi: iconLoader(pathResolve('src/modules/common/icons'))
      }
    }),
    autoImport({
      dirs: ['src/modules/common/utils/expose'],
      dts: 'src/modules/common/types/auto-import.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
    vueComponents({
      dirs: ['src/modules/common/components'],
      dts: 'src/modules/common/types/components.d.ts',
      resolvers: [
        iconsResolver({
          prefix: false,
          customCollections: ['vi']
        })
      ]
    })
  ]
})

export default config
