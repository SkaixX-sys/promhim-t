import React from 'react'
import './Services.css'
function Services({ items }) {
    
    return (
        <div className="services">
            <div className="service__header">
                <h2>УСЛУГИ</h2>
                <div className="description">Разработаем рецепты растворителей под заказ, возможность разлития растворителей под Вашим брендом, обеспечим поставку растворителей бочками по 212 литров, возможна доставка собственным транспортом, ж/д контейнерами или бойлерами, также закупаем отработанные растворители самовывозом</div>
            </div>
            <div className="service__list">
                {items.map(item =>
                    <div className={item.icon} key={item.id}>
                        <div className='icon'>{item.icon}</div>
                        <div className="service"><strong>{item.header}</strong>{item.description}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Services