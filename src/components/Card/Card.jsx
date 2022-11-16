import React from 'react'
import './Card.scss'
import cardLogo from '../../assets/card-logo.svg'

const Card = ({ cardName, cardNumber, cardMonth, cardYear, cardCvc }) => {
  return (
    <div className="cards__container">
      <div className="card__front">
        <img src={cardLogo} alt="card logo" />
        <p>{cardNumber || '0000 0000 0000 0000'}</p>
        <div className="card__bottom">
          <p>{cardName || 'Jane Appleseed'}</p>
          <p>
            {cardMonth || 'MM'}/{cardYear || 'YY'}
          </p>
        </div>
      </div>
      <div className="card__back">
        <p>{cardCvc || '000'}</p>
      </div>
    </div>
  )
}

export default Card
