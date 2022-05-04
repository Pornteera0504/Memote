<template>
  <v-card>
    <v-card-text class="py-10">
      <v-form
        ref="register"
        class="d-flex flex-column justify-center align-center"
      >
        <v-col cols="7">
          <v-text-field
            clearable
            v-model="username"
            :rules="[rules.required]"
            label="Username"
            required
            outlined
          ></v-text-field>
          <v-text-field
            clearable
            v-model="email"
            :rules="[rules.required, rules.email]"
            label="Email"
            required
            outlined
          ></v-text-field>

          <v-text-field
            clearable
            v-model="password"
            :rules="[rules.required, rules.minPassword]"
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
            class="font-weight-bold white--text"
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
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "@/plugins/axios";
export default {
  name: "Register",
  props: { closeDialog: Function },
  data() {
    return {
      username: "",
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
    register() {
      if (this.validate()) {
        let data = {
          userName: this.username,
          password: this.password,
          email: this.email,
        };

        try {
          axios
            .post("/register", data)
            .then((res) => {
              alert(res.data);
              localStorage.setItem("user", data.userName);
              this.$emit("changeStatus", true);
              this.closeDialog(false);
            })
            .catch((err) => {
              alert(err.response.data);
            });
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("false");
      }
    },
    validate() {
      return this.$refs.register.validate();
    },
  },
};
</script>
