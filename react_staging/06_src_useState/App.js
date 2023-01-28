import React, { useState } from 'react';
import './App.css';

// 创建外壳组件
const App = () => {
  /* 
  当点击+按钮时，数字加1
  当点击-按钮时，数字减1
  */

  /* 
      使用钩子函数useStatek来创建state
      import React, { useState } from 'react';  
      它需要一个值作为参数，这个值就是state的初始值
      数组第一个元素，就是初始值
      数组第二个元素，就是修改state的函数
        -这个函数用来修改state,调用其修改state后会出发组件的重新渲染
          并且使用函数中的值作为新的state
  */
  const [counter,setCounter] =  useState(1);

  
  const addHandler = () => {
    //点击以后数字加1
    console.log('add');
    setCounter(preState => preState + 1);
  }

  const reduceHandler = () => {
    //点击以后数字加1
    console.log('reduce');
    if(counter > 0){
      setCounter(preState => preState - 1);
    }else{
      setCounter(0);
    }
    
  }

  return (
    <div className='App'>
      <h1>{counter}</h1>
      <button onClick={addHandler}>+</button>
      <button onClick={reduceHandler}>-</button>
    </div>
  );
}

export default App;
