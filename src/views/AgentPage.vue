<template>
  <div class="chat-container">
    <div class="chat-messages">
      <ChatMessage v-for="(msg, i) in messages" :key="i" :message="msg" />
    </div>
    <ChatInput @send="handleSend" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChatMessage from '../components/ChatMessage.vue'
import ChatInput from '../components/ChatInput.vue'
import apiClient from '../api.js'

const messages = ref([{ role: 'ai', content: '你好，我是 Agent 助手，可以自动调用知识库或数据库回答你的问题。' }])

async function handleSend(text) {
  messages.value.push({ role: 'user', content: text })
  messages.value.push({ role: 'ai', content: '正在思考...', loading: true })
  try {
    const res = await apiClient.post('/agent', { question: text })
    const answer = res.data?.data?.answer || '抱歉，我没能获取到有效回答。'
    messages.value = messages.value.filter(m => !m.loading)
    messages.value.push({ role: 'ai', content: answer })
  } catch (e) {
    messages.value = messages.value.filter(m => !m.loading)
    messages.value.push({ role: 'ai', content: `请求失败：${e.message}` })
  }
}
</script>

<style scoped>
.chat-container { max-width: 700px; margin: 0 auto; height: 100vh; display: flex; flex-direction: column; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; }
.chat-messages { flex: 1; overflow-y: auto; padding: 20px; background-color: #fafafa; }
</style>