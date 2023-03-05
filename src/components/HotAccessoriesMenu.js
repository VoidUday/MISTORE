import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HotAccessoriesMenu.css'

const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
        <Link className='HotAccessoriesLink' typeof='/music'>Music Store</Link>
        <Link className='HotAccessoriesLink' typeof='/smartDevices'>Smart Device</Link>
        <Link className='HotAccessoriesLink' typeof='/home'>Home</Link>
        <Link className='HotAccessoriesLink' typeof='/lifestyle'>LifeStyle</Link>
        <Link className='HotAccessoriesLink' typeof='/mobileAccessories'>Mobile Accessories</Link>
      
    </div>
  )
}

export default HotAccessoriesMenu
