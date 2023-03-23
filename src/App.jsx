import React from 'react'
import '../styles/zeroing.css'
import '../styles/style.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Products from './components/Products/Products';
const About = React.lazy(() => import('./components/About/About'))
const Certificates = React.lazy(() => import('./components/Certificates/Certificates'))
const Footer = React.lazy(() => import('./components/footer/Footer'))
const Modal = React.lazy(() => import('./components/Modal/Modal'))
import { useState } from 'react';
function App() {

  //modal_state
  const [modalActive, setModalActive] = useState(false)

  //svg_polygon
  const polygon = <svg width="25" height="13" viewBox="0 0 5 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 6L0.5 0.803848L0.5 11.1962L5 6Z" fill="#AB4D74" />
  </svg>
  //svg_polygon2
  const polygon2 = <svg width="42" height="21" viewBox="0 0 5 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 6L0.5 0.803848L0.5 11.1962L5 6Z" fill="#AB4D74" />
  </svg>
  //svg_elipse
  const elipse = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8.5" stroke="#AB4D74" strokeWidth="3" />
  </svg>

  const products = [
    { id: 1, name: 'Олифа нефтеполимерная', description: 'Растворитель, который используется в производстве красок и лаков, чистки металлических поверхностей, производства пластмасс, удаление клея или в домашних нуждах.', price: '100' },
    { id: 2, name: 'Уайт-спирит Нефрас С4', description: 'Используется в  машиностроении, авиации, судостроении, производстве электрооборудования, также в качестве смазки для крупных механизмов, таких как шестеренчатые насосы, редукторы, подшипники, цепи.', price: '150' },
    { id: 3, name: 'Нефрас-БР-С2', description: 'Результ смешивания высококачественных дизельных компонентов с очистителями и модификаторами. Является эффективной присадкой для моторного топлива, которая позволяет улучшить качество топлива и повысить экономичность и экологичность двигателя.', price: '50' },
    { id: 4, name: 'Нефрас-С-5', description: 'Применяется в гидравлических системах технических устройств, включая металлообрабатывающее оборудование, пресс-формы, машинно-строительное оборудование, гидравлические манипуляторы.', price: '70' },
  ]
  const certificates = [
    { id: 1, name: 'Олифа', img: '../static/87b19a67-5a92-409d-b1b0-c48b6ea4c0ef.jpg' },
    { id: 1, name: 'Уайт-спирит Нефрас С4', img: '../static/87b19a67-5a92-409d-b1b0-c48b6ea4c0ef.jpg' },
    { id: 1, name: 'Нефрас C5', img: '../static/87b19a67-5a92-409d-b1b0-c48b6ea4c0ef.jpg' },
    { id: 1, name: 'Регистрация', img: '../static/87b19a67-5a92-409d-b1b0-c48b6ea4c0ef.jpg' },
    { id: 1, name: 'Нефрас-БР-С2', img: '../static/87b19a67-5a92-409d-b1b0-c48b6ea4c0ef.jpg' },
  ]

  return (
    <div className="App">
      <Header />
      <Main polygon={polygon} polygon2={polygon2} active={modalActive} setActive={setModalActive} />
      <Products polygon={polygon} items={products} elipse={elipse} polygon2={polygon2} active={modalActive} setActive={setModalActive} />
      <ul><a name="О нас"></a><li>{polygon}О нас</li></ul>
      <About polygon={polygon} />
      <Certificates certificates={certificates} elipse={elipse} />
      <Modal active={modalActive} setActive={setModalActive} />
      <Footer />
    </div>
  )
}

export default App
