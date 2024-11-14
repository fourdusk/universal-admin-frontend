<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const appLang = ref(gbStore.useLocaleStore().lang)
const langOptions = ref(gbStore.useLocaleStore().getLangOptions())
const resourcType = ref('')

const handleLangChange = (val: LangType) => {
  gbStore.useLocaleStore().setLang(val)
}

const handleSignOut = () => {
  const userStore = gbStore.useUserStore()
  userStore.removeAccessToken()
  userStore.removeInfo()
  userStore.removeResources()
  router.push({ path: gbConstant.origin.SIGN_IN_ROUTER.path, query: { from: route.fullPath } })
}
</script>

<template>
  <ElSelectV2
    v-model="resourcType"
    :options="gbConstant.getOptions('RESOURCE_TYPE')"
    style="width: 240px"
  />
  <ElSelectV2
    v-model="appLang"
    :options="langOptions"
    style="width: 240px"
    @change="handleLangChange"
  />
  <ElButton @click="handleSignOut">{{ gbLocale.t('auth.action.signOut') }}</ElButton>
</template>
