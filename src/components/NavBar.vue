<template>
  <div id="nav">
    <div class="navPage">
      <router-link class="page" to="/">
        Главная
      </router-link>
      <router-link class="page" to="/info">
        Инфо
      </router-link>
      <a @click="onLogoutClicked" class="logout page">
        Выйти
      </a>
    </div>
  </div>
</template>

<script>
import { doLogout } from "@/netClient/dataService";
export default {
  name: "NavBar",
  methods: {
    async onLogoutClicked() {
      try {
        await doLogout();
        this.$router.push("/login");
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>
