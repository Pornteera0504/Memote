<template>
  <a href="#">
    <v-row v-for="task in tasks" :key="task.id">
      <v-card
        class="mx-10 my-2 py-2 cyan lighten-1 white--text font-weight-medium text-h6 d-flex text-center"
        width="100%"
        rouded
        v-if="task.type === $route.params.id"
      >
        <v-col cols="4">{{ task.name }}</v-col>
        <v-col cols="4">{{ task.date }}</v-col>
        <v-col cols="4">{{ task.record }}</v-col>
      </v-card>
    </v-row>
  </a>
</template>
<style scoped>
a {
  text-decoration: none;
}
</style>
<script>
export default {
  name: "Task",
  props: { tasks: Object },
};
</script>
