import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AItest from './AItest'; // 直接載入 AItest
import reportWebVitals from './reportWebVitals';

// 取得你 HTML 裡的 <div id="react-root">
const el = document.getElementById('react-root');

if (el) {
  // React 18 寫法
  const root = ReactDOM.createRoot(el);
  root.render(
    <React.StrictMode>
      <AItest />
    </React.StrictMode>
  );
} else {
  console.error('❌ 找不到 #react-root，請確認 index.html 裡有 <div id="react-root"></div>');
}

// 可有可無：測量效能
reportWebVitals();
