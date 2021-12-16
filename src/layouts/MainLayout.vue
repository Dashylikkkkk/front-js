<template>
  <div class="main-layout">
    <div id="navbar"><NavBar /></div>
    <!-- <h2 class="page-title">
    </h2> -->
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
    name:"MainLayout",
    components:{
        NavBar
    }
}
</script>


