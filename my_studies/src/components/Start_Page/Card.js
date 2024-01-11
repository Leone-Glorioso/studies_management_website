import React from 'react';
import './Card.css';

function Card({text, image, image_alt, data_value}) {
    return (
        <div className={'card_outer'} data-value={data_value}>
            <img src={image} alt={image_alt} className={'image_opaque'}/>
            <div className={'text_in_card'}>{text}</div>
        </div>
    );
}

export default Card;