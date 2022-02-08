const app = Vue.createApp({
  data() {
    return {
      boxASelected,
    };
  },
  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    },
  },
});

app.mount("#styling");
