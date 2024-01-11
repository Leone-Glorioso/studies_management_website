import React from 'react';
import './Card.css';
import {BiCard} from "react-icons/bi";

function Card({text, image, image_alt, data_value, icon}) {

    return (
        <div className={'card_outer'} data-value={data_value}>
            <img src={image} alt={image_alt} className={'image_opaque'}/>
            <div className={'text_in_card'}>{text}</div>
            <div className={'icon_in_card'}>
                {icon}
            </div>
        </div>
    );
}

export default Card;