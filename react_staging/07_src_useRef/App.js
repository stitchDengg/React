import React, { useState,useRef } from 'react';
import './App.css';

// 创建外壳组件
const App = () => {


  /* 
    从react中获取dom对象步骤：
      1.创建一个存储dom对象的容器
        使用useRef钩子函数
        钩子函数注意事项：
          1.钩子函数必须在函数组件的最外层
          2.钩子函数不能出现在条件语句中
          3.钩子函数不能出现在循环语句中
          4.钩子函数不能出现在嵌套函数中
      2.将容器设置为想要获取的dom元素的ref属性
  */
  //1.创建容器
  const h1Ref = useRef();
  const clickHandler = () => {
    console.log(h1Ref.current);
  }

  return (
    <div className='App'>
      {/* 2.设置容器 */}
      <h1 ref={h1Ref}>标题</h1>
      <button onClick={clickHandler}>1</button>
    </div>
  );
}

export default App;
