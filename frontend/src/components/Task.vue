<template>
  <div>
    <v-row v-for="task in tasks" :key="task.taskID">
      <v-card
        class="mx-10 my-2 py-2 cyan lighten-1 white--text font-weight-medium text-h6 d-flex text-center"
        width="100%"
        rouded
        @click="seeDetail(task.taskID)"
      >
        <v-col cols="4">{{ task.task_name }}</v-col>
        <v-col cols="4">{{ task.activityDate }}</v-col>
        <v-col cols="4">{{ task.lastEditDate }}</v-col>
      </v-card>
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
  name: "Task",
  props: { 
    tasks: {
      type: Array,
      require: true
    } 
  },
  methods: {
    seeDetail(id) {
      this.$router.push({
        name: 'Detail',
        params: { 
          id: id,
        },
      })
    }
  }
};
</script>
