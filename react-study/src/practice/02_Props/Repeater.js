import React,{createElement, useState} from 'react';

import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"));


const Repeater = ({text,repeat}) => {
    
    let newli = document.createElement("li")
   
    for(let i=0;i<repeat;i++){
        newli.innerText = text
        document.body.appendChild(newli)
    }

    return(
        <>
            <ul>
                
            </ul>
        </>
    )
}
root.render(
    <div>
        <Repeater text="Hello" repeat={5} />

    </div>)