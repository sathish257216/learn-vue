<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
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
  }
})
</script>

<template>
  <div class="item">
    <div class="details">
      <h3>Book Library</h3>

      <div class="book-container">
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
    </div>
  </div>
</template>

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
.book-container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;

  .book-div {
    background-color: #f0f0f0;
    height: 100px;
    width: 100%;
    padding: 20px;
    margin: 20px;
    color: var(--color-text);
  }
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
</style>
