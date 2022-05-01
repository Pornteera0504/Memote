<template>
  <div>
    <v-row class="my-5 mx-5">
      <v-col cols="12">
        <h1>
          หมวดหมู่ของกิจกรรมทั้งหมด
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" v-for="card in cards" :key="card.categoryId">
        <CardType :category="card" />
      </v-col>
    </v-row>
    <v-row class="my-5 mx-5">
      <v-col cols="10">
        <h1>กิจกรรมทั้งหมด</h1>
      </v-col>
      <v-col cols="2">
        <v-text-field
          v-model="message"
          label="Search"
          placeholder="Task Name"
          prepend-inner-icon="mdi-add"
          clear-icon="mdi-close-circle"
          clearable
          filled
          rounded
          dense
          @click:clear="clearMessage"
        />
      </v-col>
    </v-row>
    <History :tasks="selectedTask" />
  </div>
</template>
<script>
import CardType from "@/components/CardType.vue";
import History from "@/components/History.vue";
import axios from "@/plugins/axios";

export default {
  name: "Landing",
  components: {
    CardType,
    History,
  },
  data() {
    return {
      cards: [],
      tasks: [],
      isLogin: true,
      password: "Password",
      show: false,
      message: "",
      marker: true,
    };
  },
  computed: {
    selectedTask() {
      if (this.message)
        return this.tasks.filter((task) => task.name.includes(this.message));
      else return this.tasks;
    },
  },
  mounted() {
    this.getCategory();
    this.getTask();
  },
  methods: {
    clearMessage() {
      this.message = "";
    },
    async getCategory() {
      await axios
        .get("/categories")
        .then((response) => (this.cards = response.data));
    },
    async getTask() {
      await axios
        .post("/all/tasks", { userID: localStorage.getItem("userID") })
        .then((response) => (this.tasks = response.data));
    },
  },
};
</script>
