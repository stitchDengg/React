import React from 'react';
import './App.css';
import Logs from './components/Logs';
import LogsForm from './components/LogsForm';
// 创建外壳组件
const App = () => {
  return (
    <div className='app'>
      <LogsForm></LogsForm>
      <Logs/>
    </div>
  );
}

export default App;
