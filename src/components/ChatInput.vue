<script setup>
import { ref } from 'vue'
import axios from 'axios'

const emit = defineEmits(['send'])
const inputText = ref('')

function sendMessage() {
  const text = inputText.value.trim()
  if (text) {
    emit('send', text)
    inputText.value = ''
  }
}

const selectedFile = ref(null)

function handleFileChange(event) {
  selectedFile.value = event.target.files[0]
  if (selectedFile.value) {
    uploadFile()
  }
}

async function uploadFile() {
  if (!selectedFile.value) return
  
  const formData = new FormData()
  formData.append('file', selectedFile.value)

  try {
    const response = await axios.post('http://127.0.0.1:8000/upload-pdf', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    // 可以在这里给用户一个成功提示
    console.log(response.data.message)
  } catch (error) {
    console.error('上传失败:', error)
    // 可以在这里给用户一个错误提示
  }
}
</script>

<template>
  
  <div class="input-wrapper">
    <div class="input-container">
      <input type="file" accept=".pdf" @change="handleFileChange" style="display: none;" ref="fileInput" />
    <button @click="$refs.fileInput.click()" class="upload-btn">📎 上传PDF</button>
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