import React from 'react'
import s from './header.module.css'

function Header({menuList}) {
  return (
    <div className={s.header}>
        <div className='container'>
          <ul>
            {menuList.map((item, key) => <li key={key}>{item}</li>)}
          </ul>
        </div>
    </div>
  )
}

export default Header