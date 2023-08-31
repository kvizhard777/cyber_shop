import React from 'react'

const AgreementElements = () => {
  return (
    <div className="agreement__elements">
      <div className="agreement__elem">
        <p className="agreement-bold">Термины и определения</p>
        <p className="agreement-text">Заказ - запрос Покупателя на получение Товара, оформленный в соответствии с требованиями Сайта.</p>
        <p className="agreement-text">Покупатель - физическое лицо, либо оформляющее Заказы на сайте, либо использующее приобретенные на сайте Товары.</p>
        <p className="agreement-text">Цифровой товар - лицензионный электронный ключ или аккаунт программного продукта.</p>
      </div>

      <div className="agreement__elem">
        <p className="agreement-bold">1. Общие положения</p>
        <p className="agreement-text">1.1. Продавец является владельцем Сайта, осуществляющим его администрирование.</p>
        <p className="agreement-text">1.2. При оформлении Заказа, Покупатель принимает Условия соглашения.</p>
        <p className="agreement-text">1.3. Покупатель соглашается с Условиями нажатием кнопки «Купить» на последнем этапе оформления Заказа на сайте.</p>
        <p className="agreement-text">1.4. Сайт оказывает услуги только на территории РФ и стран СНГ, при этом некоторые Товары имеют региональные ограничения и предназначены для активации на территории РФ, Украины и стран СНГ.</p>
      </div>

      <div className="agreement__elem">
        <p className="agreement-bold">2. Порядок оформления Заказа и доставка Товара</p>
        <p className="agreement-text">2.1. При оформлении Заказа Покупатель должен указать электронный адрес, на который будет доставлен Товар.</p>
        <p className="agreement-text">2.2. Доставка Цифрового товара осуществляется сразу же после оплаты.</p>
        <p className="agreement-text">2.3. Любая информация, представленная на сайте, носит справочный характер. Для уточнения свойств и характеристик Цифрового товара, Покупатель должен обратиться к Продавцу.</p>
      </div>

      <div className="agreement__elem">
        <p className="agreement-bold">3. Оплата Товара</p>
        <p className="agreement-text">3.1. Цена Товара указана на сайте и может быть изменена Продавцом в одностороннем порядке.</p>
        <p className="agreement-text">3.2. Действующая цена указывается на последнем этапе оформления Заказа. После нажатия кнопки «Купить», цена не может быть изменена Продавцом.</p>
        <p className="agreement-text">3.3. Покупатель может выбрать любой способ оплаты из доступных.</p>
        <p className="agreement-text">3.4. Оплата совершается через платежного-агрегатора Digiseller/Free-kassa/LiqPay.</p>
        <p className="agreement-text">3.5. Платежный-агрегатор взымает комиссию установленную им.</p>
      </div>
    </div>
  )
}

export default AgreementElements