import React from 'react'
import favicon_note from '../img/favicon_note.ico'

const Header = () => {
  return (
    <div className='header'>
       <img src={favicon_note} alt="logo" width={70} height={70} />
       <h1>Hey , Keep Your Note Here !</h1>
    </div>
  )
}

export default Header