import React from 'react'
import './Footer.css'
function Footer() {

    return (

        <div className="footer">
            <div className='footer_body'>
                <ul>
                    <li>Телефон:</li>
                    <li>8 (951) 916-34-94</li>
                    <li>+7 (950) 359-98-00</li>
                </ul>
                <ul>
                    <li>E-mail:</li>
                    <li>1@promhim-t.ru</li>
                    <li>admin@promhim-t.ru</li>
                </ul>
                <ul>
                    <li>Адрес:</li>
                    <li>Нижегородская обл., г. Дзержинск,</li>
                    <li> ул. Красноармейская, 17А</li>
                </ul>
            </div>
            <div className='copy__right'>
                <div>© 2023 ООО «ПромХимТех» Все права защищены</div>
                <div>Стоимость может варьироваться, в зависимости от сезона и цен на материалы</div>
            </div>
        </div>
    )
}

export default Footer