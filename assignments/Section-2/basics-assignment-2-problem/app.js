const app = Vue.createApp({
  data() {
    return {
      keydownValue: "",
      content: "",
      confirmedContent: "",
    };
  },
  methods: {
    showAlert() {
      alert("Alert Button Clicked!");
    },
    showKeydownValue(e) {
      this.keydownValue = e.target.value;
    },
    confirm() {
      this.confirmedContent = this.keydownValue;
    },
  },
});

app.mount("#assignment");
