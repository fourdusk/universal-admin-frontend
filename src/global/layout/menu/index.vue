<script setup lang="ts">
import { Resource } from '@/global/constant/resource/index'

import MenuItems from './menu-items.vue'

type Props = {
  resources: Resource[]
}

defineOptions({
  name: 'MenuItems'
})

defineProps<Props>()
</script>

<template>
  <ElMenu style="width: 300px">
    <MenuItems :resources="resources" />
  </ElMenu>
</template>
