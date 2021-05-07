<template>
    <div>
        <div v-if="todos.length">
            <nuxt-link v-for="todo in todos" :key="todo._id" no-prefetch :to="/create-todo/ + todo._id">
                <TodoItem
                    :id="todo._id"
                    :title="todo.title"
                    :body="todo.body"
                />
            </nuxt-link>
        </div>
        <div v-else>
            <p>Заметок пока нет.</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
        todos: []
    }),
    mounted() {
        axios
            .get('http://localhost:5000/api/todos')
            .then(response => (this.todos = response.data));
  }
}
</script>