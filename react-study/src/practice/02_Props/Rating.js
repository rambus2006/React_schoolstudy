import React,{useState} from 'react';

import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"));


const Rating= ({rating}) => {
    let ratingorg = Math.floor(rating)
    let arr=[];
    for(let i=0;i<ratingorg;i++){
        arr[i]="★"
        
    }
    if((rating%ratingorg)==0.5){
        arr.push("☆")
       
    }
    
    return(
        <>
            {arr}
        </>
    )
}
root.render(
    <div>
       <Rating rating={3.5} />
    </div>)