<script setup lang="ts">
defineOptions({
  name: 'LayoutContent'
})
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <!-- <KeepAlive :include="tabsStore.cachedTabs"> -->
    <Component :is="Component" :key="route.path" />
    <!-- </KeepAlive> -->
  </RouterView>
</template>
