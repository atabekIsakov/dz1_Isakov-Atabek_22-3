import React from 'react'
import Button from '../button/Button'
import Text from '../text/Text'
import s from './content.module.css'

function Content({content}) {
  return (
    <div className={s.content}>
        <div className='container'>
            <Text text={content} />
            <Button clickText={'edef'} />
        </div>
    </div>
  )
}

export default Content