import React, { useState } from "react";
import "./Faqs.css";

const Faqs = () => {
  return (
    <div className="faq-toggle">
      <div className="faq">
        {faqData.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div
        className="faq-question"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{question}</span>
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      <div className={`faq-answer ${isOpen ? "visible" : "hidden"}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const faqData = [
  { question: "Q: Does this come in right-handed and left-handed configurations?", answer: "A: No, the VNSH holster is a true ambidextrous holster." },
  { question: "Q: Will This Work With My Laser Sights or a Mounted Light?", answer: "A: Depending on the light or sight you are using, it may fit." },
  { question: "Q: Will this work for my revolver?", answer: "A: The holster will fit most compact revolvers." },
  { question: "Q: Do I Need a Belt? How Does It Connect Around The Waist?", answer: "A: NO! The holster has a built in Waist Band. It secures around your waist with built-in, high quality molded velcro. You do not need a belt... or anything else for that matter. You could even wear it naked if you wanted too. ;)", },
  { question: "Q: My Semi-automatic Isn't Listed Above. Will it fit?", answer: "A: Yes, all semi-automatic firearms fit. In fact, that is what our design is specifically set for. This is the only holster on the market that will fit any semi-automatic firearm. The exception is the C.O.R.E. series from Smith and Wesson.", },
  { question: "Q: Will My Magazines Fit in the Pouches?", answer: "A: Yes, all magazines for all semi-automatics will fit in any or all of the two magazine pouches.", },
  { question: "Q: Does this holster work with slide-mounted optics (Red dots, etc)?", answer: "A: In most cases no, though some smaller, sub-compact weapons may work with a slide-mounted optic. If you want to try the holster out with your optic and it doesn’t work, please remember we offer an any-reason return policy for the first 60-days you own the holster.", },
];

export default Faqs;
