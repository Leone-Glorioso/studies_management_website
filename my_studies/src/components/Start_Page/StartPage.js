import React, {useState} from 'react';
import "./StartPage.css";
import LoginWindow from "./LoginWindow";
import StartPageHeader from "./StartPageHeader";
import {BiBook, BiCard, BiHelpCircle, BiUser} from "react-icons/bi";
import { Button } from 'primereact/button';
import ContentCarousel from "./ContentCarousel";
import Card from "./Card";
import {AiFillLock} from "react-icons/ai";

const items_1 = [
    <Card text={'First Cardodfsfjiofjdsfio ljdsfioldsjfioldsjflikdsfjdslkfjdsdsadsadsadsasflkjd'} image={'/bookcase.jpg'} image_alt={'bookcase'} data_value={1} icon={<BiCard/>} title={'Δες Βαθμούς'} type={"student"}/>,
    <Card text={'First Cardodfsfjiofjdsfiol jdsfioldsjfioldsjflikdsfjdsssdsadsadsadlkfjdsflkjd'} image={'/bookcase.jpg'} image_alt={'bookcase'} data_value={2} icon={<AiFillLock/>}  title={'Δες Βαθμούς'} type={"student"}/>,
    <Card text={'First Cardodfsfjiofjdsfiol jdsfioldsjfioldsjflikdsfjdsssdsadsadsadlkfjdsflkjd'} image={'/bookcase.jpg'} image_alt={'bookcase'} data_value={3} icon={<AiFillLock/>}  title={'Δες Βαθμούς'} type={"student"}/>,
    <Card text={'First Cardodfsfjiofjdsfiol jdsfioldsjfioldsjflikdsfjdsssdsadsadsadlkfjdsflkjd'} image={'/bookcase.jpg'} image_alt={'bookcase'} data_value={4} icon={<AiFillLock/>}  title={'Δες Βαθμούς'} type={"student"}/>,
    <Card text={'First Cardodfsfjiofjdsfiol jdsfioldsjfioldsjflikdsfjdsssdsadsadsadlkfjdsflkjd'} image={'/bookcase.jpg'} image_alt={'bookcase'} data_value={5} icon={<AiFillLock/>}  title={'Δες Βαθμούς'} type={"student"}/>
];

const items_2 = [
    <Card text={'First Cardodfsfjiofjdsfio ljdsfioldsjfioldsjflikdsfjdslkfjdsdsadsadsadsasflkjd'} image={'/bookcase.jpg'} image_alt={'bookcase'} data_value={1} icon={<BiCard/>} title={'Δες Βαθμούς'} type={"teacher"}/>,
    <Card text={'First Cardodfsfjiofjdsfiol jdsfioldsjfioldsjflikdsfjdsssdsadsadsadlkfjdsflkjd'} image={'/bookcase.jpg'} image_alt={'bookcase'} data_value={2} icon={<AiFillLock/>}  title={'Δες Βαθμούς'} type={"teacher"}/>,
    <Card text={'First Cardodfsfjiofjdsfiol jdsfioldsjfioldsjflikdsfjdsssdsadsadsadlkfjdsflkjd'} image={'/bookcase.jpg'} image_alt={'bookcase'} data_value={3} icon={<AiFillLock/>}  title={'Δες Βαθμούς'} type={"teacher"}/>,
    <Card text={'First Cardodfsfjiofjdsfiol jdsfioldsjfioldsjflikdsfjdsssdsadsadsadlkfjdsflkjd'} image={'/bookcase.jpg'} image_alt={'bookcase'} data_value={4} icon={<AiFillLock/>}  title={'Δες Βαθμούς'} type={"teacher"}/>,
    <Card text={'First Cardodfsfjiofjdsfiol jdsfioldsjfioldsjflikdsfjdsssdsadsadsadlkfjdsflkjd'} image={'/bookcase.jpg'} image_alt={'bookcase'} data_value={5} icon={<AiFillLock/>}  title={'Δες Βαθμούς'} type={"teacher"}/>
];

const items_3 = [
    <Card text={'First Cardodfsfjiofjdsfio ljdsfioldsjfioldsjflikdsfjdslkfjdsdsadsadsadsasflkjd'} image={'/bookcase.jpg'} image_alt={'bookcase'} data_value={1} icon={<BiCard/>} title={'Δες Βαθμούς'} type={"admin"}/>,
    <Card text={'First Cardodfsfjiofjdsfiol jdsfioldsjfioldsjflikdsfjdsssdsadsadsadlkfjdsflkjd'} image={'/bookcase.jpg'} image_alt={'bookcase'} data_value={2} icon={<AiFillLock/>}  title={'Δες Βαθμούς'} type={"admin"}/>,
    <Card text={'First Cardodfsfjiofjdsfiol jdsfioldsjfioldsjflikdsfjdsssdsadsadsadlkfjdsflkjd'} image={'/bookcase.jpg'} image_alt={'bookcase'} data_value={3} icon={<AiFillLock/>}  title={'Δες Βαθμούς'} type={"admin"}/>,
    <Card text={'First Cardodfsfjiofjdsfiol jdsfioldsjfioldsjflikdsfjdsssdsadsadsadlkfjdsflkjd'} image={'/bookcase.jpg'} image_alt={'bookcase'} data_value={4} icon={<AiFillLock/>}  title={'Δες Βαθμούς'} type={"admin"}/>,
    <Card text={'First Cardodfsfjiofjdsfiol jdsfioldsjfioldsjflikdsfjdsssdsadsadsadlkfjdsflkjd'} image={'/bookcase.jpg'} image_alt={'bookcase'} data_value={5} icon={<AiFillLock/>}  title={'Δες Βαθμούς'} type={"admin"}/>
];


const StartPage = () => {
    return (
        <div>
            <StartPageHeader/>
            <br/>
            <LoginWindow/>
            <br/>
            <div className="container_two_alt">
                <h1>Φοιτητές</h1>
            </div>
            <ContentCarousel items={items_1}/>
            <div className="container_two">
                <h1>Εκπαιδευτικοί</h1>
            </div>
            <ContentCarousel items={items_2}/>
            <div className="container_two">
                <h1>Γραμματεία</h1>
            </div>
            <ContentCarousel items={items_3}/>
            <a href={'/help'}>
                <Button className={'button-round'}  tooltip="Σελίδα Βοήθειας" tooltipOptions={{ position: 'right' , className: 'toolTip', fontSize: '2rem', cursor: 'pointer', mouseTrack: true, mouseTrackTop: 15}}>
                    <BiHelpCircle/>
                </Button>
            </a>
        </div>
    );
};

export default StartPage;