import React from 'react'
import './Products.css'
function Products({ polygon, polygon2, items, elipse, active, setActive }) {
    
    return (
        <div className='products'>
            <ul><a name='Товары'></a><li>{polygon}Товары</li></ul>
            <div className="products__wrapper">
                {items.map(item =>
                    <div className='item' key={item.id}>
                        <div className='elipse'>{elipse}</div>
                        <div className='number'>#{item.id}</div>
                        <h2>{item.name}</h2>
                        <div className="description">{item.description}</div>
                        <div className="learn-more__take-call">
                            <div className="learn-more">От 40 рублей за литр</div>
                            <div className="take-call" onClick={() => setActive(true)} >ЗАКАЗАТЬ ЗВОНОК{polygon2}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Products