import React from 'react'
import './index.css'


export default function Card(props) {
  /* 
      props.children: 表示组件的标签体内容
  */
  return (
    <div className={`card ${props.className}`}>{props.children}</div>
  )
}
