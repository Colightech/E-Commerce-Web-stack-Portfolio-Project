import React from 'react'
import './NewsLetter.css'


const NewsLetter = () => {
  return (
    <div className='news-letter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our News Letter and stay updated</p>
        <div className="news-letter-input">
            <input type="text" placeholder='Enter your email...'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
