
<template>
  <div>
    <form>
      <label>
        <span>标题</span>
        <input type="text" v-model="todoObj.title">
      </label>
      <label>
        <span>内容</span>
        <input type="text" v-model="todoObj.content">
      </label>

      <button @click="submit">提交</button>
    </form>
    
    <div v-for="item in todoList" :key="item.id">
      <h3>{{item.title}}</h3>
      <p>{{item.content}}</p>
      <button @click="clickUpdate(item)">修改</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { GetTodoList, CreateTodo, PatchTodo } from '@/api/todo'
interface ITodo {
  id?: number;
  title?: string;
  content?: string;
}

const todoObj = ref<ITodo>({
  title: '',
  content: ''
})

const todoList = ref<ITodo[]>([])

const submit = () => {
  if (todoObj.value.id) {
    PatchTodo(todoObj.value).then(res => {
      console.log(res)
      getTodoList()
    })
  } else {
    CreateTodo(todoObj.value).then(res => {
      console.log(res)
      getTodoList()
    })
  }
}

const getTodoList = () => {
  GetTodoList().then(res => {
    todoList.value = res.data.list
  })
}

const clickUpdate = (todo) => {
  todoObj.value = todo
}

onMounted(() => {
  getTodoList()
})

</script>

<style scoped>

</style>