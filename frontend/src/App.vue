<template>
  <v-app>
    <Navigation :isLogin="isLogin" :user="user" v-show="isLogin"/>
    <router-view />
    <v-footer app>
      Memote
      <span> &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation
  },
  data() {
    return{
      isLogin: false,
      user: "Guest"
    }
  },
}
</script>