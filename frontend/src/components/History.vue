<template>
  <div>
    <v-row class="mx-5">
      <v-col cols="12">
        <v-card color="black accent-4" dark>
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
      <v-col cols="12" v-for="(task, index) in tasks" :key="task.id">
        <a href="#" v-if="index%2 === 0">
          <v-card dark>
            <v-row>
              <v-col cols="4" class="d-flex align-center justify-center">
                {{ task.name }}
              </v-col>
              <v-col cols="4" class="d-flex align-center justify-center">
                {{ task.date }}
              </v-col>
              <v-col cols="4" class="d-flex align-center justify-center">
                {{ task.record }}
              </v-col>
            </v-row>
          </v-card>
        </a>
        <a href="#" v-else>
          <v-card color="grey lighten-2 accent-4" light>
            <v-row>
              <v-col cols="4" class="d-flex align-center justify-center">
                {{ task.name }}
              </v-col>
              <v-col cols="4" class="d-flex align-center justify-center">
                {{ task.date }}
              </v-col>
              <v-col cols="4" class="d-flex align-center justify-center">
                {{ task.record }}
              </v-col>
            </v-row>
          </v-card>
        </a>
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
};
</script>
