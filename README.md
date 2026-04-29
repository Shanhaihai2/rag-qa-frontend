# 智能知识库问答系统 - 前端

基于 Vue 3 + Vite 的现代化聊天界面，支持 RAG 知识库问答和 Text2SQL 智能问数。

## ✨ 核心功能
- 💬 实时聊天界面，区分用户与 AI 消息
- 📄 RAG 知识库问答页面
- 📊 Text2SQL 智能问数页面
- 🔀 Vue Router 多页面切换
- 🎨 渐变色设计 + 页面过渡动画
- 📦 Pinia 全局状态管理

## 🛠️ 技术栈
| 层级 | 技术 |
| :--- | :--- |
| 前端框架 | Vue 3 (Composition API) |
| 构建工具 | Vite |
| HTTP 请求 | Axios |
| 路由 | Vue Router |
| 状态管理 | Pinia |
| 跨端方案 | UniApp (rag-qa-mobile) |

## 🚀 快速开始
1. 安装依赖：`npm install`
2. 启动开发服务器：`npm run dev`
3. 打开浏览器访问 `http://localhost:5173`
4. 确保后端服务在 `http://127.0.0.1:8000` 运行

## 📁 项目结构
rag-qa-frontend/
├── src/
│ ├── api.js # Axios 封装
│ ├── router.js # Vue Router 配置
│ ├── App.vue # 主应用（导航栏 + 路由视图）
│ ├── views/
│ │ ├── HomePage.vue # 首页
│ │ ├── RagPage.vue # RAG 问答页
│ │ └── Text2SqlPage.vue # Text2SQL 问数页
│ └── components/
│ ├── ChatMessage.vue # 消息气泡组件
│ └── ChatInput.vue # 输入框组件
└── index.html