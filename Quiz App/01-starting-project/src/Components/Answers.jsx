import { useRef } from "react";

export default function Answers({answerState, selectedAns, answers, onSelect}) {
   const shuffleAns = useRef();

    if(!shuffleAns.current){
   shuffleAns.current = [...answers];
  shuffleAns.current.sort(() => Math.random() - 0.5);
  }
    return (
          <ul id="answers">
          {shuffleAns.current.map((answer) => {
            const isSelected = selectedAns === answer;
            let cssClasses = "";
            if (answerState === 'answered' && isSelected) {
              cssClasses = "selected";
            }
            if (answerState === 'correct' || answerState === 'incorrect') {
              cssClasses = answerState
            } 

            return <li key={answer} className="answer">
              <button onClick={() => onSelect(answer)} className={cssClasses}>{answer}</button>
            </li>
          })}
        </ul>
    )
}