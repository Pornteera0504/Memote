<template>
  <v-app>
    <router-view />
    <v-footer app>
      Memote
      <span> &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
