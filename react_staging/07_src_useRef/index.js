import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


//获取根元素
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 包裹这个能检查APP组件的错误
    <App/>
);

