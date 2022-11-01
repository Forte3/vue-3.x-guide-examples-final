// 示例：使用 computed 处理稍复杂的业务逻辑
const app = Vue.createApp({
   data() {
      return {
         showAnswer: false,
      };
   },
   computed: {
      label() {
         return this.showAnswer ? 'Hide Answer' : 'Show Answer'
      }
   }
});
app.mount("#app");
