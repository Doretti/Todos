<template>
    <div class="todo-item">
        {{title}}
    </div>
</template>

<script>
export default {
    props: ['title', 'id', 'body'],
    data: () => ({

    })
}
</script>

<style>
    .todo-item {
        width: 100%;
        padding: 5px;
        display: flex;
        cursor: pointer;
        margin-bottom: 5px;
        border-radius: 8px;
    }

    .todo-item:hover {
        background-color: #eee;
    }
</style>