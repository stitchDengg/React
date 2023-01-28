import "./index.css"
import LogItem from "../LogItem"
import Card from '../UI/Card';
const Logs = () => {
  // 定义数据
  const data = [
    {
      mounth: '四月',
      day: '19',
      desc: '学习react',
      time: '40分钟',
      id:1,
    },
    {
      mounth: '四月',
      day: '20',
      desc: '学习vue',
      time: '60分钟',
      id:2
    },
    {
      mounth: '四月',
      day: '21',
      desc: '学习angular',
      time: '80分钟',
      id:3
    },
    {
      mounth: '四月',
      day: '22',
      desc: '学习node',
      time: '100分钟',
      id:4
    },
  ]
  return (
    <Card className='logs'>
      {
        data.map(item => <LogItem key={item.id} {...item}/>)
      }
    </Card>
  )
}

export default Logs;