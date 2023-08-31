import React from 'react'
import './Contacts.css'
import ContactsButton from './ContactsButton'

import { Icon } from '@iconify/react';

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="container">

        <div className="contacts__inner">
          <div className="contacts__buttons">
            <ContactsButton text="Написать в Telegram бота" img={<Icon icon="ic:baseline-telegram" />} link='/' />

            <ContactsButton text="Страница в Instagram" img={<Icon icon="ri:instagram-fill" />} link='/' />

            <ContactsButton text="Написать в Whatsapp" img={<Icon icon="ri:whatsapp-fill" />} link='/' />
          </div>

          <div className="contacts__inf">
            <a href="#" className="contacts__info">+7 (777) 777-77-77</a>
            <a href="#" className="contacts__info">cybershop@gmail.com</a>
            <a href="#" className="contacts__info">ООО "САЙБЕРШОП" ИП 011010101</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contacts