<template>
  <div classs="form-container">
    <form>
      <label>Email:</label>
      <input type="email" v-model="email" required />

      <label>Password:</label>
      <input type="password" v-model="password" required />

      <label>Role:</label>
      <select v-model="role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
      </select>

      <div class="terms">
        <input type="checkbox" v-model="terms" required />
        <label>Accept terms and conditions</label>
      </div>

      <div>
        <input type="checkbox" value="shaun" v-model="names" />
        <label>shaun</label>
      </div>
      <div>
        <input type="checkbox" value="yoshi" v-model="names" />
        <label>yoshi</label>
      </div>
      <div>
        <input type="checkbox" value="mario" v-model="names" />
        <label>mario</label>
      </div>
    </form>

    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Your role: {{ role }}</p>
    <p>Terms accepted: {{ terms }}</p>
    <p>Names: {{ names }}</p>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      email: '',
      password: '',
      role: 'developer',
      terms: false,
      names: []
    }
  }
}
</script>

<style>
.form-container {
  display: flex;
  flex-direction: column;
}

form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type='checkbox'] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
</style>
