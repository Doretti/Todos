<template>
  <div class="wrapper">
    <div class="win">
      <div class="tools">
        <nuxt-link no-prefetch to='/create-todo'>
          <button class="add">Добавить</button>
        </nuxt-link>
      </div>
      <div class="todos">
        <TodoList />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .tools {
    height: 5%;
    background-color: #fff;
    border-radius: 12px 12px 0 0;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 5px;
  }
  .todos {
    height: 94%;
    background-color: #fff;
    border-radius: 0 0 12px 12px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    padding: 8px;
  }
  </style>
