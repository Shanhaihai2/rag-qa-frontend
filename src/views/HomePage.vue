<template>
  <div class="home">
    <div class="hero">
      <h1>🤖 智能知识库系统</h1>
      <p class="subtitle">基于 RAG + Text2SQL，让数据会说话</p>
    </div>
    <div class="features">
      <router-link to="/rag" class="feature-card">
        <div class="feature-icon">📄</div>
        <h3>RAG 知识库问答</h3>
        <p>上传 PDF 文档，基于文档内容智能问答</p>
      </router-link>
      <router-link to="/text2sql" class="feature-card">
        <div class="feature-icon">📊</div>
        <h3>Text2SQL 智能问数</h3>
        <p>自然语言查询数据库，自动生成 SQL 并分析</p>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 20px;
}

.hero {
  text-align: center;
  margin-bottom: 60px;
}

.hero h1 {
  font-size: 36px;
  color: #333;
  margin-bottom: 12px;
}

.subtitle {
  font-size: 18px;
  color: #888;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.feature-card {
  background: white;
  border-radius: 16px;
  padding: 40px 30px;
  text-align: center;
  text-decoration: none;
  color: #333;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.feature-card h3 {
  margin-bottom: 10px;
  color: #667eea;
}

.feature-card p {
  font-size: 14px;
  color: #999;
  line-height: 1.6;
}
</style>