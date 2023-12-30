import React, {useState} from 'react';
import AccordionElement from "./AccordionElement";
import './HelpEntityBody.css';


function HelpEntityBody({faqs, setFaqs, toggleFAQ}) {

    return (
        <div>
            <h2 className={"intro"}>Πως μπορώ...</h2>
            <div className="faqs">
                {faqs.map((faq, index) => (
                    <AccordionElement faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                ))}
            </div>
        </div>
    );
}

export default HelpEntityBody;