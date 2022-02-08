const app = Vue.createApp({
  data() {
    return {
      input: "",
      tasks: [],
      visible: true,
    };
  },
  computed: {
    buttonText() {
      return this.visible ? "Hide" : "Show";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.input);
    },
    toggle() {
      this.visible = !this.visible;
    },
  },
});

app.mount("#assignment");
