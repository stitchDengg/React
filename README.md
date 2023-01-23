# react学习

## 虚拟dom的的两种创建方式

### 1.jsx形式创建

```javascript
 <script type="text/babel">
    //1.创建虚拟dom
    const VDOM = <h1 id="title">hello react</h1>

    // 2.渲染虚拟dom到页面
    ReactDOM.render(VDOM, document.getElementById('app'));
  </script>
```

### 2.使用js创建

```javascript
 <script type="text/javascript">
    //1.创建虚拟dom
    const VDOM = React.createElement('h1', {id: 'title'}, 'hello react');
    // 2.渲染虚拟dom到页面
    ReactDOM.render(VDOM, document.getElementById('app'));
  </script>
```

## jsx语法规则

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>01_hello_react</title>
  <style>
    .title{
      background-color: orange;
      width: 200px;
    }
  </style>
</head>
<body>
  <!-- 准备好一个容器 -->
  <div id="app"></div>

  <script type="text/babel">
    const myId = 'denghAo';
    const myData = 'Hello React'
    const VDOM  = (
      <div>
        <h2 id={myId.toLowerCase()} className="title">
          <span style={{color:'white',fontSize:'20px'}}>{myData.toLowerCase()}</span>
        </h2>
        <h2 id={myId.toUpperCase()} className="title">
          <span style={{color:'white',fontSize:'20px'}}>{myData.toLowerCase()}</span>
        </h2>
        <input type="text"/>
      </div>
      
    )
    // 渲染虚拟dom到页面
    ReactDOM.render(VDOM,document.getElementById('app'));
    
    /* 
      jsx语法规则：
        1.定义虚拟dom时，不要写引号
        2.标签中混入js表达式时要用{}
        3.样式类名指定不要用class，要用className
        4.内联样式要用style={{key:value}}的形式来写
        5.只有一个根标签
        6.标签必须闭合
        7.标签首字母
          （1）若小写字母开头，则将标签转化为同名元素，若html重无该标签的同名元素，则报错
          （2）若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错。
    */
  </script>
</body>
</html>
```

## react中组件的定义方式

### 函数式组件

```react&#x20;jsx
  //1.创建组件
    function MyComponent(){
      console.log(this);
      return (
        <h2>我是函数定义的组件，适用于简单组件的定义</h2>
      )
    }
    //2.挂载组件到容器上
    ReactDOM.render(<MyComponent/>,document.getElementById('app'));

    /* 
      执行了 ReactDOM.render(<MyComponent/>,document.getElementById('app'));之后，发生了什么
      1.React解析组件标签，找到MyComponent组件
      2.发现组件是函数定义的，随后调用函数，将返回的虚拟dom转化为真实dom
    */

```

### 类式组件

```react&#x20;jsx
 //1.创建类式组件
    class MyComponent extends React.Component{
      render(){
        //render放在那里？ -类的原型上，供实例使用
        //render中的this是谁，MyComponent的实例对象 == MyComponent组件实例对象
        console.log(this)
        return (
          <h2>我是用类定义的组件（适用于复杂组件）</h2>
        )
      }
    }

    //2.挂载组件到容器上
    ReactDOM.render(<MyComponent/>,document.getElementById('app'));
    /* 
      执行了 ReactDOM.render(<MyComponent/>,document.getElementById('app'));之后，发生了什么
      1.React解析组件标签，找到MyComponent组件
      2.发现组件是类定义的，随后new出该类的实例，并通过该实例调用到原型上的render方法
      3.将render返回的虚拟dom转化为真实dom，随后呈现在页面上
    */
```

## 组件实例的三大属性

### 1.state

这是完整写出来的方式：

```react&#x20;jsx
<body>
  <!-- 准备好一个容器 -->
  <div id="app"></div>
  
  <script type="text/babel">
    //1.创建虚拟dom
    class Weather extends React.Component{
      // 构造器调用几次 -----  一次
      constructor(props){
        super(props);
        this.state = {
          isHot:true,
          wind:'微风',
        };
        // 需要给类中的方法指定this
        //bind方法做了两件事，一件创建了changeWeather这个方法，二是改变了this指向
        this.changeWeather = this.changeWeather.bind(this);//这个方法挂在实例上
      }
      //这个方法挂在原型上
      changeWeather(){
        //changeWeather放在哪儿 --weather的原型对象上，供实例使用
        // 由于changeWeather式作为onclick的回调，所以不是通过实例调用的，而是直接调用
        //类中的方法默认开启了严格模式，所以changeWeather中的this有问题
        console.log(this.state.isHot);
        // ！！！！状态不可直接更改
        //this.state.isHot = !this.state.isHot;

        //  ！正确写法,状态必须通过setState进行更新，且是合并不是替换
        const {isHot} = this.state;
        this.setState({
          isHot:!isHot,
        });
      }
      // render调用几次 1+n 次 1是初始化的那一次，n是状态更新的次数
      render(){
        const {isHot,wind} = this.state;
        return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'},{wind}</h1>
      }
      
    }

  
    // 2.渲染虚拟dom到页面
    ReactDOM.render(<Weather/>, document.getElementById('app'));
  </script>
```

state的简写方式:

```react&#x20;jsx
<body>
  <!-- 准备好一个容器 -->
  <div id="app"></div>

  <!-- 引入核心库 -->
  <script src="../js/react.development.js"></script>
  <!-- 引入react操纵dom库 -->
  <script src="../js/react-dom.development.js"></script>
  <!-- 引入babel 将jsx转化为js-->
  <script src="../js/babel.min.js"></script>

  <script type="text/babel">
    class Weather extends React.Component{
      //初始化状态
      state = {
        isHot:true,
        wind:'微风',
      }

      //自定义方法
      //这样写就放在实例上而不是对象原型上
      changeWeather = ()=> {
        const {isHot} = this.state;
        this.setState({
          isHot:!isHot,
        });
      }
      render(){
        const {isHot,wind} = this.state;
        return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'},{wind}</h1>
      }
    }

  
    // 2.渲染虚拟dom到页面
    ReactDOM.render(<Weather/>, document.getElementById('app'));
  </script>
 </body>
```
