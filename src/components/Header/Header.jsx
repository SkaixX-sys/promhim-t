import React, { useState, useEffect } from 'react'
import Menu from '../Menu/Menu'
import './Header.css'



function Header() {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        const scrollCheck = window.scrollY > 20;
        if (scrollCheck !== scroll) {
          setScroll(scrollCheck);
        }
      };
      document.addEventListener("scroll", onScroll);
      return () => {
        document.removeEventListener("scroll", onScroll);
      };
    }, [scroll]);

    const items = [
        { id: "1", value: "Главная", href: "#Top" },
        { id: "2", value: "Товары", href: "#Товары" },
        { id: "3", value: "О нас", href: "#О нас" }]

    const [menuActivate, setMenuActivate] = useState(true)

    return (
        <div className={scroll ? "header scrolled" : "header"}>
            <div className="logo"><i>Himg</i>OsO<sub>4</sub></div>
            <div className="burger" onClick={() => setMenuActivate(!menuActivate)}>
                <div className='Menu'>MENU</div>
                <div className={menuActivate ? 'burger-btn active' : 'burger-btn'}>
                    <span></span>
                </div>
            </div>

            <Menu active={menuActivate} setActive={setMenuActivate} items={items} />
        </div>
    )
}

export default Header