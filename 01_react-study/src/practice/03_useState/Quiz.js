import React, { useState } from 'react';

const data = [
    {
        "title": "대한민국의 수도는?",
        "options": ["서울", "대구", "대전", "부산"],
        "answer": "서울"
    },
    {
        "title": "세계에서 가장 큰 강은?",
        "options": ["아마존 강", "남산 강", "한강", "미시시피 강"],
        "answer": "아마존 강"
    }
];

function Quiz({ data }) {
    const [selectedOption, setSelectedOption] = useState('');
    const [showResult, setShowResult] = useState(false);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const checkAnswer = () => {
        setShowResult(true);
    };

    return (
        <div>
            <h3>{data.title}</h3>
            <ul>
                {data.options.map((option, index) => (
                    <li key={index} onClick={() => handleOptionSelect(option)}>
                        {option}
                    </li>
                ))}
            </ul>
            <button onClick={checkAnswer}>정답 확인</button>
            {showResult && (
                <p>
                    정답은 {data.answer === selectedOption ? '맞았습니다!' : '틀렸습니다!'}
                </p>
            )}
        </div>
    );
}

function QuizApp() {
    return (
        <div>
            {data.map((quiz, index) => (
                <Quiz key={index} data={quiz} />
            ))}
        </div>
    );
}

export default QuizApp;
