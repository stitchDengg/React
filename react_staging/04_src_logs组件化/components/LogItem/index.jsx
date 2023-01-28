import './index.css';
const LogItem = () => {
  return (
    <div>
      {/* 日志项 */}
      <div className='item' >
        {/* 日期的容器 */}
        <div className='date' >
          {/* 月份div */}
          <div className='month'> 四月</div>
          {/* 日 */}
          <div className='day'> 19</div>
        </div>
        {/* 日志内容容器 */}
        <div className='content'>
          <h2 className='desc'>学习react</h2>
          <div className='time'>40分钟</div>
        </div>
      </div >
    </div>
  )
}

export default LogItem;