import React, { useState } from 'react'
import './Certificates.css'
import ModalCertificates from '../../components/UI/ModalCertificates/ModalCertificates'
function Certificates({ elipse }) {

    const [showModal, setShowModal] = useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = useState('');

    const handleImageClick = (imageUrl) => {
        setSelectedImageUrl(imageUrl);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const certificates = [
        { id: 1, name: 'Олифа', img: '../static/87b19a67-5a92-409d-b1b0-c48b6ea4c0ef.jpg' },
        { id: 2, name: 'Уайт-спирит Нефрас С4', img: '../static/87b19a67-5a92-409d-b1b0-c48b6ea4c0ef.jpg' },
        { id: 3, name: 'Нефрас C5', img: '../static/87b19a67-5a92-409d-b1b0-c48b6ea4c0ef.jpg' },
        { id: 4, name: 'Регистрация', img: '../static/87b19a67-5a92-409d-b1b0-c48b6ea4c0ef.jpg' },
        { id: 5, name: 'Нефрас-БР-С2', img: '../static/87b19a67-5a92-409d-b1b0-c48b6ea4c0ef.jpg' },
    ]


    return (
        <div className="certificates">
            <div className='hr'>
                <h2>ВСЕ ОФФИЦИАЛЬНО</h2>
                <hr />
            </div>
            <div className="certificates__list">
                {certificates.map(certificate =>
                    <div className="certificate" key={certificate.id}>
                        <div className="certificate__header">
                            <div className='name'>{certificate.name}</div>
                            <div>{elipse}</div>
                        </div>
                        <img
                            key={certificate.id}
                            src={certificate.img}
                            alt={`image-${certificate.id}`}
                            onClick={() => handleImageClick(certificate.img)}
                            width="220px"
                            height="300px"
                        />

                    </div>
                )}


                <ModalCertificates showModal={showModal} setShowModal={setShowModal} imageUrl={selectedImageUrl} onClose={handleModalClose} />

            </div>
            <div className='hr'>
                <hr />
            </div>
        </div>
    )
}

export default Certificates