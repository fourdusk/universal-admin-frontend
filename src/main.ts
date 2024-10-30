import '@/global/styles/index.css'

import { createApp } from 'vue'

import App from '@/App.vue'
import { i18n } from '@/global/locale/index'
import store from '@/global/store/index'
import { useLocaleStore } from '@/global/store/locale/index'

const app = createApp(App)

const bootstrap = async () => {
  app.use(i18n).use(store)
  await useLocaleStore().initLang()
  app.mount('#app')
}

bootstrap()
