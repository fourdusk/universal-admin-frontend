<script setup lang="ts">
import { css } from 'styled/css'
import { ref } from 'vue'

defineOptions({
  name: 'HelloWorld'
})

interface Props {
  msg: string
}

const props = defineProps<Props>()

const sum = ref(gbUtils.sum([1, 2, 3]))
const styles = css({
  backgroundColor: 'pink.700',
  color: 'white',
  padding: '0.5rem 1rem',
  border: '2px solid {colors.pink.700}',
  borderRadius: '3px'
})
</script>

<template>
  <div>
    <ViChevronUp />
    <ViChevronDown />
    <ViChevronLeft />
    <ViChevronRight />
  </div>
  <h1>{{ props.msg }}</h1>
  <button :class="styles" type="button">{{ sum }}</button>
</template>
