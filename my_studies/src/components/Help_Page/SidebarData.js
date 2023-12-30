import React from 'react';
import {FaGraduationCap, FaUser} from "react-icons/fa";
import {HiMiniBuildingLibrary} from "react-icons/hi2";
import {AiFillHome} from "react-icons/ai";

export const SidebarData = [
    {
        title: 'Αρχική',
        path: '/help',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Φοιτητές',
        path: '/help/student',
        icon: <FaUser />,
        cName: 'nav-text'
    },
    {
        title: 'Εκπαιδευτικοί',
        path: '/help/teacher',
        icon: <FaGraduationCap/>,
        cName: 'nav-text'
    },
    {
        title: 'Γραμματεία',
        path: '/help/admin',
        icon: <HiMiniBuildingLibrary/>,
        cName: 'nav-text'
    }
];