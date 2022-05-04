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
            <v-text-field solo clearable v-model="taskName"> </v-text-field>
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
              :items="categoriesName"
              v-model="categoryName"
              solo
              readonly
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
            <DatePicker @setDate="setDate($event)" :sendDate="date"/>
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
import axios from "@/plugins/axios";
export default {
  name: "Edit",
  props: ["cateName", "taskId", "task"],
  components: {
    DatePicker,
  },
  data() {
    return {
      dateModal: false,
      isLogin: true,
      taskName: this.$route.params.create ? "" : this.$route.params.task.task_name,
      date: this.$route.params.create ? "" : this.$route.params.task.activityDate,
      description: this.$route.params.create ? "" : this.$route.params.task.description,
      categoriesName: [],
      categoryName: this.$route.params.create ? this.$props.cateName : this.$route.params.task.cate_name
    };
  },
  methods: {
    async save() {
      let data = {
        taskID: this.$route.params.create ? this.$route.params.taskId : this.$route.params.task.taskID,
        userID: parseInt(localStorage.getItem("userID")),
        name: this.taskName,
        description: this.description,
        activityDate: this.date,
        categoryName: this.categoryName,
      };
      await axios
        .post("/task/modify", data)
        .then((res) => {
          console.log(res.data);
          this.$router.push({ path: "/" });
        })
        .catch((err) => {
          alert(err.response.data.reason);
        });
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
    this.categoriesName = [this.$route.params.create ? this.$route.params.cateName : this.$route.params.task.cate_name]
  },
};
</script>
