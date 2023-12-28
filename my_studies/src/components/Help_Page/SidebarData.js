import React from 'react';
import {FaGraduationCap, FaUser} from "react-icons/fa";
import {HiMiniBuildingLibrary} from "react-icons/hi2";
import {AiFillHome} from "react-icons/ai";

export const SidebarData = [
    {
        title: 'Αρχική',
        path: '/',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Φοιτητές',
        path: '/reports',
        icon: <FaUser />,
        cName: 'nav-text'
    },
    {
        title: 'Εκπαιδευτικοί',
        path: '/products',
        icon: <FaGraduationCap/>,
        cName: 'nav-text'
    },
    {
        title: 'Γραμματεία',
        path: '/team',
        icon: <HiMiniBuildingLibrary/>,
        cName: 'nav-text'
    }
];