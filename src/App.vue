<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/">首页</router-link>
      <router-link to="/rag">RAG 问答</router-link>
      <router-link to="/text2sql">Text2SQL 问数</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  gap: 20px;
  padding: 15px 30px;
  background-color: #1976d2;
}
.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.navbar a:hover {
  text-decoration: underline;
}
</style>