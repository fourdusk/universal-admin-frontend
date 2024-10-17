<script setup lang="ts">
import { css } from 'styled/css'
import { Auth } from 'swagger/api/Auth'
import { ref } from 'vue'

defineOptions({
  name: 'HelloWorld'
})

interface Props {
  msg: string
}

const props = defineProps<Props>()

const sum = ref(gbUtils.sum([1, 2, 3]))
const username = ref('')
const password = ref('')
const signInResult = ref({})
const styles = css({
  backgroundColor: 'pink.700',
  color: 'white',
  padding: '0.5rem 1rem',
  border: '2px solid {colors.pink.700}',
  borderRadius: '3px'
})

const handleSignIn = async () => {
  const auth = new Auth({ baseURL: '/api' })
  const result = await auth.postAuthSignIn({ username: username.value, password: password.value })
  signInResult.value = result
}
</script>

<template>
  <h1>{{ props.msg }}</h1>
  <form action="">
    <div>
      <label for="">用户名</label>
      <input v-model="username" />
    </div>
    <div>
      <label for="">密码</label>
      <input v-model="password" />
    </div>
    <button :class="styles" type="button" @click="handleSignIn">{{ sum }}</button>
    <div>{{ signInResult }}</div>
  </form>
</template>
