<template>
  <div style="margin-bottom: 3%; z-index: 10">
    <v-app-bar
      class="px-5"
      color="amber lighten-4"
      style="position: fixed; top: 0"
      dense
    >
      <v-tabs icons-and-text>
        <v-tab>
          <router-link to="/">
            <span
              class="cyan--text text--{lighten}-{1} text-h5 font-weight-black"
            >
              Memote
            </span>
          </router-link>
        </v-tab>
      </v-tabs>
      <v-spacer />

      <template v-if="isLogin === true">
        <v-btn icon class="mx-2">
          <v-icon>mdi-account-circle</v-icon>
          <span>{{ user }}</span>
        </v-btn>

        <v-btn icon disabled>
          <span style="font-size: 2rem" class="mx-1">|</span>
        </v-btn>

        <v-row justify="center">
          <v-dialog
            v-model="logoutDialog"
            persistent
            max-width="20%"
            max-heignt="20%"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon class="mx-1" v-bind="attrs" v-on="on"> Logout </v-btn>
            </template>
            <v-card style="overflow: hidden">
              <v-card-title class="text-h5 justify-center align-center my-2">
                Logout
              </v-card-title>
              <v-card-text class="d-flex justify-center align-center my-2"
                >You will returned to login</v-card-text
              >
              <v-spacer />
              <v-row class="d-flex justify-center align-center my-2">
                <v-btn
                  color="black darken-1"
                  text
                  @click="logoutDialog = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="red darken-1"
                  text
                  @click="logoutDialog = false || logout()"
                >
                  Logout
                </v-btn>
              </v-row>
            </v-card>
          </v-dialog>
        </v-row>
      </template>
      <v-btn icon class="mx-2" dark v-else>
        <span>
          <a href="/"> Login </a>
        </span>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<style scoped>
a {
  text-decoration: none;
  color: white !important;
}
</style>
<script>
export default {
  name: "Navigation",
  props: { isLogin: Boolean, user: String },
  data() {
    return {
      logoutDialog: false,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("userID");
      this.message = "";
      this.$emit("changeStatus", false);
      this.$router.push({ path: "/login" });
    },
  },
};
</script>
