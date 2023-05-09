import React from 'react'
import style from './Header.css'

function Header() {
  return (
    <div className='Headercontainer'>
        <h1 className='HeaderTitle'>
            Find your next meeting place
        </h1>
        <p className='HeaderSubtitle'>
            and help the owners pay their expenses
        </p>
        <button onClick={() => window.location.href = '/knowmore'} className='HeaderButton'>Know more...</button>
    </div>
  )
}

export default Header