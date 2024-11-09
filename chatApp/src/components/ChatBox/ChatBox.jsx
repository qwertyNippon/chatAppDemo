import React from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'

const ChatBox = () => {
  return (
    <div className='chat-box'>
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>Orlando Henry <img className='dot' src={assets.green_dot} alt="" /></p>
        <img src={assets.help_icon} className='help' alt="" />
      </div>


      <div className="chat-msg">
        <div className="s-msg">
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem quam soluta natus illo quis, iste porro fuga? Labore autem blanditiis ullam repellendus quaerat non maiores eius numquam, aliquam ratione.
          </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>TIME</p>
          </div>
        </div>
        <div className="r-msg">
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem quam soluta natus illo quis, iste porro fuga? Labore autem blanditiis ullam repellendus quaerat non maiores eius numquam, aliquam ratione.
          </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>TIME</p>
          </div>
        </div>
      </div>


      <div className="chat-input">
        <input type="text" placeholder='Send a Message' />
        <input type="file" id='image' accept='image/png, image/jpeg' hidden/>
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  )
}

export default ChatBox
