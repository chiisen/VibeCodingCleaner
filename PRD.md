如果不想用框架，只想用靜態 + 原生 Vue 來做網站，採用以下技術和做法：

- 將 Vue 透過 CDN 引入到純 HTML 靜態頁面中，用 Vue 的原生語法和組件（單文件組件除外，因為不編譯）直接組織前端互動。這樣整個網站就是純靜態的 HTML + CSS + JS 檔案，沒有打包過程。

- 用 Node.js 搭配 Express 或類似輕量伺服器，設定靜態檔案服務（如 `express.static()` 指定資料夾），將 HTML、CSS、JavaScript（包括 Vue CDN 引入的代碼）當靜態資源提供出去。

- 所有的 Vue 部分是前端純執行的動態效果，沒有預先渲染就是純靜態網站加上客戶端 Vue 動態渲染。

- 開發時可直接編輯 HTML 中的 Vue 代碼，部署時只要把靜態檔案放到靜態伺服器上即可。

這種方式適合簡單互動需求且不想引入複雜建構工具和框架，保持純靜態又能用 Vue 原生特性做互動。

簡單範例流程：

1. 新建一個資料夾，內含 `index.html`，內容頭部直接用 `<script src="https://unpkg.com/vue@3"></script>` 引入 Vue。
2. `index.html` 裡用 Vue 3 的原生語法寫前端邏輯。
3. 用 Node.js + Express 做靜態檔案伺服器：
   ```js
   const express = require('express');
   const app = express();
   app.use(express.static('public'));
   app.listen(3000, () => console.log('Server running on http://localhost:3000'));
   ```
4. 把 `index.html` 放到 `public` 資料夾，啟動伺服器後即可以靜態網站方式訪問。

整個過程沒有使用 Vue 框架中的 CLI 或編譯步驟，只靠原生 Vue + 靜態服務，是最簡單且純粹的靜態 + Vue 結合實踐思路。

5. 依據上面的技術，製作一個說明 Vibe Coding Cleaner 是甚麼的網站。

6. 一律用中文說明。

