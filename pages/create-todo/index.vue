<template>
  <div class="wrapper">
    <div class="win">
      <div class="inputs">
          <input placeholder="Введите заголовок" class="title-input" type="text" ref="title">
          <textarea placeholder="Введите заметку" class="body-input" ref="body"></textarea>
      </div>
      <div class="buttons">
        <nuxt-link class="add" no-prefetch to='/'>
          <div @click="add">Добавить</div>
        </nuxt-link>
        <nuxt-link class="close" no-prefetch to='/'>Отмена</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    add() {
      this.$refs.title.value && this.$refs.body.value && axios.post('http://localhost:5000/api/todos/', {
        title: this.$refs.title.value,
        body: this.$refs.body.value
      })
    }
  }
}
</script>