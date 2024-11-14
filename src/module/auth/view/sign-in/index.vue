<script setup lang="ts">
import { Auth } from 'swagger/api/Auth'

import { WHETHER_TYPE } from '@/global/constant/common/index'
import { Resource } from '@/global/constant/resource/index'

const route = useRoute()
const router = useRouter()

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
      userStore.setInfo({
        username: result.userInfo.username
      })
      const homeResource: Resource = {
        id: 0,
        remark: null,
        sort: 0,
        delFlag: WHETHER_TYPE.no,
        createdAt: 0,
        updatedAt: 0,
        createdBy: '',
        updatedBy: '',
        status: WHETHER_TYPE.yes,
        parentId: 0,
        resourceCode: gbConstant.origin.HOME_ROUTER.name,
        resourceNameEn: 'Home',
        resourceNameZhCn: '首页',
        resourceType: gbConstant.getValue('RESOURCE_TYPE', 'page'),
        path: gbConstant.origin.HOME_ROUTER.path,
        activePath: null,
        component: '/home/view/index',
        icon: null,
        isAffix: WHETHER_TYPE.yes,
        isCache: WHETHER_TYPE.yes,
        isHide: WHETHER_TYPE.no,
        isLink: WHETHER_TYPE.no,
        children: []
      }
      userStore.setResourceTree([
        {
          ...homeResource
        },
        ...result.resourceTree
      ])
      const path = gbUtil.isString(route.query.from)
        ? route.query.from
        : gbConstant.origin.HOME_ROUTER.path
      router.push({ path })
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
      <ElInput v-model="formData.username" clearable />
    </ElFormItem>
    <ElFormItem :label="gbLocale.t('auth.label.password')" prop="password">
      <ElInput v-model="formData.password" type="password" clearable />
    </ElFormItem>
    <ElFormItem>
      <ElButton type="primary" @click="handleSubmit">{{
        gbLocale.t('auth.action.signIn')
      }}</ElButton>
      <ElButton @click="handleReset">{{ gbLocale.t('global.action.reset') }}</ElButton>
    </ElFormItem>
  </ElForm>
</template>
