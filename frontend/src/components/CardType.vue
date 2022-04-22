<template>
  <v-card class="mx-auto" max-width="80%" color="blue accent-4" outlined dark>
    <v-card-title class="d-flex align-center justify-center"
      >{{ type.name }}</v-card-title
    >
    <v-card-text
      ><span class="font-weight-black">รายละเอียด : </span>{{ type.describ }}</v-card-text
    >
  </v-card>
</template>
<script>
export default {
  name: "CardType",
  props: {type: Function},
};
</script>
