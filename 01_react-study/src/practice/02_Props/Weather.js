import React,{useState} from 'react';

import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"));

const Weather = ({city,temperature}) => {
    let color=""
    let text = ""
    if(temperature<=0){
        color="#0000ff"
        text="추움"
    }else if(temperature<=5){
        color="#00ffff"
        text="쌀쌀"
    }else if(temperature<=26){
        color="#000000"
        text="보통"
    }else{
        color="#ffa048"
        text="더움"
    }
    return(
        <>  
            <div>도시: {city} 온도 : {temperature}</div>
            <h1 style={{color:color}}>{text}</h1>
        </>
    )
    
}
root.render(
    <div>
      <Weather city="Seoul" temperature={26} />
    </div>)