<template>
  <div>
    <v-row class="my-5 mx-5">
      <v-col cols="12">
        <h1>
          หมวดหมู่ของกิจกรรมทั้งหมด
          <v-btn icon @click="addType">
            <v-icon>mdi-plus-circle</v-icon>
          </v-btn>
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" v-for="card in cards" :key="card.id">
        <CardType :type="card" />
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

    <v-row justify="center">
      <v-dialog v-model="newTypeDialog" persistent max-width="20%">
        <v-card style="overflow: hidden">
          <v-card-title class="text-h5 justify-center align-center my-2">
            Create type
          </v-card-title>
          <v-row class="d-flex justify-center align-center my-2">
            <v-col cols="11">
              <v-text-field
                v-model="newType.name"
                label="Name"
                placeholder="Type"
                outlined
                clearable
              />
              <v-text-field
                v-model="newType.describ"
                label="Description"
                outlined
                clearable
              />
            </v-col>
            <v-btn color="black darken-1" text @click="newTypeDialog = false">
              Cancel
            </v-btn>
            <v-btn color="green darken-1" text @click="saveType">
              Create
            </v-btn>
          </v-row>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
import CardType from "@/components/CardType.vue";
import History from "@/components/History.vue";

export default {
  name: "Landing",
  components: {
    CardType,
    History,
  },
  data() {
    return {
      cards: [
        {
          id: "1",
          name: "งานที่ต้องทำ",
          describ:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia id, tempora dicta et iure atque fugit, rerum architecto nam molestiae corporis placeat eaque, ut doloribus totam repellat nulla. Placeat, delectus?",
        },
        {
          id: "2",
          name: "พักผ่อน",
          describ:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia id, tempora dicta et iure atque fugit, rerum architecto nam molestiae corporis placeat eaque, ut doloribus totam repellat nulla. Placeat, delectus?",
        },
        {
          id: "3",
          name: "การเงิน",
          describ:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia id, tempora dicta et iure atque fugit, rerum architecto nam molestiae corporis placeat eaque, ut doloribus totam repellat nulla. Placeat, delectus?",
        },
      ],
      tasks: [
        {
          id: "1",
          type: "2",
          name: "ปั่นจักรยาน",
          date: "20-04-2022",
          record: "07-04-2022",
        },
        {
          id: "2",
          type: "1",
          name: "ทำการบ้าน",
          date: "20-04-2022",
          record: "07-04-2022",
        },
        {
          id: "3",
          type: "3",
          name: "เปิดบัญชี",
          date: "20-04-2022",
          record: "07-04-2022",
        },
      ],
      isLogin: true,
      password: "Password",
      show: false,
      message: "",
      marker: true,
      newTypeDialog: false,
      newType: {
        name: "",
        describ: "",
      },
    };
  },
  computed: {
    selectedTask() {
      if (this.message)
        return this.tasks.filter((task) => task.name.includes(this.message));
      else return this.tasks;
    },
  },

  methods: {
    clearMessage() {
      this.message = "";
    },
    addType() {
      this.newTypeDialog = true;
    },
    saveType() {
      this.cards.push({
        name: this.newType.name,
        describ: this.newType.describ,
      });
      this.newTypeDialog = false;
    },
  },
};
</script>
