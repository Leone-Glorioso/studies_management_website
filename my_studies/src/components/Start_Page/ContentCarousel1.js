import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './ContentCarousel1.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

function ContentCarousel1({items}) {

    return(
        <div className={'bg_content1'}>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                infinite={true}
            />
        </div>
    );
}

export default ContentCarousel1;