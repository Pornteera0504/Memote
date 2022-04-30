<template>
  <div>
    <v-container
      fluid
      class="d-flex flex-column justify-center align-center my-16"
    >
      <v-col cols="7">
        <v-row class="justify-end">
          <v-col cols="3">
            <v-subheader class="text-h6 font-weight-bold black--text"
              >ชื่อบันทึก
            </v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field solo clearable v-model="name"> </v-text-field>
          </v-col>
        </v-row>

        <v-row class="justify-end">
          <v-col cols="3">
            <v-subheader class="text-h6 font-weight-bold black--text"
              >หมวดหมู่
            </v-subheader>
          </v-col>
          <v-col cols="8">
            <v-select
              clearable
              :items="categoryNames"
              v-model="categoryName"
              label="select"
              solo
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="justify-end">
          <v-col cols="3">
            <v-subheader class="text-h6 font-weight-bold black--text"
              >วันที่เริ่ม
            </v-subheader>
          </v-col>
          <v-col cols="8">
            <DatePicker @setDate="setDate($event)" />
          </v-col>
        </v-row>

        <v-row class="justify-end">
          <v-col cols="3">
            <v-subheader class="text-h6 font-weight-bold black--text"
              >ข้อความ
            </v-subheader>
          </v-col>
          <v-col cols="8">
            <v-textarea
              clearable
              auto-grow
              solo
              v-model="description"
            ></v-textarea>
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
import DatePicker from "@/components/DatePicker.vue";
export default {
  name: "Edit",
  components: {
    DatePicker,
  },
  props: {
    
  },
  data() {
    return {
      dateModal: false,
      isLogin: true,
      name: "",
      categoryName: "",
      date: "",
      description: "",
      categoryNames: ["test1", "test2"],
    };
  },
  methods: {
    save() {
      let data = {
        taskID: "",
        userID: "",
        name: "",
        description: "",
        activityDate: "",
        categoryName: this.categoryName,
      };

      console.log(data);
      this.$router.push({ path: "/" });
    },
    cancel() {
      this.reset();
      this.$router.push({ path: "/" });
    },
    reset() {
      (this.name = ""), (this.item = ""), (this.message = "");
    },
    setDate(date) {
      this.date = date;
    },
  },
  mounted() {
    // this.name = localStorage.getItem("user")
    console.log( this.$route.params.name );
  },
};
</script>
