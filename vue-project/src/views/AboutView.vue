<template>
  <div class="about">
    <h1>About page</h1>

    <div class="user-container">
      <h4>User List</h4>
      <div v-for="user of users" v-bind:key="user.id" class="user-div">
        <h3>{{ user.name }}</h3>
        <span>{{ user.email }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated } from 'vue'
import getUsers from '../composables/getUsers'

const { users, error, loadUsers } = getUsers()

onMounted(() => {
  loadUsers()
  console.log('mounted data', users.value)
})
onUpdated(() => {
  console.log('mounted data', users.value)
})

onUnmounted(() => {
  console.log('onUnmounted')
})
</script>

<style>
.user-container {
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 75%;
}
.user-div {
  background-color: #f0f0f0;
  height: 100px;
  width: 100%;
  padding: 20px;
  margin: 20px;
  color: var(--color-text);
}
</style>
