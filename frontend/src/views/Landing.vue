<template>
  <div>
    <Navigation />
    <v-row class="my-5 mx-5">
      <v-col cols="12">
        <h1>หมวดหมู่ของกิจกรรมทั้งหมด</h1>
      </v-col>
    </v-row>
    <v-row>
        <v-col cols="2" v-for="card in cards" :key="card">
            <CardType :type=card />
        </v-col>
    </v-row>
    <v-row class="my-5 mx-5">
        <v-col cols="10">
            <h1>กิจกรรมทั้งหมด</h1>
        </v-col>
        <v-col cols="2">
            <v-text-field
                label="Search"
                placeholder="Task Name"
                filled
                rounded
                dense
            />
        </v-col>
    </v-row>
    <History :tasks=tasks />

  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue"
import CardType from "@/components/CardType.vue"
import History from "@/components/History.vue"

export default {
    name: "Landing",
    components: {
        Navigation,
        CardType,
        History
    },
    data() {
        return{
            cards: [
                {
                    name: "งานที่ต้องทำ",
                    describ: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia id, tempora dicta et iure atque fugit, rerum architecto nam molestiae corporis placeat eaque, ut doloribus totam repellat nulla. Placeat, delectus?"
                },
                {
                    name: "พักผ่อน",
                    describ: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia id, tempora dicta et iure atque fugit, rerum architecto nam molestiae corporis placeat eaque, ut doloribus totam repellat nulla. Placeat, delectus?"
                },
                {
                    name: "การเงิน",
                    describ: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia id, tempora dicta et iure atque fugit, rerum architecto nam molestiae corporis placeat eaque, ut doloribus totam repellat nulla. Placeat, delectus?"
                }
            ],
            tasks: [
                {
                    name: "ปั่นจักรยาน",
                    date: "20-04-2022",
                    record: "07-04-2022"
                },
                {
                    name: "ทำการบ้าน",
                    date: "20-04-2022",
                    record: "07-04-2022"
                },
                {
                    name: "เปิดบัญชี",
                    date: "20-04-2022",
                    record: "07-04-2022"
                }
            ]
        }
    }
}
</script>
