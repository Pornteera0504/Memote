<template>
  <v-container
    fluid
    class="d-flex flex-column justify-center align-center my-auto"
  >
    <h1 class="cyan--text text--{lighten}-{1} text-h1 font-weight-black">
      Memote
    </h1>
    <v-col cols="4">
      <v-form
        class="d-flex flex-column align-center"
        ref="form"
        v-model="valid"
      >
        <v-col cols="12">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            required
            outlined
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
            outlined
            hide-details
            hint="At least 8 characters"
            type="password"
          ></v-text-field>
        </v-col>
        <v-btn
          block
          large
          color="#8FD14F"
          class="mt-3 font-weight-bold white--text"
          v-on:click="login()"
        >
          Login
        </v-btn>

        <p class="text-caption">
          Not a member?
          <a @click="registerDialog = true" class="text-decoration-none"
            >Create account</a
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
      </v-form>
    </v-col>
    <v-dialog v-model="registerDialog" max-width="50rem">
      <Register :closeDialog="closeDialog" />
    </v-dialog>
  </v-container>
</template>

<script>
import Register from "@/components/Register.vue";
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
    };
  },
  methods: {
    closeDialog(value) {
      this.registerDialog = value;
    },
    login() {},
    guest() {},
  },
};
</script>
