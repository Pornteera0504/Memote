<template>
  <v-app>
    <Navigation :isLogin="isLogin" :user="user"/>
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
  // props: {
  //   isLogin: {status: Boolean, require: true}
  // }
  data() {
    return{
      isLogin: true,
      user: "User 1"
    }
  }
}
</script>