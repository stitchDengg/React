import Mydate from '../MyDate';
import Card from '../UI/Card';
import './index.css';
const LogItem = (item) => {
  return (
    <div>
      {/* 日志项 */}
      <Card className='item' >
        {/* 日期的容器 */}
        <Mydate {...item}/>
        {/* 日志内容容器 */}
        <div className='content'>
          {/* 
            如果将组件的中的数据全部写死，将会导致组件无法动态设置，不具有使用价值
            所以，我们需要将组件的数据，通过props传递给组件          
          */}
          <h2 className='desc'>{item.desc}</h2>
          <div className='time'>{item.time}</div>
        </div>
      </Card >
    </div>
  )
}

export default LogItem;