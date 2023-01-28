// 这是es6两种暴露模式，分别是默认暴露和命名暴露
import React, { Component } from 'react';
import './App.css';
// 创建外壳组件
export default function App() {
  return (
    <div className='logs'>
      {/* 日志项 */}
      <div className='item'>
        {/* 日期的容器 */}
        <div className='date'>
          {/* 月份div */}
          <div className='month'>四月</div>
          {/* 日 */}
          <div className='day'>19</div>
        </div>

        {/* 日志内容容器 */}
        <div className='content'>
          <h2 className='desc'>学习react</h2>
          <div className='time'>40分钟</div>
        </div>
      </div>

      {/* 日志项 */}
      <div className='item'>
        {/* 日期的容器 */}
        <div className='date'>
          {/* 月份div */}
          <div className='month'>四月</div>
          {/* 日 */}
          <div className='day'>19</div>
        </div>

        {/* 日志内容容器 */}
        <div className='content'>
          <h2 className='desc'>学习react</h2>
          <div className='time'>40分钟</div>
        </div>
      </div>

      {/* 日志项 */}
      <div className='item'>
        {/* 日期的容器 */}
        <div className='date'>
          {/* 月份div */}
          <div className='month'>四月</div>
          {/* 日 */}
          <div className='day'>19</div>
        </div>

        {/* 日志内容容器 */}
        <div className='content'>
          <h2 className='desc'>学习react</h2>
          <div className='time'>40分钟</div>
        </div>
      </div>
    </div>
  )
}


