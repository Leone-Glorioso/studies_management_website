import React, {useState} from 'react';
import HelpNavbar from "./HelpNavbar";
import HelpEntityBody from "./HelpEntityBody";

function HelpStudents(props) {
    const [faqs, setFaqs] = useState([
        {
            question: "How many programmers does it take to screw a lightbulb?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
            open: true
        },
        {
            question: "Who is the most awesome person?",
            answer: "You! The viewer!",
            open: false
        },
        {
            question:
                "How many questions does it take to makes a succesful FAQ Page?",
            answer: "This many!",
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };

    return (
        <div>
            <HelpNavbar/>
            <HelpEntityBody faqs={faqs} setFaqs={setFaqs} toggleFAQ={toggleFAQ}/>
        </div>
    );
}

export default HelpStudents;