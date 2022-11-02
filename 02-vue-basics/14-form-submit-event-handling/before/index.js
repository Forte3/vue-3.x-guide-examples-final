// 示例：表单事件处理
const app = Vue.createApp({
  data() {
    return {
      username: "",
      gender: "",
      interests: [],
      occupation: "",
      intro: "",
    };
  },
  methods: {
    handleSubmit(e) {
      // console.log(e)
      console.log(
        this.username,
        this.gender,
        this.interests,
        this.occupation,
        this.intro
      )
    }
  }
});
app.mount("#app");
