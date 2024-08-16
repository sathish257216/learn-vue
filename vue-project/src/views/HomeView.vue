<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import BookLibrary from '../components/BookLibrary.vue'
import getUsers from '../composables/getUsers'

const pageName = ref('Home Page')
const onHandleClick = (data) => {
  console.log('Book Library', data)
}

onMounted(() => {
  const { users, error, loadUsers } = getUsers()
  loadUsers()
  console.log('mounted data', users.value, error.value)
})
onUnmounted(() => {
  console.log('onUnmounted')
})
</script>

<template>
  <main>
    {{ pageName }}
    <BookLibrary title="Book Library" @handleClick="onHandleClick"> Filters: </BookLibrary>
  </main>
</template>
