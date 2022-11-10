import React from 'react'
import './Card.scss'
import cardLogo from '../../assets/card-logo.svg'

const Card = () => {
  return (
    <div className="cards__container">
      <div className="card__front">
        <img src={cardLogo} alt="card logo" />
        <p>0000 0000 0000 0000</p>
        <div className="card__bottom">
          <p>Jane Appleseed</p>
          <p>00/00</p>
        </div>
      </div>
      <div className="card__back">
        <p>000</p>
      </div>
    </div>
  )
}

export default Card