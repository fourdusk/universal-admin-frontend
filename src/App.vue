<script setup lang="ts">
import Layout from '@/global/layout/index.vue'
defineOptions({
  name: 'App'
})
const whiteListRoutes = gbConstant.origin.WHITE_LIST_ROUTES
const route = useRoute()
</script>

<template>
  <RouterView v-if="whiteListRoutes.includes(route.path)" />
  <Layout v-else />
</template>
