import React,{useState} from 'react';

import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"));

const StyleElement = (props) => {

    return <p style={{color:"yellow", fontSize: "20px"}}>Hello!</p>
}
root.render(
    <div>
        <StyleElement/>
    </div>)