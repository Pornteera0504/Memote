<template>
  <router-link
    :to="{
      name: 'Tasks',
      path: '/category/:name',
      params: { id: type.categoryId, name: type.name },
    }"
  >
    <v-card class="mx-auto" max-width="80%" color="blue accent-4" outlined dark>
      <v-card-title class="d-flex align-center justify-center">
        {{ type.name }}
      </v-card-title>
      <v-card-text>
        <span class="font-weight-black"> รายละเอียด : </span>
        {{ type.definition }}
      </v-card-text>
    </v-card>
  </router-link>
</template>
<style scoped>
a {
  text-decoration: none;
}
</style>
<script>
export default {
  name: "CardType",
  props: {
    type: { type: Object },
    name: { type: String, require: true },
  },
};
</script>
