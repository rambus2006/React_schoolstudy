import React,{useState} from 'react';

import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"));


function Alerter({label,onAlert}){
    return(
        <input type='button' value={label} onClick={onAlert}/>
    )
}
function App(props) {
    const handleAlert = () => { alert("경보~!") }
    return <Alerter label="경보" onAlert={handleAlert} />
}

root.render(
    <div>
       <App/>
    </div>)