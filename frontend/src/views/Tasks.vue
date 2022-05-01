<template>
  <div>
    <v-row class="mx-10 my-5">
      <v-col col="12" class="mt-3 d-flex justify-space-between">
        <p class="text-h3 font-weight-black">{{ $route.params.name }}</p>
        <v-btn icon @click="addTask($route.params.name)">
          <v-icon x-large>mdi-plus-circle</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="mx-10 my-5 font-weight-bold text-h5">
      <v-col cols="4" class="d-flex justify-center align-center">กิจกรรม</v-col>
      <v-col cols="4" class="d-flex justify-center align-center"
        >วันที่ทำกิจกรรม</v-col
      >
      <v-col cols="4" class="d-flex justify-center align-center"
        >วันที่บันทึกกิจกรรม</v-col
      >
    </v-row>
    <Task :tasks="tasks" />
  </div>
</template>
<script>
import Task from "@/components/Task.vue";
import axios from "@/plugins/axios";

export default {
  name: "Tasks",
  components: {
    Task,
  },
  data() {
    return {
      tasks: [],
    };
  },
  mounted() {
    this.getTask();
  },
  methods: {
    addTask(categoryName) {
      this.$router.push({
        name: "Edit",
        params: {
          categoryName: categoryName,
          taskId: 0
        },
      });
    },
    getTask() {
      axios
        .post("/matching/tasks", {
          userID: localStorage.getItem("userID"),
          categoryID: this.$route.params.id,
        })
        .then((response) => (this.tasks = response.data));
    },
  },
};
</script>
