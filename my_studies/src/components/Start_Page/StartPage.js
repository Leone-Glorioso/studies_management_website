import React from 'react';
import AnnouncementBoard from "./AnnouncementBoard";
import "./StartPage.css";
import LoginWindow from "./LoginWindow";
import SearchBar from "./SearchBar";
import {Carousel} from "react-responsive-carousel";
// import { Carousel } from 'react-responsive-carousel';
// TODO use MUI Carousel

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
            {/*<Carousel>*/}
            {/*    <div>*/}
            {/*        <img src='https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg' />*/}
            {/*        <p className="legend">Legend 1</p>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <img src='https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg' />*/}
            {/*        <p className="legend">Legend 2</p>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <img src='https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg' />*/}
            {/*        <p className="legend">Legend 3</p>*/}
            {/*    </div>*/}
            {/*</Carousel>*/}
        </div>
    );
};

export default StartPage;