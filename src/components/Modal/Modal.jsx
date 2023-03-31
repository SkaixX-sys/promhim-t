import dotenv from "dotenv";
import { useState } from 'react'
import './Modal.css'
import axios from 'axios'

function Modal({ active, setActive }) {
    const [form, setForm] = useState(true)
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [succes, setSucces] = useState();

    const CALL_FORM_API = import.meta.env.VITE_REACT_CALLBACK_FORM_API_URL
    const CALL_NAME_API = import.meta.env.VITE_REACT_CALLBACK_NAME_API_URL
    const CALL_PHONE_API = import.meta.env.VITE_REACT_CALLBACK_PHONE_API_URL

    const FEED_FORM_API = import.meta.env.VITE_REACT_FEEDBACK_FORM_API_URL
    const FEED_NAME_API = import.meta.env.VITE_REACT_FEEDBACK_NAME_API_URL
    const FEED_EMAIL_API = import.meta.env.VITE_REACT_FEEDBACK_EMAIL_API_URL
    const FEED_MESSAGE_API = import.meta.env.VITE_REACT_FEEDBACK_MESSAGE_API_URL




    const validateForm = () => {
        const errors = {};
        if (!formData[CALL_NAME_API]) {
            errors[CALL_NAME_API] = 'Введите имя';
        }
        if (!formData[CALL_PHONE_API]) {
            errors[CALL_PHONE_API] = 'Введите номер телефона';
        } else if (!/^\+?\d+$/.test(formData[CALL_PHONE_API])) {
            errors[CALL_PHONE_API] = 'Неверный формат номера телефона';
        }
        return errors;
    };

    const validateForm2 = () => {
        const errors = {};
        if (!formData[FEED_NAME_API]) {
            errors[FEED_NAME_API] = 'Введите имя';
        }
        if (!formData[FEED_EMAIL_API]) {
            errors[FEED_EMAIL_API] = 'Введите почту';
        } else if (!/\S+@\S+\.\S+/.test(formData[FEED_EMAIL_API])) {
            errors[FEED_EMAIL_API] = 'Неверный формат адреса электронной почты';
        }
        if (!formData[FEED_MESSAGE_API]) {
            errors[FEED_MESSAGE_API] = 'Введите сообщение';
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
        const formUrl = CALL_FORM_API;
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

        const formUrl = FEED_FORM_API;
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
                    <div className='closeModal' onClick={() => {setActive(false)}}>&times;</div>
                    <div className='ccc'>ЗАКАЗАТЬ ЗВОНОК</div>
                    <form
                        className='form'
                        onSubmit={callSubmit}
                        >
                            {errors[CALL_NAME_API] && <div className='error'>{errors[CALL_NAME_API]}</div>}
                        <input
                            type="text"
                            name={CALL_NAME_API}
                            placeholder='Ваше имя'
                            value={formData[CALL_NAME_API] || ''}
                            onChange={handleChange}
                            />
                            {errors[CALL_PHONE_API] && <div className='error'>{errors[CALL_PHONE_API]}</div>}
                        <input
                            type="phone"
                            name={CALL_PHONE_API}
                            placeholder='Ваш номер'
                            value={formData[CALL_PHONE_API] || ''}
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
                        className="form"
                        onSubmit={feedSubmit}
                    >

                        {errors[FEED_NAME_API] && <div className='error'>{errors[FEED_NAME_API]}</div>}
                        <input
                            type="text"
                            name={FEED_NAME_API}
                            placeholder='Ваше имя'
                            value={formData[FEED_NAME_API] || ''}
                            onChange={handleChange}
                            />
                            {errors[FEED_EMAIL_API] && <div className='error'>{errors[FEED_EMAIL_API]}</div>}
                        <input
                            type="email"
                            name={FEED_EMAIL_API}
                            placeholder='Ваша почта'
                            value={formData[FEED_EMAIL_API] || ''}
                            onChange={handleChange}
                            />
                            {errors[FEED_MESSAGE_API] && <div className='error'>{errors[FEED_MESSAGE_API]}</div>}
                        <textarea
                            type="text"
                            name={FEED_MESSAGE_API}
                            placeholder='Сообщение'
                            value={formData[FEED_MESSAGE_API] || ''}
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