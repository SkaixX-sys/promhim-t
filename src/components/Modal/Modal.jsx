import { useState } from 'react'
import './Modal.css'
import axios from 'axios'

function Modal({ active, setActive }) {
    const [form, setForm] = useState(true)
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [succes, setSucces] = useState();

    const validateForm = () => {
        const errors = {};
        if (!formData['entry.599392440']) {
            errors['entry.599392440'] = 'Введите имя';
        }
        if (!formData['entry.1131487572']) {
            errors['entry.1131487572'] = 'Введите номер телефона';
        } else if (!/^\+?\d+$/.test(formData['entry.1131487572'])) {
            errors['entry.1131487572'] = 'Неверный формат номера телефона';
        }
        return errors;
    };

    const validateForm2 = () => {
        const errors = {};
        if (!formData['entry.178226530']) {
            errors['entry.178226530'] = 'Введите имя';
        }
        if (!formData['entry.427354668']) {
            errors['entry.427354668'] = 'Введите почту';
        } else if (!/\S+@\S+\.\S+/.test(formData['entry.427354668'])) {
            errors['entry.427354668'] = 'Неверный формат адреса электронной почты';
        }
        if (!formData['entry.1638684184']) {
            errors['entry.1638684184'] = 'Введите сообщение';
        }
        return errors;
    }


    const callSubmit = async (event) => {
        event.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }
        const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScrBLtbM9yKksBCU1unfyYCmLoCbzA3O5L_ws1o7jnVIXiD0g/formResponse";
        const formDataUrlEncoded = new URLSearchParams(formData).toString();

        setSucces('Данные переданы')
        setFormData({});
        setErrors({});
        setTimeout(() => {
            setActive(false)
            setSucces('')
        }, 2000);
        await axios.post(formUrl, formDataUrlEncoded)
    };

    const feedSubmit = async (event) => {
        event.preventDefault();
        const errors = validateForm2();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSelfiy_cnKKQF2E3OvlE9mhjlF-U1Ml0_IIzbu0JRqo2VlOzA/formResponse";
        const formDataUrlEncoded = new URLSearchParams(formData).toString();
        setSucces('Данные переданы')
        setFormData({});
        setErrors({});
        setTimeout(() => {
            setSucces('')
            setActive(false)
        }, 2000);
        await axios.post(formUrl, formDataUrlEncoded)


    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    };

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => {
            setActive(false);
            setFormData({});
            setErrors({});
            setSucces('')
        }}>
            {form ?
                <div className={active ? 'modal__content active' : 'modal__content'} onClick={(e => e.stopPropagation())}>
                    {succes ? <div className='succes'>{succes}</div> : null}
                    <div className='ccc'>ЗАКАЗАТЬ ЗВОНОК</div>
                    <form
                        // action='https://docs.google.com/forms/d/e/1FAIpQLScrBLtbM9yKksBCU1unfyYCmLoCbzA3O5L_ws1o7jnVIXiD0g/formResponse'
                        className='form'
                        onSubmit={callSubmit}
                        >
                        {errors['entry.599392440'] && <div className='error'>{errors['entry.599392440']}</div>}
                        <input
                            type="text"
                            name='entry.599392440'
                            placeholder='Ваше имя'
                            value={formData['entry.599392440'] || ''}
                            onChange={handleChange}
                            />
                            {errors['entry.1131487572'] && <div className='error'>{errors['entry.1131487572']}</div>}
                        <input
                            type="phone"
                            name='entry.1131487572'
                            placeholder='Ваш номер'
                            value={formData['entry.1131487572'] || ''}
                            onChange={handleChange}
                        />
                        <div className="take-consultation__callback">
                            <div className="take-consultation" onClick={() => { setForm(false); setErrors({}); setFormData({}); }}>Связь по почте</div>
                            <input
                                type="submit"
                                value="Отправить"
                                className="callback"
                            />
                        </div>
                    </form>
                </div>
                :
                <div className={active ? 'modal__content active' : 'modal__content'} onClick={(e => e.stopPropagation())}>
                    {succes ? <div className='succes'>{succes}</div> : null}
                    <div className='ccc'>НАПИСАТЬ СООБЩЕНИЕ</div>
                    <form
                        // action='https://docs.google.com/forms/d/e/1FAIpQLSelfiy_cnKKQF2E3OvlE9mhjlF-U1Ml0_IIzbu0JRqo2VlOzA/formResponse'
                        className="form"
                        onSubmit={feedSubmit}
                    >

                        {errors['entry.178226530'] && <div className='error'>{errors['entry.178226530']}</div>}
                        <input
                            type="text"
                            name='entry.178226530'
                            placeholder='Ваше имя'
                            value={formData['entry.178226530'] || ''}
                            onChange={handleChange}
                            />
                            {errors['entry.427354668'] && <div className='error'>{errors['entry.427354668']}</div>}
                        <input
                            type="email"
                            name='entry.427354668'
                            placeholder='Ваша почта'
                            value={formData['entry.427354668'] || ''}
                            onChange={handleChange}
                            />
                            {errors['entry.1638684184'] && <div className='error'>{errors['entry.1638684184']}</div>}
                        <textarea
                            type="text"
                            name='entry.1638684184'
                            placeholder='Сообщение'
                            value={formData['entry.1638684184'] || ''}
                            onChange={handleChange}
                        />
                        <div className="take-consultation__callback">
                            <div className="take-consultation" onClick={() => { setForm(true); setErrors({}); setFormData({}); }}>Заказать звонок</div>
                            <input
                                type="submit"
                                value="Отправить"
                                className="callback"
                            />
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}

export default Modal