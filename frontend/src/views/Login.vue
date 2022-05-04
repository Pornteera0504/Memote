<template>
  <v-container
    transition="expand-x-transition"
    fluid
    class="d-flex flex-column justify-center align-center my-auto"
  >
    <a
      href="/"
      class="cyan--text text--{lighten}-{1} text-h1 font-weight-black text-decoration-none"
    >
      Memote
    </a>
    <v-col cols="4">
      <v-form class="d-flex flex-column align-center" ref="login">
        <v-col cols="12" class="pb-0 mb-0">
          <v-text-field
            clearable
            class="text-h6"
            v-model="email"
            label="Email"
            required
            outlined
            :rules="[rules.required, rules.email]"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-text-field
            clearable
            class="text-h6"
            v-model="password"
            label="Password"
            required
            outlined
            hint="At least 8 characters"
            type="password"
            :rules="[rules.required, rules.minPassword]"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="d-flex flex-column align-center pt-0">
          <v-btn
            block
            large
            color="#8FD14F"
            class="mt-3 font-weight-bold white--text"
            v-on:click="login()"
          >
            Login
          </v-btn>

          <p class="text-subtitle-1">
            Not a member?
            <a
              v-on:click="registerDialog = true"
              class="text-decoration-none hover-darker"
              >Create Account</a
            >
          </p>

          <v-btn
            block
            large
            color="info"
            class="font-weight-bold"
            v-on:click="guest()"
          >
            Guest
          </v-btn>
        </v-col>
      </v-form>
    </v-col>
    <v-dialog
      transition="scale-transition"
      v-model="registerDialog"
      max-width="50rem"
    >
      <Register @changeStatus="changeStatus(true)" :closeDialog="closeDialog" />
    </v-dialog>
  </v-container>
</template>

<script>
import Register from "@/components/Register.vue";
import axios from "@/plugins/axios";
export default {
  name: "Login",
  components: {
    Register,
  },
  data() {
    return {
      registerDialog: false,
      email: "",
      password: "",
      rules: {
        required: (value) => !!value || "Required.",
        minPassword: (value) => value.length >= 8 || "At least 8 characters",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    closeDialog(value) {
      this.registerDialog = value;
    },
    async login() {
      if (this.validate()) {
        let data = {
          email: this.email,
          password: this.password,
        };
        await axios
          .post("/login", data)
          .then((res) => {
            console.log(res);
            this.changeStatus(true);
            localStorage.setItem("user", res.data.userName);
            localStorage.setItem("userID", res.data.userID);
            this.$router.push({ path: "/" });
          })
          .catch((err) => {
            alert(err.response.data.reason);
          });
      } else {
        console.log("false");
      }
    },

    changeStatus(status) {
      this.$emit("changeStatus", status);
    },
    guest() {
      localStorage.setItem("user", "guest");
      localStorage.setItem("userID", 1); //set guest user to id 0
      this.changeStatus(true);
      this.$router.push({ path: "/" });
    },
    validate() {
      return this.$refs.login.validate();
    },
  },
  mounted() {
    if (localStorage.getItem("user") !== null) {
      this.isLogin = true;
      this.$router.push({ path: "/" });
    }
  },
};
</script>

<style scoped>
.hover-darker:hover {
  filter: brightness(70%);
  text-decoration: underline !important;
}
</style>
