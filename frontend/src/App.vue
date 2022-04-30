<template>
  <v-app>
    <Navigation
      @changeStatus="changeStatus($event)"
      :isLogin="isLogin"
      :user="user"
      v-show="isLogin"
    />
    <router-view @changeStatus="changeStatus($event)" />
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
    Navigation,
  },
  data() {
    return {
      isLogin: false,
      user: "guest",
    };
  },
  methods: {
    changeStatus(status) {
      this.isLogin = status;
    },
  },
  mounted() {
    if (localStorage.getItem("user") == null) {
      this.isLogin = false;
      this.$router.push({ path: "/login" });
    } else if (localStorage.getItem("user") !== null) {
      this.isLogin = true;
    }
  },
  watch: {
    isLogin: function () {
      this.user = localStorage.getItem("user");
    },
  },
};
</script>
