import React from 'react'

export default function Mydate(item) {
  return (
    <div className='date' >
    {/* 月份div */}
    <div className='month'> {item.mounth}</div>
    {/* 日 */}
    <div className='day'> {item.day}</div>
  </div>
  )
}
