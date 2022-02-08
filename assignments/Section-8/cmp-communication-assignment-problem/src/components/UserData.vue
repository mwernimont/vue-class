<template>
  <section>
    <label>Username</label>
    <input type="text" aria-label="Enter Username" v-model="enteredUsername" />
    <label>Age</label>
    <input type="number" aria-label="Enter Age" v-model="enteredAge" />
    <button @click="submitInfo">Enter</button>
  </section>
</template>
<script>
export default {
  emits: ["submit-info"],
  data() {
    return {
      enteredUsername: "",
      enteredAge: "",
    };
  },
  methods: {
    submitInfo() {
      this.$emit("submit-info", this.enteredUsername, this.enteredAge);
    },
  },
};
</script>
<style scoped>
section input {
  float: none;
}
</style>
