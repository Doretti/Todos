<template>
  <div class="wrapper">
    <div class="win">
      <div class="inputs">
          <input :value="this.title" placeholder="Введите заголовок" class="title-input" type="text" ref="title">
          <textarea :value="this.body" placeholder="Введите заметку" class="body-input" ref="body"></textarea>
      </div>
      <div class="buttons">
        <nuxt-link no-prefetch to='/' class="add">
          <button @click="update">Обновить</button>
        </nuxt-link>
        <nuxt-link class="delete" no-prefetch to='/'>
          <button @click="deleteTodo">Удалить</button>
        </nuxt-link>
        <nuxt-link no-prefetch to='/' class="close">Отмена</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  mounted() {
    axios
      .get('http://localhost:5000/api/todos/' + this.$route.params.id)
      .then(response => {
        this.title = response.data.title
        this.id = response.data._id
        this.body = response.data.body
      });
  },
  data: () => ({
    title: '',
    id: '',
    body: ''
  }),
  methods: {
    update() {
      this.$refs.title.value && this.$refs.body.value && axios.put('http://localhost:5000/api/todos/' + this.$route.params.id, {
        title: this.$refs.title.value,
        body: this.$refs.body.value
      })
    },
    deleteTodo() {
      axios.delete('http://localhost:5000/api/todos/' + this.$route.params.id)
    }
  }
}
</script>