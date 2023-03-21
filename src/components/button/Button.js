import React from 'react'
import s from './button.module.css'

function Button({clickText}) {
  return (
    <button className={s.btn}>
        {clickText}
    </button>
  )
}

export default Button