import React from 'react'

export default function InputMessage() {
  return (
    <div className='input-container'>
        <input placeholder='Type a message…'></input>
        <div className="send-button">
            <i class="fa-solid fa-angle-right"></i>
        </div>
    </div>
  )
}
