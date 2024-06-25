import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import useCounterStore from '../store/useCounterStore'
// import Zustand from 'zustand'
//import useCounterStore from '../store/useCounterStore'
const root = ReactDOM.createRoot(document.getElementById("root"))

function Counter(){
    //count 값 표시하고 
    //increment호출해주는 버튼 만들어서 연결 
    const count = useCounterStore(state => state.count)

    const increment = useCounterStore((state) => state.increment)
    
    const decrement = useCounterStore((state)=> state.decrement)
    
    const set = useCounterStore((state) => state.set)
    const add = useCounterStore((state) => state.add)

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={()=>set(5)}>set to 5</button>
            <button onClick={()=>add(10)}>add 10</button>
        </div>

    );
}
function ZustandApp(){
    //본질: 여러곳에서 접근이 가능 
    const count = useCounterStore(state => state.count)

    return <div>
        <h1>{count}</h1>
        <Counter/>
    </div>
}
root.render(<ZustandApp/>)