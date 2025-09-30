# VibeCodingCleaner

一個輕量級、高效率的程式碼清理解決方案。以簡單為設計理念，幫助開發者撰寫更好的程式碼，無需複雜框架的負擔。

## 主要特色

- 輕量且快速
- 無需建置步驟
- 易於整合
- 乾淨且易於維護的程式碼結構
- 響應式設計
- 使用 Vue 3 打造反應式介面

## 開始使用

### 環境需求

- Node.js (v14 或更新版本)
- npm (隨 Node.js 一起安裝)

### 安裝步驟

1. 複製專案：
   ```bash
   git clone [https://github.com/chiisen/VibeCodingCleaner.git](https://github.com/chiisen/VibeCodingCleaner.git)
   cd VibeCodingCleaner
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### 執行應用程式

#### 開發模式

```bash
npm run dev
```
T這將啟動開發伺服器並支援熱重載，網址為 `http://localhost:3000`

#### 正式環境模式

```bash
npm start
```

## 專案結構

```
VibeCodingCleaner/
├── public/                  # 靜態檔案
│   ├── index.html           # 主要 HTML 檔案
│   ├── css/
│   │   └── styles.css       # 主要樣式
│   └── js/
│       └── app.js           # Vue 應用程式
├── server.js               # Express 伺服器
└── package.json            # 專案設定檔
```

## 使用技術

- [Vue 3](https://v3.vuejs.org/) - 漸進式 JavaScript 框架
- [Express](https://expressjs.com/) - Node.js 的網頁應用程式框架
- 原生 CSS - 樣式設計（不使用 CSS 框架）

## 授權條款

本專案採用 MIT 授權條款 - 詳見 [LICENSE](LICENSE) 檔案。
