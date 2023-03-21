import React from 'react'
import s from './text.module.css'

function Text({text}) {
  return (
    <p className={s.text}>{text}</p>
  )
}

export default Text