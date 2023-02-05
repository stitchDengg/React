import React, { useState } from 'react'
import Card from '../UI/Card';
import './index.css'


export default function LogsForm() {
  /* 
    当表单项发生变化的时候，获取用户输入的内容
  */
  const [date,setDate] =  useState('');
  const [desc,setDesc] =  useState('');
  const [time,setTime] =  useState('');

  const formSubmitHandler = (e) => {
    // 阻止表单的默认提交行为
    e.preventDefault();
    console.log(date,desc,time);
  }

  const newLog = {
    date,
    desc,
    time
  }

  console.log(newLog)


  return (
    <Card className="logs-form">
      <form>
        <div className='form-item'>
          <label htmlFor="date">日期</label>
          <input value={date} onChange={e => {setDate(e.target.value)}} type="date" id='date'/>
        </div>

        <div className='form-item'>
          <label htmlFor="desc">内容</label>
          <input value={desc}  onChange={e => {setDesc(e.target.value)}} type="desc" id='desc'/>
        </div>

        <div className='form-item'>
          <label htmlFor="time">时长</label>
          <input value={time} onChange={e => {setTime(e.target.value)}} type="time" id='time'/>
        </div>

        <div className='form-btn'>
          <button onClick={formSubmitHandler}>添加</button>
        </div>
      </form>
    </Card>
  )
}
