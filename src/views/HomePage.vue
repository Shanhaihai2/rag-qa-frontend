<template>
  <div class="page">
    <h1>🏠 欢迎使用智能知识库系统</h1>
    <p>选择一个功能开始使用：</p>
    <div class="card-list">
      <router-link to="/rag" class="card">📄 RAG 知识库问答</router-link>
      <router-link to="/text2sql" class="card">📊 Text2SQL 智能问数</router-link>
    </div>
  </div>
</template>

<style scoped>
.page { text-align: center; padding: 40px 20px; }
.card-list { display: flex; gap: 20px; justify-content: center; margin-top: 30px; }
.card {
  padding: 30px;
  border-radius: 12px;
  background: #f5f5f5;
  text-decoration: none;
  color: #333;
  font-size: 18px;
  transition: transform 0.2s;
}
.card:hover { transform: translateY(-4px); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
</style>