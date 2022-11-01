// 示例：展示列表数据
const app = Vue.createApp({
   data() {
      return {
         //  todos: ["把项目做完", "去超市购物", "看10分钟的书"],
         todos: [
            {
               content: "把项目做完",
               isComplete: true
            },
            {
               content: "去超市购物",
               isComplete: false
            },
            {
               content: "看10分钟的书",
               isComplete: true
            },

         ]
      };
   },
});
app.mount("#app");
