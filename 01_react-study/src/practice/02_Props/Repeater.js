import React,{createElement, useState} from 'react';

import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"));


const Repeater = ({text,repeat}) => {
    /*
    let newli = document.createElement("li") //document 쓰면 x 
    let ul = document.getElementsByTagName("ul")
    let arr=[]
    for(let i=0;i<repeat;i++){
        arr[i] = newli.innerText=text;
        
        // newli.innerText = text
       ul.appendChild()
    }
    */
    let arr=[]
    for(let i=0;i<repeat;i++){
        arr[i] = <li>{text}</li>
    }

    return(
            <ul>
                {arr}
            </ul>
    )
}
root.render(
    <div>
        <Repeater text="Hello" repeat={5} />

    </div>)