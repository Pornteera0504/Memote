<template>
  <div>
    <v-row class="mx-5">
      <v-col cols="12">
        <v-card class="grey darken-1" dark>
          <v-row>
            <v-col cols="4" class="d-flex align-center justify-center">
              <h2>กิจกรรม</h2>
            </v-col>
            <v-col cols="4" class="d-flex align-center justify-center">
              <h2>วันที่ทำกิจกรรม</h2>
            </v-col>
            <v-col cols="4" class="d-flex align-center justify-center">
              <h2>วันที่บันทึกกิจกรรม</h2>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-5">
      <v-col cols="12" v-for="(task, index) in tasks" :key="task.taskID">
        <v-card
          class="grey lighten-2"
          v-if="index % 2 == 0"
          @click="seeDetail(task.taskID)"
        >
          <v-row>
            <v-col cols="4" class="d-flex align-center justify-center">
              {{ task.name }}
            </v-col>
            <v-col cols="4" class="d-flex align-center justify-center">
              {{ task.activityDate }}
            </v-col>
            <v-col cols="4" class="d-flex align-center justify-center">
              {{ task.lastEditDate }}
            </v-col>
          </v-row>
        </v-card>
        <v-card v-else @click="seeDetail(task.taskID)">
          <v-row>
            <v-col cols="4" class="d-flex align-center justify-center">
              {{ task.name }}
            </v-col>
            <v-col cols="4" class="d-flex align-center justify-center">
              {{ task.activityDate }}
            </v-col>
            <v-col cols="4" class="d-flex align-center justify-center">
              {{ task.lastEditDate }}
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
a {
  text-decoration: none;
}
</style>
<script>
export default {
  name: "History",
  props: { tasks: Array },
  methods: {
    seeDetail(id) {
      this.$router.push({
        name: "Detail",
        params: {
          id: id,
        },
      });
    },
  },
};
</script>
