import { resolve } from 'node:path'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoImport from 'unplugin-auto-import/vite'
import { FileSystemIconLoader as iconLoader } from 'unplugin-icons/loaders'
import iconsResolver from 'unplugin-icons/resolver'
import icons from 'unplugin-icons/vite'
import { ElementPlusResolver as epResolver } from 'unplugin-vue-components/resolvers'
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
        vi: iconLoader(pathResolve('src/global/icons'))
      }
    }),
    autoImport({
      dirs: [
        'src/global/config/_expose',
        'src/global/locale/_expose',
        'src/global/store/_expose',
        'src/global/util/_expose'
      ],
      dts: 'src/global/type/auto-import.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      },
      resolvers: [epResolver()]
    }),
    vueComponents({
      dirs: ['src/global/component'],
      dts: 'src/global/type/component.d.ts',
      resolvers: [
        epResolver(),
        iconsResolver({
          prefix: false,
          customCollections: ['vi']
        })
      ]
    })
  ]
})

export default config
