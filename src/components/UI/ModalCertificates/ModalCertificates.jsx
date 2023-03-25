import React from 'react';
import './ModalCertificates.css';

const ModalCertificates = ({ showModal, setShowModal, imageUrl, onClose }) => {
  return (
    <div className={showModal ? 'modalCertificates active' : 'modalCertificates'} onClick={() => {
      setShowModal(false)}} >
        <div className={showModal ? 'modalCertificates-content active' : "modalCertificates-content"} onClick={(e => e.stopPropagation())}>
          <span className="close" onClick={onClose}>&times;</span>
          <img src={imageUrl} alt="modal-img" />
        </div>
    </div >
  );
};

export default ModalCertificates;
