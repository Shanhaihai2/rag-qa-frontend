import axios from 'axios'

// 后端地址
const BASE_URL = 'http://127.0.0.1:8000'

// 创建 Axios 实例（带上超时配置）
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 60000  // RAG 问答可能耗时较长，设 60 秒
})

/**
 * RAG 知识库问答
 */
export function askRag(question) {
  return apiClient.post('/rag/qa', { question })
}

/**
 * Text2SQL 智能问数
 */
export function askText2SQL(question) {
  return apiClient.post('/text2sql', { question })
}