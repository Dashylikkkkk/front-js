<template>
  <div class="home-page">
    <CreateTodo @todo-created="onTodoCreated" />
    <!-- <div class="separator"><hr /></div> -->
    <section class="todo-list">
      <ul>
        <li
          v-for="todoItem in todoList"
          :key="todoItem.id"
          class="todo-item"
          :class="{ done: todoItem.isDone }"
        >
          <div class="title">
            {{ todoItem.title }}
          </div>
          <div class="actions">
            <input
              type="checkbox"
              class="checkbox"
              :checked="todoItem.isDone"
              @input="onCheckBoxInput(todoItem.id, todoItem.isDone)"
            />
            <button class="btn" v-on:click="OnDeleteTodoClicked(todoItem.id)" >X</button>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { fetchTodoList, patchTodo, deleteTodo } from "@/netClient/dataService";
import CreateTodo from "@/components/CreateTodo";
export default {
  name: "Home",
  components: {
    CreateTodo,
  },
  data: () => ({
    todoList: [],
  }),
  created() {
    this.fetchTodoList();
  },
  methods: {
    async OnDeleteTodoClicked(id) {
      try {
        await deleteTodo({id});
        this.fetchTodoList();
      } catch (error) {
        console.error({ error });
      }
    },
    onTodoCreated() {
      this.fetchTodoList();
    },
    async fetchTodoList() {
      try {
        this.todoList = await fetchTodoList();
      } catch (error) {
        console.error({ error });
      }
    },

    async onCheckBoxInput(id, isDone) {
      try {
        await patchTodo({ id, isDone: !isDone });
        this.fetchTodoList();
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>
