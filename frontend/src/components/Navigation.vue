<template>
  <v-app-bar class="px-5" color="black accent-4" elevate-on-scroll dense dark>
    <v-tabs icons-and-text>
      <v-tab href="#tab-1">
        Memote
        <v-icon>mdi-home</v-icon>
      </v-tab>
      <v-tab>Item Two</v-tab>
      <v-tab>Item Three</v-tab>
    </v-tabs>
    <v-spacer />

    <v-btn icon class="mx-2">
      <v-icon>mdi-account-circle</v-icon>
      <span>User 1</span>
    </v-btn>

    <v-btn icon disabled>
      <span style="font-size: 2rem; color: white" class="mx-1">|</span>
    </v-btn>
    <v-btn icon class="mx-1">
      <span>Logout</span>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
    name: "Navigation",
}
</script>
