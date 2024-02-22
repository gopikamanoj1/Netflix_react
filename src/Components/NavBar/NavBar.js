import React from 'react'
import './NavBar.css'
function NavBar() {

  return (
    <div className='navbar'>
     
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" />
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
        <p className='home'> <b>Home</b></p>
        <p  className='shows'>TV Shows</p>
        <p className='movie'>Movies</p>
        <p className='latest'>Latest</p>


{/* <img className='icon' src="https://static.vecteezy.com/system/resources/thumbnails/004/436/029/small/search-bar-interface-for-web-site-template-modern-search-bar-design-template-for-user-interface-vector.jpg" alt="" /> */}

    </div>
  )
}

export default NavBar
