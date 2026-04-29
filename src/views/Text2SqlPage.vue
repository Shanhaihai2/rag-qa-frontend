<script setup>
import { ref } from 'vue'
import ChatMessage from '../components/ChatMessage.vue'
import ChatInput from '../components/ChatInput.vue'
import { askText2SQL } from '../api.js'
import { useChatStore } from '../stores/chatStore'

const messages = ref([
  { role: 'ai', content: '你好！我是智能问数助手，可以帮你查询数据库中的产品、订单、客户信息。' }
])
const isLoading = ref(false)
const chatStore = useChatStore()

async function handleSend(text) {
  messages.value.push({ role: 'user', content: text ,time: new Date().toLocaleTimeString()})
  isLoading.value = true
  messages.value.push({ role: 'ai', content: '正在查询数据库...', loading: true })

  try {
    const response = await askText2SQL(text)
    const answer = response.data.answer || '没有收到有效回答'
    // 成功拿到 answer 后追加：
    chatStore.addRecord('Text2SQL', text, answer)
    messages.value = messages.value.filter(msg => !msg.loading)
    messages.value.push({ role: 'ai', content: answer ,time: new Date().toLocaleTimeString()})
  } catch (error) {
    messages.value = messages.value.filter(msg => !msg.loading)
    messages.value.push({
      role: 'ai',
      content: `请求失败：${error.message}。请确保后端服务已启动。`
    })
  } finally {
    isLoading.value = false
  }
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
}
.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: #fafafa;
}
</style>