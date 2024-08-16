<template>
  <div class="item">
    <div class="details">
      <h3>{{ title }}</h3>
      <div class="parent-container">
        <div class="book-container">
          <h4>Books</h4>
          <div
            v-for="book of books"
            v-bind:key="book.id"
            v-class="{ 'fav-book': book.isFav }"
            class="book-div"
          >
            <h3>{{ book.title }}</h3>
            <span>{{ book.title }}</span>
          </div>
        </div>

        <div class="user-container">
          <h4>User List</h4>
          <div v-for="user of userList" v-bind:key="user.id" class="user-div">
            <h3>{{ user.name }}</h3>
            <span>{{ user.email }}</span>
          </div>
        </div>
      </div>
      <button @click="handleClick()">Click</button>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String
  },
  data() {
    return {
      showBooks: true,
      userList: [],
      books: [
        {
          id: 1,
          title: 'Harry Potter',
          author: 'James',
          description: 'James is a character in the wizard',
          isFav: false
        },
        {
          id: 2,
          title: 'Suits',
          author: 'Smith',
          description: 'Smith creteded the webseries',
          isFav: true
        },
        {
          id: 3,
          title: 'Prison Break',
          author: 'Tom',
          description: 'Tom breaks the prison',
          isFav: false
        }
      ]
    }
  },
  methods: {
    handleClick() {
      console.log('handleClick')
      this.showBooks = !this.showBooks
      this.$emit('handleClick', this.showBooks)
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        console.log('user data:', data)
        this.userList = data
      })
  }
})
</script>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}
.parent-container {
  display: flex;
  width: 100%;
}
.book-container,
.user-container {
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 50%;
}
.book-div,
.user-div {
  background-color: #f0f0f0;
  height: 100px;
  width: 100%;
  padding: 20px;
  margin: 20px;
  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
</style>
