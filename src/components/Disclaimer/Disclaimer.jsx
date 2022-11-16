import React from 'react'
import 'Disclaimer.scss'

const Disclaimer = () => {
  return (
    <div className="disclaimer__container">
      <p>
        This is a{' '}
        <a
          href="https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>{' '}
        challenge. Made by{' '}
        <a
          href="https://github.com/FabKaiz"
          target="_blank"
          rel="noopener noreferrer"
        >
          FabKaiz
        </a>
        .
      </p>
      <p>
        Only for demo purpose, none of the card details will be published or
        saved
      </p>
    </div>
  )
}

export default Disclaimer
