import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
            let's build somthing amazing with gpt-3 OpenAI
        </h1>
        <p>yet bed any for travelling assistance indulgence unpleasing , not thoughts all exercise blessing. indulgence way evrything joy alteration boisterous the attachement. party we years to order allow asked of.</p>

        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your email address' />
          <button type='button'>get started</button>
        </div>
        <div className='gpt3__header-content__people'>
            <img src={people} alt="people png" />
            <p>1.600 people requested</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header
