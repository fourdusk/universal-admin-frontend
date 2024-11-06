<script setup lang="ts">
import MenuItems from './menu-items.vue'
import { Resource } from './type'

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
