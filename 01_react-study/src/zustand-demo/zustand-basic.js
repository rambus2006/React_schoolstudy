import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import useCounterStore from '../store/useCounterStore'
import usePersonStore from '../store/usePersonStore'
// import Zustand from 'zustand'
//import useCounterStore from '../store/useCounterStore'
const root = ReactDOM.createRoot(document.getElementById("root"))


function logCount(){
    const count = useCounterStore.getState().count
    console.log(count)
}
function incCount() {
    // 1. setState 메서드 호출하여 이전 상태값에 참조하여 값 바꾸기
    useCounterStore.setState(state => ({ count: state.count + 1 }))
    
    // 2. 이전 값을 참조할 필요 없으면 다음과 같이 사용 가능
    // useCounterStore.setState({ count: 100 })
    
    // 3. 다음과 같이 상태 변경 함수를 가져와서 호출해도 됨
    // const increment = useCounterStore.getState().increment
    // increment()
}

function Counter(){
    //count 값 표시하고 
    //increment호출해주는 버튼 만들어서 연결 
    const count = useCounterStore(state => state.count)

    const increment = useCounterStore((state) => state.increment)
    
    const decrement = useCounterStore((state)=> state.decrement)
    
    const set = useCounterStore((state) => state.set)
    const add = useCounterStore((state) => state.add)
    const incrementAsync = useCounterStore((state)=>state.incrementAsync)
    // const {count,increment,decrement,set,add} = useCounterStore((state)=>state)
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={()=>set(5)}>set to 5</button>
            <button onClick={()=>add(10)}>add 10</button>
            <button onClick={incrementAsync}>+ (aysnc)</button>
            <button onClick={logCount}>log</button>
            <button onClick={incCount}>incCount</button>

        </div>

    );
}


//실습 컴포넌트 
function PersonName(){

    const [firstNameValue,setFirstNameValue] = useState("")
    const [lastNameValue,setLastNameValue] = useState("")

    const firstName = usePersonStore(state => state.firstName)
    const lastName = usePersonStore(state => state.lastName)

    const updateFirstName = usePersonStore(state => state.updateFirstName)
    const updateLastName = usePersonStore(state=>state.updateLastName)

    return(
        <div>
            <h1>성: {firstName}</h1>
            <h1>이름: {lastName}</h1>
            성<input type="text" value={firstNameValue} onChange={e => setFirstNameValue(e.target.value)}/><br/>
            이름<input type="text" value={lastNameValue} onChange={e => setLastNameValue(e.target.value)}/><br/>
            <button onClick={()=>{
                updateFirstName(firstNameValue)
                updateLastName(lastNameValue)
            }}>입력</button>
        </div>
    )
}






function ZustandApp(){
    //본질: 여러곳에서 접근이 가능 
    const count = useCounterStore(state => state.count)

    const firstName = usePersonStore(state => state.firstName)
    const lastName = usePersonStore(state => state.lastName)
    return <div>
        {/* <h1>{count}</h1>
        <Counter/> */}
        
        <PersonName/>
    </div>
}
root.render(<ZustandApp/>)