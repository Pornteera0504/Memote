<template>
  <v-dialog
    ref="dialog"
    v-model="dateModal"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-row class="justify-end">
        <v-text-field
          v-model="dateFormatted"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
          @blur="date = parseDate(dateFormatted)"
        ></v-text-field>
      </v-row>
    </template>
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="dateModal = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(date)"> OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  name: "Edit",
  props: { sendDate: String },
  data() {
    return {
      dateModal: false,
      date: this.setDate(),
      dateFormatted: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
    };
  },
  methods: {
    setDate() {
      return new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10);
    },
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${day.padStart(2, "0")}-${month.padStart(2, "0")}`;
    },
  },
  watch: {
    date: function () {
      this.dateFormatted = this.formatDate(this.date);
      this.$emit("setDate", this.dateFormatted);
    },
  },
  mounted() {
    this.date = this.sendDate ? this.parseDate(this.sendDate) : this.setDate();
    this.$emit("setDate", this.dateFormatted);
  },
};
</script>
