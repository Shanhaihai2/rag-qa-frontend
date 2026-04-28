import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useChatStore = defineStore('chat', () => {
  const history = ref([]) // 存储所有问答记录

  function addRecord(page, question, answer) {
    history.value.push({
      id: Date.now(),
      page,
      question,
      answer,
      time: new Date().toLocaleString()
    })
  }

  return { history, addRecord }
})