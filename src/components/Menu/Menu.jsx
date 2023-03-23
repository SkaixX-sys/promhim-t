import React from 'react'
import './Menu.css'
function Menu({ items, active, setActive }) {

    //svg polygon
    const polygon = <svg width="25" height="13" viewBox="0 0 5 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 6L0.5 0.803848L0.5 11.1962L5 6Z" fill="#AB4D74" />
    </svg>

    return (
        <div className={active ? 'menu active' : 'menu'}>
            <ul>
                {items.map(items =>
                    <li key={items.id}>
                        <a href={items.href}>{items.value}</a>
                        {polygon}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Menu