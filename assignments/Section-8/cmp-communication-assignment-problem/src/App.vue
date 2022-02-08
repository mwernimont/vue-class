<template>
  <section id="app">
    <user-data @submit-info="showInfo" />
    <active-user :username="activeUsername" :age="activeUserAge" />
  </section>
</template>
<script>
export default {
  data() {
    return {
      activeUsername: "",
      activeUserAge: 0,
    };
  },
  methods: {
    showInfo(username, age) {
      this.activeUsername = username;
      this.activeUserAge = +age;
    },
  },
};
</script>
