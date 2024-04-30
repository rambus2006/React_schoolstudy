import React,{useState} from 'react';

import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"));


const ColorList = ({colors}) => {
    const styleComponent = {
        width:"100px",
        height:"100px",
    }
    let arr = [];
    for(let i=0;i<colors.length;i++){
        arr[i] = <div style={{ ...styleComponent,backgroundColor:colors[i]}}></div>
        //...문법을 통해서 styleComponent 를 복사를 해서 backgroudColor를 덮어 씌워서 수정한다. 
    }
    return(
        <>
            {arr}
        </>
    )
}
root.render(
    <div>
        <ColorList colors={["#FF0000", "#00FF00", "#0000FF"]} />
    </div>)