import React, {useState} from 'react';
import "./StartPage.css";
import StartPageHeader from "./StartPageHeader";
import {BiBook, BiCard, BiHelpCircle, BiUser} from "react-icons/bi";
import { Button } from 'primereact/button';
import ContentCarousel from "./ContentCarousel";
import ContentCarousel1 from "./ContentCarousel1";
import Card from "./Card";
import {AiFillLock} from "react-icons/ai";
import {FaBook, FaCertificate, FaRegBookmark, FaWpforms} from "react-icons/fa6";
import {FaScroll} from "react-icons/fa6";
import {BsBookmarkPlus, BsBookmarkPlusFill} from "react-icons/bs";
import {MdSettings} from "react-icons/md";
import {IoHelpCircleOutline} from "react-icons/io5";
import {FaChalkboardTeacher, FaUser, FaUserCircle, FaUserFriends} from "react-icons/fa";
import {GiScrollQuill} from "react-icons/gi";
import {useAuth} from "../Auth/AuthContext";

const items_0 = [
    <Card text={'Δες πληροφορίες σχετικά με:\n' +
        '\n' +
        'Μαθήματά,\n' +
        'Δηλώσεις,\n' +
        'Βαθμολογίες,\n' +
        'Πιστοποιητικά'} image={'bookcase_2.jpg'} image_alt={'bookcase'} data_value={1} icon={<FaUser/>} title={'Είσαι φοιτητής;'} type={"student"} link={'/student'}/>,
    <Card text={'Δες πληροφορίες σχετικά με:\n' +
        '\n' +
        'Μαθήματά,\n' +
        'Βαθμολογίες'} image={'bookcase_2.jpg'} image_alt={'bookcase'} data_value={2} icon={<FaUser/>} title={'Είσαι καθηγητής;'} type={"teacher"} link={'/teacher'}/>,
    <Card text={'Δες πληροφορίες σχετικά με:\n' +
        '\n' +
        'Φοιτητές,\n' +
        'Εκπαιδευτές,\n' +
        'Μαθήματα,\n' +
        'Δηλώσεις'} image={'bookcase_2.jpg'} image_alt={'bookcase'} data_value={3} icon={<FaUser/>} title={'Είσαι μέλος γραμματείας;'} type={"admin"}/>
];

const items_1 = [
    <Card text={'Δες πληροφορίες για τα μαθήματα που έχεις πάρει, αλλά και όσα μπορείς να πάρεις. Δες πληροφορίες όπως ποιοί καθηγητές τα έχουν πάρει, πόσες πιστωτικές μονάδες δίνουν και πολλά άλλα.'} image={'/carousel/student/lessons.jpg'} image_alt={'lessons'} data_value={1} icon={<FaBook/>} title={'Μαθήματα'} type={"student"} link={'/student/lessons'}/>,
    <Card text={'Δες τις βαθμολογίες από όλα σου τα μαθήματα! Μπορείς να τις εκτυπώσεις ή να τις εξάγεις σε pdf'} image={'/carousel/student/grades.jpg'} image_alt={'grades'} data_value={2} icon={<FaScroll/>}  title={'Βαθμολογίες'} type={"student"} link={'/student/grades'}/>,
    <Card text={'Δήλωσε τα μαθήματα που θες να παρακολουθήσεις! Μπορείς να κάνεις όσες δηλώσεις θες εντός της προθεσμίας άμα αλλάξεις την γνώμη σου!'} image={'/carousel/student/dhloseis.png'} image_alt={'dhloseis'} data_value={3} icon={<BsBookmarkPlusFill/>}  title={'Δηλώσεις'} type={"student"} link={'/student/forms'}/>,
    <Card text={'Έκδοσε πιστοποιητικά από τα διαθέσιμα είδη. Μπορείς ανά πάσα στιγμή να ελέγξεις την κατάσταση τους και να εκτυπώσεις όσα έχουν εγκριθεί'} image={'/carousel/student/certificate.jpg'} image_alt={'certificate'} data_value={4} icon={<FaCertificate/>}  title={'Πιστοποιητικά'} type={"student"} link={'/student/certificates'}/>,
    <Card text={'Η δικιά σου σελίδα βοήθειας για να εξερευνήσεις τις δυνατότητες της εφαρμογής με ασφάλεια!'} image={'/carousel/student/help.jpg'} image_alt={'help'} data_value={6} icon={<IoHelpCircleOutline/>}  title={'Βοήθεια'} type={"student"} link={'/student/help'}/>,
    <Card text={'Προσάρμοσε το προφίλ σου και κάντο να ξεχωρίζει! Δες τις πληροφορίες σου, επεξεργάσου τες και αποθήκευσέ τες!'} image={'/carousel/student/profile.jpg'} image_alt={'profile'} data_value={7} icon={<FaUserCircle/>}  title={'Προφίλ'} type={"student"} link={'/student/profile'}/>
];

const items_2 = [
    <Card text={'Δημιούργησε ένα νέο βαθμολόγιο! Ανέβασε βαθμολογίες μαζικά ή μεμονομένα και είτε αποθηκευσέ τες προσωρινά είτε οριστικοποίησέ τες!'} image={'/carousel/teacher/grades.jpg'} image_alt={'grades'} data_value={2} icon={<GiScrollQuill/>}  title={'Βαθμολόγια'} type={"teacher"} link={'/teacher/lessons'}/>,
    <Card text={'Η δικιά σου σελίδα βοήθειας για να εξερευνήσεις τις δυνατότητες της εφαρμογής με ασφάλεια!'} image={'/carousel/student/help.jpg'} image_alt={'help'} data_value={4} icon={<IoHelpCircleOutline/>}  title={'Βοήθεια'} type={"teacher"} link={'/teacher/help'}/>,
    <Card text={'Προσάρμοσε το προφίλ σου και κάντο να ξεχωρίζει! Δες τις πληροφορίες σου, επεξεργάσου τες και αποθήκευσέ τες!'} image={'/carousel/student/profile.jpg'} image_alt={'profile'} data_value={5} icon={<FaUserCircle/>}  title={'Προφίλ'} type={"teacher"} link={'/teacher/profile'}/>
];

const items_3 = [
    <Card text={'Δες όλoυς τους προπτυχιακούς, μεταπτυχιακούς και διδακτορικούς φοιτητές της σχολής και τις πληροφορίες τους!'} image={'/carousel/admin/students.jpg'} image_alt={'students'} data_value={1} icon={<FaUserFriends/>} title={'Φοιτητές'} type={"admin"}/>,
    <Card text={'Δες όλο το εκπαιδευτικό προσωπικό από διδάκτορες και ομότιμα μέλη εώς διδακτοτικό και μεταπτυχιακό προσωπικό!'} image={'/carousel/admin/teachers.jpg'} image_alt={'teachers'} data_value={2} icon={<FaChalkboardTeacher/>} title={'Εκπαιδευτές'} type={"admin"}/>,
    <Card text={'Δες όλα τα μαθήματα της σχολής! Πρόσθεσε μαθήματα, αφαίρεσε και προσάρμοσε τις πληροφορίες τους, όπως για παράδειγμα το ποιοί καθηγητές τα έχουν αναλάβει'} image={'/carousel/student/lessons.jpg'} image_alt={'lessons'} data_value={3} icon={<FaBook/>} title={'Μαθήματα'} type={"admin"}/>,
    <Card text={'Δες όλες τις αιτήσεις για πιστοποιητικά από φοιτητές! Έλεγξε τις πληροφορίες του φοιτητή και δώσε την έγκριση για την έκδοσή του!'} image={'/carousel/admin/aithseis.jpg'} image_alt={'aithseis'} data_value={4} icon={<FaWpforms/>} title={'Αιτήσεις'} type={"admin"}/>,
    <Card text={'Επεξεργάσου τις περιόδους δηλώσεων. Άνοιξε και κλείσε την τρέχουσα περίοδο ανάλογα!'} image={'/carousel/admin/dhloseis.jpg'} image_alt={'dhloseis'} data_value={5} icon={<FaRegBookmark/>} title={'Δηλώσεις'} type={"admin"}/>,
    <Card text={'Η δικιά σου σελίδα βοήθειας για να εξερευνήσεις τις δυνατότητες της εφαρμογής με ασφάλεια!'} image={'/carousel/student/help.jpg'} image_alt={'help'} data_value={6} icon={<IoHelpCircleOutline/>}  title={'Βοήθεια'} type={"admin"}/>,
    <Card text={'Δες το προφίλ της σχολής και άλλαξε τις πληροφορίες κατάλληλα!'} image={'/carousel/student/profile.jpg'} image_alt={'profile'} data_value={7} icon={<FaUserCircle/>}  title={'Προφίλ'} type={"admin"}/>
];


const StartPage = () => {

    const Auth = useAuth();
    const isLogged = Auth.userIsAuthenticated();
    const user = Auth.getUser();

    const onClickDo = (e) => {
        Auth.setWindow(true);
    }

    return (
        <div>
            <StartPageHeader/>

            <div className="lab-start">Γραμματείες Πανεπιστημίου Αθηνών</div>

            <div className="info-start">
                <div>Ο ιστοχώρος αυτός παρέχει υπηρεσίες σχετικές με φοιτητικά θέματα του Εθνικού και Καποδιστριακού Πανεπιστημίου Αθηνών.</div>
                <br/>
                <div>Εδώ φοιτητές, εκπαιδευτικό προσωπικό έχουν τη δυνατότητα άμεσης επικοινωνίας με την Γραμματέια, από οπουδήποτε στον κόσμο, άμεσα και γρήγορα!</div>
                <br/>
                {!isLogged && <div className="quest-start">Έχεις λογαρισμό πρόσβασης;<a className="login-link" onClick={onClickDo}>Συνδέσου</a></div>}
                {isLogged && user.type === 'student' && <div className="quest-start">Έξερεύνησε την <a className="login-link" href={'/student'}>σελίδα</a> σου</div>}
                {isLogged && user.type === 'teacher' && <div className="quest-start">Έξερεύνησε την <a className="login-link" href={'/teacher'}>σελίδα</a> σου</div>}
                <div>Αλλιώς, κατέβα για να μάθεις περισσότερα και να εξερευνήσεις τον ιστοχώρο.</div>
            </div>

            <div className="container_one">
                <h1>Γενικές πληροφορίες</h1>
            </div>
            <ContentCarousel1 items={items_0}/>

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
            {/*<a href={'/help'}>*/}
            {/*    <Button className={'button-round'}  tooltip="Σελίδα Βοήθειας" tooltipOptions={{ position: 'right' , className: 'toolTip', fontSize: '2rem', cursor: 'pointer', mouseTrack: true, mouseTrackTop: 15}}>*/}
            {/*        <BiHelpCircle/>*/}
            {/*    </Button>*/}
            {/*</a>*/}

            {/*<div id="popup-er" className="overlay">*/}
            {/*    <div className="popup">*/}
            {/*        <div className="content">*/}
            {/*            Κάποιο από τα στοιχεία σας ήταν λανθασμένο, παρακαλώ ξαναπροσπαθήστε.*/}
            {/*        </div>*/}
            {/*        <ul className="buttons1">*/}
            {/*            <li className="buttons-c1">*/}
            {/*                <a href="/"*/}
            {/*                   className="confirm">OK</a>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );
};

export default StartPage;