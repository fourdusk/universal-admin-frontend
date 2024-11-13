<script setup lang="ts">
import Content from './content/index.vue'
import Menu from './menu/index.vue'

defineOptions({
  name: 'Layout'
})

const resources = gbStore.useUserStore().getMenuAndPageResourceTree()
</script>

<template>
  <div>
    <Menu :resources="resources" />
    <Content />
  </div>
</template>
