<template>
  <div>
    <Navigation :isLogin="isLogin" />

    <v-container
      fluid
      class="d-flex flex-column justify-center align-center my-16"
    >
      <v-col cols="7">
        <v-row class="justify-end">
          <v-col cols="2">
            <v-subheader class="text-h6 font-weight-bold black--text"
              >ชื่อบันทึก
            </v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field solo clearable v-model="name"> </v-text-field>
          </v-col>
        </v-row>

        <v-row class="justify-end">
          <v-col cols="2">
            <v-subheader class="text-h6 font-weight-bold black--text"
              >หมวดหมู่
            </v-subheader>
          </v-col>
          <v-col cols="8">
            <v-select
              clearable
              :items="items"
              v-model="item"
              label="select"
              solo
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="justify-end">
          <v-col cols="2">
            <v-subheader class="text-h6 font-weight-bold black--text"
              >ข้อความ
            </v-subheader>
          </v-col>
          <v-col cols="8">
            <v-textarea clearable auto-grow solo v-model="message"></v-textarea>
          </v-col>
        </v-row>

        <v-row class="justify-end">
          <v-btn class="error" @click="cancel">ยกเลิก</v-btn>
          <v-btn class="success ml-5" @click="save">บันทึก</v-btn>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
      name: "",
      item: "",
      message: "",
      items: ["test1", "test2"],
    };
  },
  methods: {
    save() {
      console.log("save");
      this.$router.push({ path: "/" });
    },
    cancel() {
      console.log("cancel");
      this.$router.push({ path: "/" });
    },
  },
};
</script>
