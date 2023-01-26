// 这是es6两种暴露模式，分别是默认暴露和命名暴露
import React,{Component} from 'react';
import Hello from './components/Hello/hello.jsx';
import Welcome  from './components/Welcome';
// 创建外壳组件
export default class App extends Component{
  render(){
    return (
      <div>
        <Hello test="test"></Hello>
        <Welcome></Welcome>
      </div>
    )
  }
}

