import React, {useState} from 'react';
import Sidebar from "../Navbar_Sidebar/Sidebar";
import HelpEntityBody from "../../Help_Page/HelpEntityBody";

function TeacherHelp(props) {

    const [faqs, setFaqs] = useState([
        {
            question: "Πως μπορώ να περάσω βαθμούς σε κάποιο μάθημα;",
            answer:
                "Για να περάσεις βαθμούς αρχικά πρέπει να μπεις στη σελίδα 'Βαθμολόγια' των καθηγητών. Έπειτα μπορείς να επιλέξεις το μάθημα για το οποίο ενδιαφέρεσαι και ανάλογα να δημιουργήσεις ένα νέο βαθμολόγιο ή να επεξεργαστείς κάποιο υπάρχον. Μπορείς να ανεβάσεις πολλούς βαθμούς μαζί σε μορφή αρχείου επιλέγοντας 'Πολλαπλή βαθμολόγηση' ή ατομικά επιλέγοντας '+'. Τέλος, επιλέγεις αν θέλεις να αποθηκεύσεις προσωρινά το βαθμολόγιό σου, ή να το υποβάλεις οριστικά. Για την ολοκλήρωση της διαδικασίας αυτής θα πρέπει να είσαι μέλος του εκπαιδευτικού προσωπικού και να έχεις συνδεθεί στην πλατφόρμα. ",
            open: true
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
            <Sidebar/>

            <HelpEntityBody faqs={faqs} setFaqs={setFaqs} toggleFAQ={toggleFAQ}/>
        </div>
    );
}

export default TeacherHelp;