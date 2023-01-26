// 样式的模块化
import hello from './hello.module.css'

export default function Hello() {
  return <div className={hello.title}>Hello React</div>;
}