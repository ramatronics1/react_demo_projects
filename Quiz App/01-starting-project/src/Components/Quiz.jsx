import { act, useCallback, useRef, useState } from "react"
import QUESTION from '../questions.js'
import logos from '../assets/quiz-complete.png'
import Question from "./Question.jsx";

export default function Quiz() {
  //    const [activeQuestion, setActiveQuestion] = useState(0);
  const [userAns, setUserAns] = useState([]);
  const [answerState, setAnswerState] = useState('');
 
  const activeQuestionIndex = answerState === '' ? userAns.length : userAns.length - 1;

  const quizCompleted = activeQuestionIndex === QUESTION.length;


  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAns) {
    setAnswerState('answered');
    setUserAns((prevAns) => {
      return [...prevAns, selectedAns]
    });
    setTimeout(() => {
      if (selectedAns === QUESTION[activeQuestionIndex].answers[0]) {
        setAnswerState('correct');
      } else {
        setAnswerState('incorrect');
      }

      setTimeout(() => {
        setAnswerState('');
      }, 2000);

    }, 1000)
  }, [activeQuestionIndex]);

  const handleskipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if (quizCompleted) {
    return <div id="summary">
      <img src={logos} alt="Success" />
      <h2>Comleted</h2></div>
  }




  return (
    <div id="quiz">
    <Question key={activeQuestionIndex} answers={QUESTION[activeQuestionIndex].answers} questionText={QUESTION[activeQuestionIndex].text} onSelect ={handleSelectAnswer} answerState={answerState} selectedAns={userAns[userAns.length - 1]} onSkipAnswer = {handleskipAnswer}/>
    </div>
  );
}