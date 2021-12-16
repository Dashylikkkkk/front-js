<template>
  <section class="create-todo">
    <input
      v-model="todoName"
      type="text"
      id="name-todo"
      placeholder="Название дела"
    />
    <button @click="onCreateTodoClicked" class="button">Создать</button>
  </section>
</template>

<script>
import { createTodo } from "@/netClient/dataService";

export default {
  name: "CreateTod",
  data: () => ({
    todoName: "",
  }),
  methods: {
    async onCreateTodoClicked() {
      try {
        const newTodo = await createTodo({ title: this.todoName });
        if (newTodo) {
          this.todoName = "";
        }
        this.$emit('todo-created', )
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>
