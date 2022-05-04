<template>
  <div>
    <v-card
      class="mx-auto my-10 pa-5 justify-center align-center"
      max-width="50%"
      elevation="24"
      outlined
    >
      <v-card-title class="text-h3">
        {{ task.task_name }}
        <v-btn icon class="mx-2" @click="editTask">
          <v-icon x-large>mdi-circle-edit-outline</v-icon>
        </v-btn>
        <v-btn icon class="mx-2" @click="dialog = true">
          <v-icon x-large>mdi-delete-circle-outline</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="text-subtitle-1"
        ><span class="font-weight-bold">หมวดหมู่ : </span
        >{{ task.cate_name }}</v-card-text
      >
      <v-card-text class="text-h6 font-weight-bold">
        <v-row>
          <v-col cols="6">
            วันที่ทำกิจกรรม
            <br />
            <v-chip color="cyan" dark>{{ task.activityDate }}</v-chip>
          </v-col>
          <v-col cols="6">
            วันที่บันทึกกิจกรรม
            <br />
            <v-chip color="cyan" dark>{{ task.lastEditDate }}</v-chip>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text class="text-h6 font-weight-bold">
        คำอธิบาย :
        <p class="text-body-1">
          {{ task.description }}
        </p>
      </v-card-text>
    </v-card>

    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="text-h5"> ลบกิจกรรม </v-card-title>
          <v-card-text
            >คุณจะลบกิจกรรม
            {{ task.task_name }} และจะไม่สามารถนำกลับคืนมาได้อีก</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="dialog = false"> ยกเลิก </v-btn>
            <v-btn color="red darken-1" text @click="deleteTask">
              ยืนยัน
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
import axios from "@/plugins/axios";

export default {
  name: "Detail",
  data() {
    return {
      task: {},
      dialog: false,
    };
  },
  mounted() {
    this.getTask();
  },
  methods: {
    async getTask() {
      await axios
        .post("/task/detail", { taskID: this.$route.params.id })
        .then((response) => (this.task = response.data));
    },
    async deleteTask() {
      await axios
        .delete("/task/delete/" + this.$route.params.id)
        .then((res) => {
          console.log(res.data);
          this.$router.push({ path: "/" });
        })
        .catch((err) => {
          alert(err.response.data.reason);
        });
      this.dialog = false;
    },
    editTask() {
      this.$router.push({
        name: "Edit",
        params: {
          task: this.task,
          create: false,
        },
      });
    },
  },
};
</script>
