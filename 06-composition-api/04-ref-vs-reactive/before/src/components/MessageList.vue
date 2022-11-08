<template>
  <div>
    <ul>
      <li v-for="msg in messages" :key="msg.id">{{ msg.content }}</li>
    </ul>
    <button @click="messages = []">删除全部</button>
  </div>

  <h2>{{ options.title }}</h2>
  <button @click="options.title = '修改后的标题'">修改标题</button>
  <h2>姓名：{{ options.user.name }}</h2>
  <p>是否活跃:{{ options.user.active ? '是' : '否' }}</p>
  <button @click="options.user.name = '王五'">修改用户</button>
</template>
<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    const messages = ref([
      { id: 1, content: "这是一条消息提醒1" },
      { id: 2, content: "这是一条消息提醒2" },
      { id: 3, content: "这是一条消息提醒3" },
      { id: 4, content: "这是一条消息提醒4" },
    ]);

    const options = reactive({
      title: '标题',
      user: {
        name: '张三',
        active: true
      }
    })

    console.log(messages.value);

    return { messages, options };
  },
};
</script>
<style scoped>
div {
  display: grid;
  place-items: center;
}

h2 {
  color: hsl(280deg, 50%, 70%);
}

p {
  margin: 12px 0 24px 0;
}

ul {
  list-style: none;
  display: grid;
  gap: 24px;
}

li {
  display: flex;
  align-items: center;
  gap: 12px;
}

li::before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  background-color: hsl(280deg, 100%, 70%);
  border-radius: 100%;
}
</style>
