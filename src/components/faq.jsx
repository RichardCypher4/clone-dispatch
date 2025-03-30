import React from 'react'
import Question from './question'
import Offer from './offer'
import Footer from './footer'
import "./faq.scss"

const faq = () => {
  return (
    <div className='scope'>
      <Question/>
      <Offer />
      <Footer />
    </div>
  )
}

export default faq
