import React, {useState} from 'react';
import './Card.css';

function Card({text, image, image_alt, data_value, icon, title, icon_style_1, icon_style_2}) {
    const [hover, hasHovered] = useState(false);

    const mouseEnter = () => {
        hasHovered(true);
    }

    const mouseLeave = () => {
        hasHovered(false);
    }

    return (
        <div className={'card_outer'} data-value={data_value} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            {!hover && <img src={image} alt={image_alt} className={'image_opaque'}/>}
            {hover && <img src={image} alt={image_alt} className={'image_opaque_hovered'}/>}
            { !hover && <div className={'card_title'}>{title}</div>}
            { hover && <div className={'card_title_2'}>{title}</div>}
            { hover && <div className={'text_in_card'}>{text}</div>}
            { hover && <div className={icon_style_2}>
                {icon}
            </div>}
            { !hover && <div className={icon_style_1}>
                {icon}
            </div>}
        </div>
    );
}

export default Card;