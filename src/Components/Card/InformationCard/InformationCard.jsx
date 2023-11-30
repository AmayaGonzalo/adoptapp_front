import React from "react";
import './informationCard.css';
import { useState } from "react";
import Modal from "Components/Modales/Modal";

const InformationCard = ({ title, imageUrl, body }) => {

    const [isOpenModal3, setIsOpenModal3] = useState(false);

    return (
        <article className="cardInfo-container">
            <div className="image-container">
                <img className='img-card-information' src={imageUrl} alt="" />
            </div>
            <div className="cardInfo-content">
                <div className="cardInfo-title">
                    <h3 className="cardInfo-h3">{title}</h3>
                </div>
                <div className="cardInfo-body">
                    <p className="cardInfo-p">{body}</p>
                </div>
            </div>
            <div className="btn">
                <button onClick={() => setIsOpenModal3(true)}>
                    Leer Mas
                </button>
            </div>
            <Modal modalNumber='3' isOpen={isOpenModal3} closeModal={() => { setIsOpenModal3(false) }}>
                <>
                    <div className='modal-content'>
                        <h2 className='information-modal-title'>{title}</h2>
                        <div className='content-modal-img'>
                            <img className='' src={imageUrl} alt="" />
                        </div>
                        <div className='information-modal-text'>{body}</div>
                    </div>
                </> </Modal>
        </article>
    )
}

export default InformationCard;