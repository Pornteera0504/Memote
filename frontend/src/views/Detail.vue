<template>
  <v-card
    class="mx-auto my-10 pa-5 justify-center align-center"
    max-width="50%"
    elevation="24"
    outlined
  >
    <v-card-title class="text-h3">
      Card 1
      <v-btn icon class="mx-2">
        <v-icon x-large>mdi-circle-edit-outline</v-icon>
      </v-btn>
      <v-btn icon class="mx-2">
        <v-icon x-large>mdi-delete-circle-outline</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="text-subtitle-1"
      ><span class="font-weight-bold">หมวดหมู่ : </span
      >{{ "งานค้าง" }}</v-card-text
    >
    <v-card-text class="text-h6 font-weight-bold">
      <v-row>
        <v-col cols="6">
          วันที่ทำกิจกรรม
          <br />
          <v-chip color="cyan" dark>55-55-5555</v-chip>
        </v-col>
        <v-col cols="6">
          วันที่บันทึกกิจกรรม
          <br />
          <v-chip color="cyan" dark>55-55-5555</v-chip>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text class="text-h6 font-weight-bold">
      คำอธิบาย :
      <p class="text-body-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, odio
        repudiandae modi consequuntur consectetur ex cumque laborum hic atque
        dolorum quod quam, suscipit aspernatur accusantium rem nostrum culpa
        optio dolore.
      </p>
    </v-card-text>
  </v-card>
</template>
<script>
export default {};
</script>
