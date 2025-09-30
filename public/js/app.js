const { createApp } = Vue;

createApp({
    data() {
        return {
            description: 'Vibe Coding Cleaner 是一個輕量級、高效率的程式碼清理解決方案。以簡單為設計理念，幫助開發者撰寫更好的程式碼，無需複雜框架的負擔。',
            features: [
                '輕量且快速',
                '無需建置步驟',
                '易於整合',
                '乾淨且易於維護的程式碼結構',
                '響應式設計',
                '使用 Vue 3 打造反應式介面'
            ]
        };
    }
}).mount('#app');