import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Announcement from "./Announcement";
import './ContentCarousel.css';
import Card from "./Card";
// import React from 'react';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <Card text={'FirstCardodfsfjiofjdsfioljdsfioldsjfioldsjflikdsfjdslkfjdsflkjd'} image={'/bookcase.jpg'} image_alt={'bookcase'} data_value={1}/>,
    <Card text={'FirstCardodfsfjiofjdsfioljdsfioldsjfioldsjflikdsfjdslkfjdsflkjd'} image={'/bookcase.jpg'} image_alt={'bookcase'} data_value={2}/>,
    <div data-value="3">3</div>,
    <div data-value="4">4</div>,
    <div data-value="5">5</div>,
];

function ContentCarousel(ann) {

    return(
        <div className={'bg_content'}>
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

export default ContentCarousel;