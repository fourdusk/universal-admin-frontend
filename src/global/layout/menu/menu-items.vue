<script setup lang="ts">
import { computed } from 'vue'

import { Resource } from '@/global/constant/resource/index'

type Props = {
  resources: Resource[]
}

defineOptions({
  name: 'MenuItems'
})

defineProps<Props>()

const getResourceName = computed(() => (resource: Resource) => {
  const nameMap = {
    en: 'resourceNameEn',
    'zh-cn': 'resourceNameZhCn'
  } as const
  const lang = gbLocale.i18n.global.locale.value as LangType
  return resource[nameMap[lang]]
})
</script>

<template>
  <template v-for="resource in resources">
    <ElSubMenu
      v-if="resource.children.length > 0"
      :key="resource.resourceCode"
      :index="resource.resourceCode"
    >
      <template #title>
        {{ getResourceName(resource) }}
      </template>
      <MenuItems :resources="resource.children" />
    </ElSubMenu>
    <ElMenuItem v-else :key="resource.resourceCode">
      {{ getResourceName(resource) }}
    </ElMenuItem>
  </template>
</template>
