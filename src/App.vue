<script setup>
import { ref } from 'vue'
import ChatMessage from './components/ChatMessage.vue'
import ChatInput from './components/ChatInput.vue'

// 消息列表
const messages = ref([
  { role: 'ai', content: '你好！我是知识库问答助手，请问有什么可以帮你的？' }
])

// 接收子组件发来的用户输入
function handleSend(text) {
  // 添加用户消息
  messages.value.push({ role: 'user', content: text })

  // 模拟 AI 回复（明天换成真实 API 调用）
  setTimeout(() => {
    messages.value.push({
      role: 'ai',
      content: `这是关于「${text}」的模拟回复。明天将接入真实 RAG 接口。`
    })
  }, 500)
}
</script>

<template>
  <div class="chat-container">
    <div class="chat-messages">
      <ChatMessage
        v-for="(msg, index) in messages"
        :key="index"
        :message="msg"
      />
    </div>
    <ChatInput @send="handleSend" />
  </div>
</template>

<style scoped>
.chat-container {
  max-width: 700px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: #fafafa;
}
</style>