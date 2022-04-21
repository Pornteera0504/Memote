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
          @click="validate"
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
          @click="validate"
        >
          Guest
        </v-btn>
      </v-form>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      registerDialog: false,
    };
  },
};
</script>
