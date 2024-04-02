//사용자에게 질문을 보여주는 컴포넌트 
import { useCallback, useState } from 'react';
import QUESTIONS from '../../questions';
import QuestionTimer from './QuestionTimer.jsx';
import quizCompleteImg from'../assets/quiz-complete.png';

export default function Quiz(){
    // const [activeQuestionIndex,setActiveQuestionIndex]=useState(0);
    
    const[answerState,setAnswerState] = useState('');
    const [userAnswers,setUserAnswers] = useState([]);

    //12-6. 이전 질문에 있도록
    const activeQuestionIndex =
     answerState === '' ? userAnswers.length : userAnswers.length-1;

    //12-4.퀴즈가 끝났는지 확인해주는 상수: activeQuestionIndex가 QUESTIONS.length와 같을 때 true를 반환한다. 
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setAnswerState('answered');
        setUserAnswers((prevUserAnswers)=>{
            return [...prevUserAnswers,selectedAnswer]
        });
        setTimeout(()=>{
            //답이 맞는지 확인 
            if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
                setAnswerState('conrect');
            }else{
                setAnswerState('wrong');
            }

            setTimeout(()=>{
                setAnswerState('');
            },2000)
        },1000);
    },[activeQuestionIndex]); //activeQuestionIndex는 계속 재생성되어야 하기 때문
    // 전의 했던 질문들을 잃지 않고 증명된 가장 최신의 상태를 가지도록 하는 함수 
    const handleSkipAnswer = useCallback(()=> handleSelectAnswer(null),[handleSelectAnswer]);

    //12-4.만약 퀴즈가 다 끝났을 때 
    if(quizIsComplete){
        return <div id="summary">
            <img src={quizCompleteImg} alt='Trophy icon'/>
            <h2>Quiz Complete</h2>
        </div>
    }
    //셔플해주는 작업 
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(()=>Math.random()-0.5);


    return(
        <div id='quiz'>
            <div id='question'>
                <QuestionTimer
                    key={activeQuestionIndex}
                    timeout={10000} onTimeout={handleSkipAnswer} //타이머는 밀리초, ontimeout은 재실행되는 함수인데 안넣는 실수를 했다. 
                    
                />
                    <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                    <ul id='answers'>
                    {shuffledAnswers.map((answer)=>{
                        const isSelected = userAnswers[userAnswers.length-1] ===answer;
                        let cssClass = '';
                        if(answerState ==='answered' && isSelected){
                            cssClass = 'selected';
                        }
                        if((answerState == 'correct'||answerState ==='wrong') && isSelected){
                            cssClass = answerState;
                        }
                        return <li key={answer} className='answer'>
                        <button onClick={()=>handleSelectAnswer(answer)} className={cssClass}>{answer}</button>
                        </li>
                    })}
                    
                    </ul>
            </div>
        </div>
    )

    }    