import React from 'react'

const ContactsButton = ({ link, text, img }) => {
  return (
    <a href={link} className="contacts__btn">
      <div className="contacts__btn-img">{img}</div>
      {text}
    </a>
  )
}

export default ContactsButton