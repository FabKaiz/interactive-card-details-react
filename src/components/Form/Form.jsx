import React from 'react'
import './Form.scss'
import formGradientMobile from '../../assets/bg-main-mobile.png'
import Card from '../Card/Card'

const Form = () => {
  return (
    <div className="form__container">
      <div className="form__gradient">
        <img src={formGradientMobile} alt="color gradient" />
        <Card />
      </div>

      <div className="form__content">
        <form>
          <label>
            CardHolder Name
            <input type="name" placeholder="e.g. Jane Appleseed" />
          </label>
          <label>
            Card Number
            <input type="number" placeholder="e.g. 1234 5678 9123 0000" />
          </label>

          <div className="form__content-bottom">
            <label className="form__date-label">
              Exp. Date (MM/YY)
              <div className="date__input-container">
                <input type="number" name="month" placeholder="MM" />
                <input type="number" name="year" placeholder="YY" />
              </div>
            </label>

            <label>
              CVC
              <input className='cvc__input' type="number" placeholder="e.g. 123" />
            </label>
          </div>

          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  )
}

export default Form
