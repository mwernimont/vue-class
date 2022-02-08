const app = Vue.createApp({
  data() {
    return {
      name: "Marty Wernimont",
      age: 31,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Ftiger&psig=AOvVaw2xHPa2B4w4itYUqsYe8hrD&ust=1642697933889000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJj5u-ikvvUCFQAAAAAdAAAAABAF",
    };
  },
  methods: {
    older() {
      return this.age + 5;
    },
    favoriteNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
