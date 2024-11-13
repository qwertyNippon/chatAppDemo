import React from 'react'
import './RightSideBar.css'
import assets from '../../assets/assets'

const RightSideBar = () => {
  return (
    <div className='rs'>
      <div className="rs-profile">
        <img src={assets.profile_img} alt="" />
        <h3>Orlando Henry <img src={assets.green_dot} className='dot' alt="" /></h3>
        <p>Hello</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
        </div>
      </div>
      <button>Log Out</button>
    </div>
  )
}

export default RightSideBar
