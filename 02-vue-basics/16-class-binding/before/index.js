// 示例：根据条件添加或删除 class 样式
const app = Vue.createApp({
  data() {
    return {
      textBlue: 'text-blue',
      danger: 'danger',
      isHiddent: false
    };
  },
});
app.mount("#app");
