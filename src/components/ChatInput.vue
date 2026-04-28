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
  <div class="chat-input-area">
    <input
      v-model="inputText"
      @keyup.enter="sendMessage"
      placeholder="输入您的问题..."
      class="input-box"
    />
    <button @click="sendMessage" class="send-btn">发送</button>
  </div>
</template>

<style scoped>
.chat-input-area {
  display: flex;
  padding: 15px;
  border-top: 1px solid #e0e0e0;
  background: white;
}

.input-box {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 14px;
  outline: none;
}

.input-box:focus {
  border-color: #1976d2;
}

.send-btn {
  margin-left: 10px;
  padding: 10px 20px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
}

.send-btn:hover {
  background-color: #1565c0;
}
</style>