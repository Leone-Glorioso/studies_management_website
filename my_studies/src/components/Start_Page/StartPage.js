import React, {useState} from 'react';
import AnnouncementBoard from "./AnnouncementBoard";
import "./StartPage.css";
import LoginWindow from "./LoginWindow";
import StartPageHeader from "./StartPageHeader";
import {BiBook, BiHelpCircle, BiUser} from "react-icons/bi";
import { Button } from 'primereact/button';
import ContentCarousel from "./ContentCarousel";

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

    const cards = [
        {icon: <BiUser/>, text: "This is the text", headerImg: 'https://cdn4.vectorstock.com/i/1000x1000/96/98/paper-scroll-design-isolated-vector-31809698.jpg', btnText: "button", btnLink: '/help/student', btnIcon: <BiBook/>},
        {icon: <BiUser/>, text: "This is the text", headerImg: 'https://cdn4.vectorstock.com/i/1000x1000/96/98/paper-scroll-design-isolated-vector-31809698.jpg', btnText: "button", btnLink: '/help/student', btnIcon: <BiBook/>},
        {icon: <BiUser/>, text: "This is the text", headerImg: 'https://cdn4.vectorstock.com/i/1000x1000/96/98/paper-scroll-design-isolated-vector-31809698.jpg', btnText: "button", btnLink: '/help/student', btnIcon: <BiBook/>},
        {icon: <BiUser/>, text: "This is the text", headerImg: 'https://cdn4.vectorstock.com/i/1000x1000/96/98/paper-scroll-design-isolated-vector-31809698.jpg', btnText: "button", btnLink: '/help/student', btnIcon: <BiBook/>},
        {icon: <BiUser/>, text: "This is the text", headerImg: 'https://cdn4.vectorstock.com/i/1000x1000/96/98/paper-scroll-design-isolated-vector-31809698.jpg', btnText: "button", btnLink: '/help/student', btnIcon: <BiBook/>}
    ]

    return (
        <div>
            <StartPageHeader/>
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
            <br/>
            <ContentCarousel ann={announcements}/>
            <a href={'/help'}>
                <Button className={'button-round'}  tooltip="Σελίδα Βοήθειας" tooltipOptions={{ position: 'right' , className: 'toolTip', fontSize: '2rem', cursor: 'pointer', mouseTrack: true, mouseTrackTop: 15}}>
                    <BiHelpCircle/>
                </Button>
            </a>
        </div>
    );
};

export default StartPage;