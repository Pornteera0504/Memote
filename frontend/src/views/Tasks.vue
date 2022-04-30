<template>
  <div>
    <v-row class="mx-10 my-5">
      <v-col col="12" class="mt-3 d-flex justify-space-between">
        <p class="text-h3 font-weight-black">{{ $route.params.name }}</p>
        <v-btn icon @click="addTask">
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

export default {
  name: "Tasks",
  components: {
    Task,
  },
  data() {
    return {
      tasks: [
        {
          id: "1",
          type: "2",
          name: "ปั่นจักรยาน",
          date: "20-04-2022",
          record: "07-04-2022",
        },
        {
          id: "2",
          type: "1",
          name: "ทำการบ้าน",
          date: "20-04-2022",
          record: "07-04-2022",
        },
        {
          id: "3",
          type: "3",
          name: "เปิดบัญชี",
          date: "20-04-2022",
          record: "07-04-2022",
        },
      ],
    };
  },
  methods: {
    addTask() {
      this.$router.push({ path: "/edit" });
    },
  },
};
</script>
