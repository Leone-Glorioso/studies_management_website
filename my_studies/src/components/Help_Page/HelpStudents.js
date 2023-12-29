import React from 'react';
import HelpNavbar from "./HelpNavbar";
import HelpStudentsBody from "./HelpStudentsBody";
import {MantineProvider} from "@mantine/core";

function HelpStudents(props) {
    return (
        <>
            <HelpNavbar/>
            <HelpStudentsBody/>
        </>
    );
}

export default HelpStudents;