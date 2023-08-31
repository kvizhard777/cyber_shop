import React from 'react'
import './AgreementBlock.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import AgreementElements from './AgreementElements'

const AgreementBlock = () => {
  return (
    <section className="agreement">
      <div className="container">

        <div className="agreement__block">
          <h3 className="agreement__title">Пользовательское соглашение</h3>
          <AgreementElements />
        </div>

      </div>
    </section>
  )
}

export default AgreementBlock