import React from 'react'
import './AgreementBlock.css'
import AgreementElements from './AgreementElements'

const AgreementBlock = () => {
  return (
    <section className="agreement">
      <div className="agreement__block">
        <h3 className="agreement__title">Пользовательское соглашение</h3>
        <AgreementElements />
      </div>
    </section>
  )
}

export default AgreementBlock