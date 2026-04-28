<script setup>
defineProps({
  message: {
    type: Object,
    required: true
    // 格式：{ role: 'user' | 'ai', content: '...' }
  }
})
</script>

<template>
  <div :class="['message-bubble', message.role]">
    <div class="role-label">{{ message.role === 'user' ? '你' : 'AI' }}</div>
    <div class="content">{{ message.content }}</div>
  </div>
</template>

<style scoped>
.message-bubble {
  margin: 10px 0;
  padding: 10px 15px;
  border-radius: 12px;
  max-width: 80%;
}

.message-bubble.user {
  background-color: #e3f2fd;
  margin-left: auto;
  text-align: right;
}

.message-bubble.ai {
  background-color: #f5f5f5;
  margin-right: auto;
}

.role-label {
  font-weight: bold;
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
}

.content {
  font-size: 14px;
  line-height: 1.6;
  white-space: pre-wrap;
}
</style>