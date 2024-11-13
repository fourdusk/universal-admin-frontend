<script setup lang="ts">
const username = gbStore.useUserStore().getInfo()?.username
</script>

<template>
  <div>Hello, {{ username }}</div>
</template>
