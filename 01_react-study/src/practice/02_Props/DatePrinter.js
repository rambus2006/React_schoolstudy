import React,{useState} from 'react';

import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"));


const DatePrinter = ({year,month,day}) => {

    return(
        <>
            <div>{year}/{month}/{day}</div>
        </>
    )
}
root.render(
    <div>
        <DatePrinter year="2024" month="3" day="29" />
    </div>)