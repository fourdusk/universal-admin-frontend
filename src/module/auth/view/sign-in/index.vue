<script setup lang="ts">
import { Auth } from 'swagger/api/Auth'

const formData = ref({
  username: '',
  password: ''
})

const formRef = ref<FormInstance>()
const formRules = ref<FormRules<typeof formData>>({
  username: gbUtil.requiredRules(),
  password: gbUtil.requiredRules()
})

const handleSubmit = () => {
  formRef.value?.validate(async valid => {
    if (valid) {
      const auth = new Auth()
      const result = await auth.postAuthSignIn(formData.value)
      const userStore = gbStore.useUserStore()
      userStore.setAccessToken(result.accessToken)
      userStore.setInfo({ username: result.username, isAdmin: 'Y', status: 'Y' })
      userStore.setResourceTree(result.resourceTree)
      const router = useRouter()
      router.push({ name: gbConstant.origin.HOME_ROUTER.name })
    }
  })
}

const handleReset = () => {
  formRef.value?.resetFields()
}
</script>

<template>
  <ElForm ref="formRef" :model="formData" :rules="formRules">
    <ElFormItem :label="gbLocale.t('auth.label.username')" prop="username">
      <ElInput v-model="formData.username" />
    </ElFormItem>
    <ElFormItem :label="gbLocale.t('auth.label.password')" prop="password">
      <ElInput v-model="formData.password" />
    </ElFormItem>
    <ElFormItem>
      <ElButton type="primary" @click="handleSubmit">{{
        gbLocale.t('auth.label.signIn')
      }}</ElButton>
      <ElButton @click="handleReset">{{ gbLocale.t('global.label.reset') }}</ElButton>
    </ElFormItem>
  </ElForm>
</template>
