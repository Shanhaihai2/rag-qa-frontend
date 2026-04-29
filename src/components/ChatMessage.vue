<script setup>
import { computed } from 'vue'

const props = defineProps({
  message: {
    type: Object,
    required: true
  }
})

const isUser = computed(() => props.message.role === 'user')
const isSystem = computed(() => props.message.role === 'system')
</script>

<template>
  <div v-if="isSystem" class="system-message">
    {{ message.content }}
  </div>

  <div v-else :class="['message-wrapper', { 'user-wrapper': isUser, 'ai-wrapper': !isUser }]">
    <div class="avatar">
      {{ isUser ? '👤' : '🤖' }}
    </div>
    <div :class="['message-bubble', message.role]">
      <div class="bubble-content" v-if="!message.loading">
        {{ message.content }}
      </div>
      <div class="bubble-content loading" v-else>
        <span class="typing-dots">
          <span></span><span></span><span></span>
        </span>
        {{ message.content }}
      </div>
      <div class="message-time" v-if="message.time && !message.loading">
        {{ message.time }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.message-wrapper {
  display: flex;
  align-items: flex-start;
  margin: 16px 0;
  gap: 10px;
}

.user-wrapper {
  flex-direction: row-reverse;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #e8eaf0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.message-bubble {
  max-width: 70%;
  padding: 12px 16px;
  border-radius: 18px;
  line-height: 1.6;
  position: relative;
}

.message-bubble.user {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-bottom-right-radius: 4px;
}

.message-bubble.ai {
  background: white;
  color: #333;
  border-bottom-left-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.bubble-content {
  font-size: 14px;
  white-space: pre-wrap;
  word-break: break-word;
}

.message-time {
  font-size: 11px;
  margin-top: 6px;
  opacity: 0.7;
  text-align: right;
}

.system-message {
  text-align: center;
  margin: 12px 0;
  font-size: 12px;
  color: #999;
}

/* 打字动画 */
.typing-dots {
  display: inline-flex;
  gap: 4px;
  margin-right: 8px;
  vertical-align: middle;
}

.typing-dots span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #999;
  animation: typing 1.4s infinite;
}

.typing-dots span:nth-child(2) { animation-delay: 0.2s; }
.typing-dots span:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing {
  0%, 60%, 100% { opacity: 0.3; transform: scale(0.8); }
  30% { opacity: 1; transform: scale(1.2); }
}
</style>