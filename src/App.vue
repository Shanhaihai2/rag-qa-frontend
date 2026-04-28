<script setup>
import { ref } from 'vue'
import ChatMessage from './components/ChatMessage.vue'
import ChatInput from './components/ChatInput.vue'
import { askRag } from './api.js'   // 导入 RAG 接口

const messages = ref([
  { role: 'ai', content: '你好！我是知识库问答助手，请问有什么可以帮你的？' }
])

const isLoading = ref(false)        // 加载状态

async function handleSend(text) {
  // 1. 添加用户消息
  messages.value.push({ role: 'user', content: text })

  // 2. 显示加载提示
  isLoading.value = true
  messages.value.push({ role: 'ai', content: '正在思考中...', loading: true })

  try {
    // 3. 调用真实 RAG 接口
    const response = await askRag(text)
    const answer = response.data.answer || '没有收到有效回答'

    // 4. 移除加载提示，添加真实回答
    messages.value = messages.value.filter(msg => !msg.loading)
    messages.value.push({ role: 'ai', content: answer })
  } catch (error) {
    // 5. 错误处理
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: #fafafa;
}
</style>