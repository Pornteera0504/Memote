<template>
  <v-card>
    <v-icon></v-icon>
    <v-card-text class="py-10">
      <v-row class="d-flex flex-column justify-center align-center">
        <v-col cols="7">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Name"
            required
            outlined
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            required
            outlined
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
            outlined
            hint="At least 8 characters"
            type="password"
          ></v-text-field>
          <v-btn
            block
            large
            color="#8FD14F"
            class="mt-3 font-weight-bold white--text"
            v-on:click="register()"
          >
            Register
          </v-btn>
          <v-btn
            block
            large
            color="#C2C2C2"
            class="mt-3 font-weight-bold white--text"
            v-on:click="closeDialog(false)"
          >
            Close
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Register",
  props: {
    closeDialog: Function,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {},
  },
};
</script>
