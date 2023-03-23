import React from 'react'
import './Certificates.css'
function Certificates({ certificates, elipse }) {
    return (
        <div className="certificates">
            <div className='hr'>
                <h2>ВСЕ ОФФИЦИАЛЬНО</h2>
                <hr />
            </div>
            <div className="certificates__list">
                {certificates.map(certificate =>
                    <div className="certificate" key={certificate.name}>
                        <div className="certificate__header">
                            <div className='name'>{certificate.name}</div>
                            <div>{elipse}</div>
                        </div>
                    <img src={certificate.img} width="220px" height="300px" alt="" />
                        
                    </div>
                )}
            </div>
            <div className='hr'>
                <hr />
            </div>
        </div>
    )
}

export default Certificates