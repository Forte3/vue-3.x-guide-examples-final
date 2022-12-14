// 示例：计算属性和方法的区别
const app = Vue.createApp({
   data() {
      return {
         blogPosts: [
            "Vue 3.0x 入门实战",
            "Vue 3.x 完全指南",
            "React 18 新特性介绍",
            "JavaScript 基础语法概览",
         ],
      };
   },
   computed: {
      vuePosts() {
         return this.blogPosts.filter((blog) => blog.includes('Vue'))
      }
   }
});
app.mount("#app");
