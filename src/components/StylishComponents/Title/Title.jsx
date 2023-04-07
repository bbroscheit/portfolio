import React from 'react'
import style from './Title.module.css'

function Title({title}) {
  return (
    <div>
        <h1 className={style.title}>{title}</h1>
    </div>
  )
}

export default Title
