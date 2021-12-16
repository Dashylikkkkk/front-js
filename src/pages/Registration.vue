<template>
  <form @submit.prevent="onFormSubmit" class="registration-form auth-form">
    <div class="form-field">
      <label for="email">Email</label>
      <input v-model="email" id="email" type="text" required />
    </div>
    <div class="form-field">
      <label for="login">Логин</label>
      <input v-model="login" id="login" type="text" required />
    </div>
    <div class="form-field">
      <label for="password">Пароль</label>
      <input v-model="password" id="password" type="password" required />
    </div>
    <div class="submit">
      <input type="submit" value="Регистрация" />
    </div>
    <div class="action-link">
      <span>Уже есть аккаунт?</span>
      <a @click="redirect" class="link-btn">Войти</a>
    </div>
  </form>
</template>

<script>
import { doRegister } from "@/netClient/dataService";

export default {
  name: "Registration",
  data: () => ({
    email: "",
    login: "",
    password: "",
  }),
  async mounnted() {},
  methods: {
    async onFormSubmit() {
      try {
        const data = await doRegister(
          this.login.trim(),
          this.password.trim(),
          this.email.trim()
        );
        console.warn({ data });
      } catch (error) {
        console.error({ error });
      }
      this.$router.push("/login");
    },
    redirect() {
      this.$router.push("/login");
    },
  },
};
</script>
