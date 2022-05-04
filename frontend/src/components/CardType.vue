<template>
  <v-card
    class="mx-auto amber lighten-4 elevation-12"
    max-width="80%"
    outlined
    @click="selectCategory"
    dense
  >
    <v-card-title class="d-flex align-center justify-center">
      {{ category.name }}
    </v-card-title>
    <v-card-text>
      <span class="font-weight-black"> รายละเอียด : </span>
      {{ category.definition }}
    </v-card-text>
  </v-card>
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
    category: {
      type: Object,
      require: true,
    },
  },
  methods: {
    selectCategory() {
      this.$router.push({
        name: "Tasks",
        params: {
          id: this.category.categoryID,
          name: this.category.name,
        },
      });
    },
  },
};
</script>
