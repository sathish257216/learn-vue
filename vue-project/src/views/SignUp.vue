<script lang="ts">
import SignUpForm from '../components/SignUpForm.vue'

export default {
  name: 'App',
  components: { SignUpForm }
}
</script>

<template>
  <div class="sign-up">
    <h3>Sign Up</h3>
    <SignUpForm />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .sign-up {
    width: 100%;
    min-height: 100vh;
    display: flex;
    margin: 20px;
  }
}
</style>
