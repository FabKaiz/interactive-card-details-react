import React, { useState } from 'react'
import './Form.scss'
import formGradientMobile from '../../assets/bg-main-mobile.png'
import Card from '../Card/Card'

const Form = () => {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cleanedCardNumber, setCleanedCardNumber] = useState('')
  const [cardMonth, setCardMonth] = useState('')
  const [cardYear, setCardYear] = useState('')
  const [cardCvc, setCardCvc] = useState('')

  const cleanTextCharacters = (text) => {
    return text.replace(/\D/g, '')
  }

  const handleCardNumber = (cardNumberValue) => {
    const cleanedCardNumber = cleanTextCharacters(cardNumberValue)

    // format card number with spaces every 4 digits for display only
    const formatedCardNumber = cleanedCardNumber.match(/.{1,4}/g)
    if (formatedCardNumber) setCleanedCardNumber(formatedCardNumber.join(' '))

    setCardNumber(cleanedCardNumber)
  }

  const handleCardMonth = (cardDateValue) => {
    let cleanedMonth = cleanTextCharacters(cardDateValue)

    if (cardDateValue.length > 1) {
      // check if the value is between 1 or 01 and 12
      if (!/^([1-9]|[0-1][0-2])$/.test(cleanedMonth)) cleanedMonth = ''
    }

    setCardMonth(cleanedMonth)
  }

  const handleCardYear = (cardDateValue) => {
    let cleanedYear = cleanTextCharacters(cardDateValue)

    // check card year to be between 2022 and 2032
    if (!/^([2]|[2][2-9]|3[0-2])$/.test(cleanedYear)) cleanedYear = ''

    setCardYear(cleanedYear)
  }

  const handleCardCvc = (cardCvcValue) => {
    const cleanedCvc = cleanTextCharacters(cardCvcValue)
    setCardCvc(cleanedCvc)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 👇️ validation
    if (cardName && cardNumber && cardMonth && cardYear && cardCvc !== '') {
      const cardNum = Number(cardNumber)
      // 👉️ submit form and show thank you message
    }
  }

  return (
    <div className="form__container">
      <div className="form__gradient">
        <img src={formGradientMobile} alt="color gradient" />
        <div className="cards">
          <Card
            cardName={cardName}
            cardNumber={cleanedCardNumber}
            cardYear={cardYear}
            cardMonth={cardMonth}
            cardCvc={cardCvc}
          />
        </div>
      </div>

      <div className="form__content">
        <form onSubmit={handleSubmit}>
          <label>
            CardHolder Name
            <input
              required
              type="text"
              value={cardName}
              name="cardName"
              placeholder="e.g. Jane Appleseed"
              onChange={(e) => setCardName(e.target.value)}
            />
          </label>
          <label>
            Card Number
            <input
              required
              value={cardNumber}
              name="cardNumber"
              maxLength={16}
              onChange={(e) => handleCardNumber(e.target.value)}
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
            />
          </label>

          <div className="form__content-bottom">
            <label className="form__date-label">
              Exp. Date (MM/YY)
              <div className="date__input-container">
                <input
                  required
                  type="text"
                  maxLength={2}
                  name="month"
                  value={cardMonth}
                  onChange={(e) => handleCardMonth(e.target.value)}
                  placeholder="MM"
                />
                <input
                  required
                  type="text"
                  value={cardYear}
                  onChange={(e) => handleCardYear(e.target.value)}
                  maxLength={2}
                  name="year"
                  placeholder="YY"
                />
              </div>
            </label>

            <label>
              CVC
              <input
                required
                className="cvc__input"
                type="text"
                maxLength={3}
                name="cardCvc"
                value={cardCvc}
                onChange={(e) => handleCardCvc(e.target.value)}
                placeholder="e.g. 123"
              />
            </label>
          </div>

          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  )
}

export default Form
