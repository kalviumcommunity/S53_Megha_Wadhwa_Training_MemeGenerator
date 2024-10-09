import React from 'react'
import Logo from './images/MemeLogo.png'
const Header = () => {
  return (
    <header>
      {/* <img src={Logo} alt="Logo" className='logo' /> */}
      <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="Logo" className='logo' />
      <p>Meme Generator</p>
    </header>
  )
}

export default Header