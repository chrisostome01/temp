import { useState } from "react";

export function FaqItem({ question, answer }) {
  const [showAnswer, setShowAnwser] = useState(false);

  return (
    <div>
      <h4
        onClick={() => {
          setShowAnwser(true);
        }}
      >
        {question}
      </h4>
      {showAnswer === true ? <p> {answer} </p> : <p></p>}
    </div>
  );
}
