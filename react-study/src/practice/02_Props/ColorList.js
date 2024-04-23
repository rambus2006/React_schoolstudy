import React,{useState} from 'react';

import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"));


const ColorList = ({colors}) => {
    const styleComponent = {
        width:"100px",
        height:"100px"
    }
    <div style={{styleComponent}}></div>
    return(
        <>
            
        </>
    )
}
root.render(
    <div>
        <ColorList colors={["#FF0000", "#00FF00", "#0000FF"]} />
    </div>)