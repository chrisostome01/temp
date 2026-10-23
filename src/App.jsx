import { useState } from "react";
import {FaqItem} from "./components/faq";
import "./App.css";


function App() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "How do I reset my password?",
      answer: "Go to Settings > Security and click Reset Password.",
    },
    {
      id: 2,
      question: "Can I change my email?",
      answer:
        "Yes, under Settings > Account, update your email and confirm it.",
    },
    {
      id: 3,
      question: "How do I cancel my subscription?",
      answer:
        "Go to Billing and click Cancel Plan. You'll keep access until the period ends.",
    },
    {
      id: 4,
      question: "Is there a mobile app?",
      answer:
        "Yes, it's available on iOS and Android, search for the app name in either store.",
    },
  ]);

  return (
    <>
      <section id="center">

      


      {
        faqs.map(faq => {
          return (
           <FaqItem question={faq.question} answer={faq.answer}  />
          )
        })
      }

        
      
      </section>
    </>
  );
}

export default App;
