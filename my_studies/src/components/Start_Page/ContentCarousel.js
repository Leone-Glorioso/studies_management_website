import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Announcement from "./Announcement";
// import React from 'react';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div data-value="1">1</div>,
    <div data-value="2">2</div>,
    <div data-value="3">3</div>,
    <div data-value="4">4</div>,
    <div data-value="5">5</div>,
];

function ContentCarousel(ann) {

    return(
        <div>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
            />
        </div>
    );
}

export default ContentCarousel;