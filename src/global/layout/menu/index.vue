<script setup lang="ts">
import { Resource } from '@/global/constant/resource/index'

import MenuItems from './menu-items.vue'

type Props = {
  resources: Resource[]
}

defineOptions({
  name: 'LayoutMenu'
})

defineProps<Props>()

const route = useRoute()

const defaultActive = computed(() => route.path)
</script>

<template>
  <ElMenu :default-active="defaultActive" style="width: 300px" router>
    <MenuItems :resources="resources" />
  </ElMenu>
</template>
