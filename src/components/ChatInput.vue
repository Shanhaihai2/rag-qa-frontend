<script setup>
import { ref } from 'vue'

const emit = defineEmits(['send'])
const inputText = ref('')

function sendMessage() {
  const text = inputText.value.trim()
  if (text) {
    emit('send', text)
    inputText.value = ''
  }
}
</script>

<template>
  <div class="input-wrapper">
    <div class="input-container">
      <input
        v-model="inputText"
        @keyup.enter="sendMessage"
        placeholder="输入您的问题，按 Enter 发送..."
        class="chat-input"
      />
      <button
        @click="sendMessage"
        :disabled="!inputText.trim()"
        class="send-button"
      >
        <span class="send-icon">➤</span>
      </button>
    </div>
    <div class="input-hint">
      支持自然语言提问，如"产品表里有多少种产品？"
    </div>
  </div>
</template>

<style scoped>
.input-wrapper {
  padding: 16px 20px;
  background: white;
  border-top: 1px solid #e8eaf0;
}

.input-container {
  display: flex;
  gap: 10px;
  align-items: center;
  background: #f5f6f8;
  border-radius: 24px;
  padding: 6px 6px 6px 20px;
  border: 2px solid transparent;
  transition: border-color 0.3s;
}

.input-container:focus-within {
  border-color: #667eea;
  background: white;
}

.chat-input {
  flex: 1;
  border: none;
  background: transparent;
  padding: 10px 0;
  font-size: 14px;
  outline: none;
}

.send-button {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, opacity 0.2s;
  flex-shrink: 0;
}

.send-button:hover:not(:disabled) {
  transform: scale(1.05);
}

.send-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.send-icon {
  font-size: 18px;
}

.input-hint {
  text-align: center;
  font-size: 11px;
  color: #bbb;
  margin-top: 8px;
}
</style>