import React, {useState} from 'react';
import "./StartPage.css";
import LoginWindow from "./LoginWindow";
import StartPageHeader from "./StartPageHeader";
import {BiBook, BiCard, BiHelpCircle, BiUser} from "react-icons/bi";
import { Button } from 'primereact/button';
import ContentCarousel from "./ContentCarousel";
import Card from "./Card";
import {AiFillLock} from "react-icons/ai";
import {FaBook, FaCertificate} from "react-icons/fa6";
import {FaScroll} from "react-icons/fa6";
import {BsBookmarkPlus, BsBookmarkPlusFill} from "react-icons/bs";
import {MdSettings} from "react-icons/md";
import {IoHelpCircleOutline} from "react-icons/io5";
import {FaUserCircle} from "react-icons/fa";
import {GiScrollQuill} from "react-icons/gi";

const items_1 = [
    <Card text={'Δες πληροφορίες για τα μαθήματα που έχεις πάρει, αλλά και όσα μπορείς να πάρεις. Δες πληροφορίες όπως ποιοί καθηγητές τα έχουν πάρει, πόσες πιστωτικές μονάδες δίνουν και πολλά άλλα.'} image={'/carousel/student/lessons.jpg'} image_alt={'lessons'} data_value={1} icon={<FaBook/>} title={'Μαθήματα'} type={"student"}/>,
    <Card text={'Δες τις βαθμολογίες από όλα σου τα μαθήματα! Μπορείς να τις εκτυπώσεις ή να τις εξάγεις σε pdf'} image={'/carousel/student/grades.jpg'} image_alt={'grades'} data_value={2} icon={<FaScroll/>}  title={'Βαθμολογίες'} type={"student"}/>,
    <Card text={'Δήλωσε τα μαθήματα που θες να παρακολουθήσεις! Μπορείς να κάνεις όσες δηλώσεις θες εντός της προθεσμίας άμα αλλάξεις την γνώμη σου!'} image={'/carousel/student/dhloseis.png'} image_alt={'dhloseis'} data_value={3} icon={<BsBookmarkPlusFill/>}  title={'Δηλώσεις'} type={"student"}/>,
    <Card text={'Έκδοσε πιστοποιητικά από τα διαθέσιμα είδη. Μπορείς ανά πάσα στιγμή να ελέγξεις την κατάσταση τους και να εκτυπώσεις όσα έχουν εγκριθεί'} image={'/carousel/student/certificate.jpg'} image_alt={'certificate'} data_value={4} icon={<FaCertificate/>}  title={'Πιστοποιητικά'} type={"student"}/>,
    <Card text={'Εξερεύνησε τις ρυθμίσεις που προσφέρει η εφαρμογή μας. Προσάρμοσε την στις ανάγκες σου!'} image={'/carousel/student/settings.jpg'} image_alt={'settings'} data_value={5} icon={<MdSettings/>}  title={'Ρυθμίσεις'} type={"student"}/>,
    <Card text={'Η δικιά σου σελίδα βοήθειας για να εξερευνήσεις τις δυνατότητες της εφαρμογής με ασφάλεια!'} image={'/carousel/student/help.jpg'} image_alt={'help'} data_value={6} icon={<IoHelpCircleOutline/>}  title={'Βοήθεια'} type={"student"}/>,
    <Card text={'Προσάρμοσε το προφίλ σου και κάντο να ξεχωρίζει! Δες τις πληροφορίες σου, επεξεργάσου τες και αποθήκευσέ τες!'} image={'/carousel/student/profile.jpg'} image_alt={'profile'} data_value={7} icon={<FaUserCircle/>}  title={'Προφίλ'} type={"student"}/>
];

const items_2 = [
    <Card text={'Δες τα μαθήματα που έχεις αναλάβει και τις πληροφορίες τους! Δες τις βαθμολογίες που έχεις ανεβάσει και εάν έχεις ανεβάσει!'} image={'/carousel/teacher/lessons.jpg'} image_alt={'lessons'} data_value={1} icon={<FaBook/>} title={'Μαθήματα'} type={"teacher"}/>,
    <Card text={'Δημιούργησε ένα νέο βαθμολόγιο! Ανέβασε βαθμολογίες μαζικά ή μεμονομένα και είτε αποθηκευσέ τες προσωρινά είτε οριστικοποίησέ τες!'} image={'/carousel/teacher/grades.jpg'} image_alt={'grades'} data_value={2} icon={<GiScrollQuill/>}  title={'Βαθμολόγια'} type={"teacher"}/>,
    <Card text={'Εξερεύνησε τις ρυθμίσεις που προσφέρει η εφαρμογή μας. Προσάρμοσε την στις ανάγκες σου!'} image={'/carousel/student/settings.jpg'} image_alt={'settings'} data_value={3} icon={<MdSettings/>}  title={'Ρυθμίσεις'} type={"teacher"}/>,
    <Card text={'Η δικιά σου σελίδα βοήθειας για να εξερευνήσεις τις δυνατότητες της εφαρμογής με ασφάλεια!'} image={'/carousel/student/help.jpg'} image_alt={'help'} data_value={4} icon={<IoHelpCircleOutline/>}  title={'Βοήθεια'} type={"teacher"}/>,
    <Card text={'Προσάρμοσε το προφίλ σου και κάντο να ξεχωρίζει! Δες τις πληροφορίες σου, επεξεργάσου τες και αποθήκευσέ τες!'} image={'/carousel/student/profile.jpg'} image_alt={'profile'} data_value={5} icon={<FaUserCircle/>}  title={'Προφίλ'} type={"teacher"}/>
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