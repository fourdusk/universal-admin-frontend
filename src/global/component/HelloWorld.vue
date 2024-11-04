<script setup lang="ts">
import { css } from 'styled/css'
import { Auth } from 'swagger/api/Auth'
import { Resource } from 'swagger/api/Resource'
import { Role } from 'swagger/api/Role'
import { User } from 'swagger/api/User'
import { computed, ref } from 'vue'

defineOptions({
  name: 'HelloWorld'
})

const appLang = ref(gbStore.useLocaleStore().lang)
const langOptions = ref(gbStore.useLocaleStore().getLangOptions())
const username = ref('')
const password = ref('')
const signInResult = ref({})
const userFindResult = ref({})
const roleFindResult = ref({})
const resourceFindResult = ref({})
const appName = computed(() => gbLocale.i18n.global.t('global.label.appName'))

const buttonStyles = css({
  backgroundColor: 'pink.700',
  color: 'white',
  border: '0',
  padding: '0 1rem',
  borderRadius: '3px',
  height: '2rem'
})
const boxStyles = css({
  display: 'flex',
  gap: '0.25rem',
  margin: '1rem 0'
})

const handleSignIn = async () => {
  const auth = new Auth()
  const result = await auth.postAuthSignIn({ username: username.value, password: password.value })
  signInResult.value = result
}

const handleGetUserList = async () => {
  const user = new User()
  const result = await user.postUserFind({})
  userFindResult.value = result
}

const handleGetRoleList = async () => {
  const role = new Role()
  const result = await role.postRoleFind({})
  roleFindResult.value = result
}

const handleGetResourceList = async () => {
  const resource = new Resource()
  const result = await resource.postResourceFind({})
  resourceFindResult.value = result
}

const resourceTypeOptions = computed(() => gbConstant.getOptions('RESOURCE_TYPE'))

const handleLangChange = (val: LangType) => {
  gbStore.useLocaleStore().setLang(val)
}
</script>

<template>
  <div>
    <ElSelectV2
      v-model="appLang"
      :options="langOptions"
      style="width: 240px"
      @change="handleLangChange"
    />
    <span>{{ appName }}</span>
  </div>
  <form action="">
    <div>
      <label for="">用户名</label>
      <input v-model="username" />
    </div>
    <div>
      <label for="">密码</label>
      <input v-model="password" />
    </div>
    <div :class="boxStyles">
      <button :class="buttonStyles" type="button" @click="handleSignIn">登录</button>
      <button :class="buttonStyles" type="button" @click="handleGetUserList">获取用户列表</button>
      <button :class="buttonStyles" type="button" @click="handleGetRoleList">获取角色列表</button>
      <button :class="buttonStyles" type="button" @click="handleGetResourceList">
        获取资源列表
      </button>
    </div>
    <div>登录结果：{{ signInResult }}</div>
    <div>获取用户列表结果：{{ userFindResult }}</div>
    <div>获取角色列表结果：{{ roleFindResult }}</div>
    <div>获取资源列表结果：{{ resourceFindResult }}</div>
    <div>{{ resourceTypeOptions }}</div>
  </form>
</template>
