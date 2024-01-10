import React, {useState} from 'react';
import AnnouncementBoard from "./AnnouncementBoard";
import "./StartPage.css";
import LoginWindow from "./LoginWindow";
// import {CCarousel, CCarouselCaption, CCarouselItem, CCol, CImage, CRow} from '@coreui/react';
// import Carousel from 'react-bootstrap/Carousel';
// import { Carousel } from 'flowbite-react';

const StartPage = () => {
    const announcements = [
        { text: 'Announcement 1', imageUrl: 'https://media.istockphoto.com/id/1068380820/photo/pile-of-paper-documents-in-the-office.jpg?s=612x612&w=0&k=20&c=zR62We-PkRmPvgcyBLEALfPaTMe2YrYcs2ryIF1oxzk=' },
        { text: 'Announcement 2', imageUrl: 'https://edtrust.org/wp-content/uploads/2019/03/white-graduates.jpg' },
        { text: 'Announcement 3', imageUrl: 'https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg' },
        { text: 'Announcement 1', imageUrl: 'https://media.istockphoto.com/id/1068380820/photo/pile-of-paper-documents-in-the-office.jpg?s=612x612&w=0&k=20&c=zR62We-PkRmPvgcyBLEALfPaTMe2YrYcs2ryIF1oxzk=' },
        { text: 'Announcement 2', imageUrl: 'https://edtrust.org/wp-content/uploads/2019/03/white-graduates.jpg' },
        { text: 'Announcement 3', imageUrl: 'https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg' },
        { text: 'Announcement 1', imageUrl: 'https://media.istockphoto.com/id/1068380820/photo/pile-of-paper-documents-in-the-office.jpg?s=612x612&w=0&k=20&c=zR62We-PkRmPvgcyBLEALfPaTMe2YrYcs2ryIF1oxzk=' },
        { text: 'Announcement 2', imageUrl: 'https://edtrust.org/wp-content/uploads/2019/03/white-graduates.jpg' },
        { text: 'Announcement 3', imageUrl: 'https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg' },
    ];

    return (
        <div>
            {/*<SearchBar/>*/}
            <br/>
            <LoginWindow/>
            <br/>
            <div className="container_two">
                <h1>Φοιτητές</h1>
            </div>
            <AnnouncementBoard announcements={announcements} />
            <br/>
            <div className="container_two">
                <h1>Εκπαιδευτικοί</h1>
            </div>
            <AnnouncementBoard announcements={announcements} />
            <br/>
            <div className="container_two">
                <h1>Γραμματεία</h1>
            </div>
            <AnnouncementBoard announcements={announcements} />
            {/*<CRow>*/}
            {/*    <CCol>*/}
            {/*        <CCarousel controls indicators>*/}
            {/*            <CCarouselItem>*/}
            {/*                <CImage className="container_images" src={'https://media.istockphoto.com/id/1068380820/photo/pile-of-paper-documents-in-the-office.jpg?s=612x612&w=0&k=20&c=zR62We-PkRmPvgcyBLEALfPaTMe2YrYcs2ryIF1oxzk='} alt="slide 1" />*/}
            {/*                <CCarouselCaption className="d-none d-md-block">*/}
            {/*                    <h5>First slide label</h5>*/}
            {/*                    <p>Some representative placeholder content for the first slide.</p>*/}
            {/*                </CCarouselCaption>*/}
            {/*            </CCarouselItem>*/}
            {/*            <CCarouselItem>*/}
            {/*                <CImage className="container_images" src={'https://edtrust.org/wp-content/uploads/2019/03/white-graduates.jpg'} alt="slide 2" />*/}
            {/*                <CCarouselCaption className="d-none d-md-block">*/}
            {/*                    <h5>Second slide label</h5>*/}
            {/*                    <p>Some representative placeholder content for the first slide.</p>*/}
            {/*                </CCarouselCaption>*/}
            {/*            </CCarouselItem>*/}
            {/*            <CCarouselItem>*/}
            {/*                <CImage className="container_images" src={'https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg'} alt="slide 3" />*/}
            {/*                <CCarouselCaption className="d-none d-md-block">*/}
            {/*                    <h5>Third slide label</h5>*/}
            {/*                    <p>Some representative placeholder content for the first slide.</p>*/}
            {/*                </CCarouselCaption>*/}
            {/*            </CCarouselItem>*/}
            {/*        </CCarousel>*/}
            {/*    </CCol>*/}
            {/*</CRow>*/}
            {/*<Carousel activeIndex={index} onSelect={handleSelect}>*/}
            {/*    <Carousel.Item>*/}
            {/*        /!*<ExampleCarouselImage text="First slide" />*!/*/}
            {/*        <img src={'https://edtrust.org/wp-content/uploads/2019/03/white-graduates.jpg'} className={'container_images'} alt={"nn"}/>*/}
            {/*        <Carousel.Caption>*/}
            {/*            <h3>First slide label</h3>*/}
            {/*            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
            {/*        </Carousel.Caption>*/}
            {/*    </Carousel.Item>*/}
            {/*    <Carousel.Item>*/}
            {/*        /!*<ExampleCarouselImage text="Second slide" />*!/*/}
            {/*        <img src={'https://edtrust.org/wp-content/uploads/2019/03/white-graduates.jpg'} className={'container_images'} alt={"nn"}/>*/}
            {/*        <Carousel.Caption>*/}
            {/*            <h3>Second slide label</h3>*/}
            {/*            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
            {/*        </Carousel.Caption>*/}
            {/*    </Carousel.Item>*/}
            {/*    <Carousel.Item>*/}
            {/*        /!*<ExampleCarouselImage text="Third slide" />*!/*/}
            {/*        <img src={'https://edtrust.org/wp-content/uploads/2019/03/white-graduates.jpg'} className={'container_images'} alt={"nn"}/>*/}
            {/*        <Carousel.Caption>*/}
            {/*            <h3>Third slide label</h3>*/}
            {/*            <p>*/}
            {/*                Praesent commodo cursus magna, vel scelerisque nisl consectetur.*/}
            {/*            </p>*/}
            {/*        </Carousel.Caption>*/}
            {/*    </Carousel.Item>*/}
            {/*</Carousel>*/}
            {/*<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">*/}
            {/*    <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>*/}
            {/*        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">*/}
            {/*            Slide 1*/}
            {/*        </div>*/}
            {/*        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">*/}
            {/*            Slide 2*/}
            {/*        </div>*/}
            {/*        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">*/}
            {/*            Slide 3*/}
            {/*        </div>*/}
            {/*    </Carousel>*/}
            {/*</div>*/}
        </div>
    );
};

export default StartPage;