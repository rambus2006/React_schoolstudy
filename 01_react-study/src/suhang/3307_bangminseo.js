 // 3307 방민서 
import React, { useState, useContext, createContext } from "react"


const LangContext = createContext(String)

var myArray = [''];
const TimeRecord = (capacity) =>{

   return(
    <div>
        <button onClick={(new Date()).toISOString().replace("T", " ").substring(0, 19)}>기록</button>
    </div>
   )
}



const LangTransButton = ()=>{
   
}
const Welcome = () => {
    const welcomeString = {
        "eng": "You're Welcome.",
        "kor": "환영합니다."
        }
    const { Lang, setLang } = useContext(LangContext)

        const language = Lang === 'kor' ?
            setLang(welcomeString[0]) :
            setLang(welcomeString[1])
    return(
        <div >
            <button onClick={() => { language('kor') }}>한국어</button>
            <button onClick={() => { language('eng') }}>영어</button>
        </div>
    )
};



const Action = {
    ADD_TODO: 'ADD_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO'
}




const StateDemoComponent = function(props) {
    // 저장할 상태값과 관련된 제약이 없으므로 객체도 저장 가능
    const [state, setState] = useState("")
    
    return (
        <div>
            상품명<input type="text"/>
            가격<input type="text"/>
            <button onClick>추가</button>
        </div>
    )
}






const FirstQa = () => {

    return (
        <div>
            <TimeRecord capacity={5} />
            <Welcome.Provider>
                <LangTransButton/>
            </Welcome.Provider>


        </div>
    );
};

export default FirstQa;
