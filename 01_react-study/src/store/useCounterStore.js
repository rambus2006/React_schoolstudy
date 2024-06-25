import {create } from "zustand"

const useCounterStore = create(set =>({ 
    count:0,
    increment: () =>{
        //...state에는 increment,decrement,add 가 복사해 들어온다. 
        //set(state => ({ ...state,count:state.count + 1}))
        set(state => ({count:state.count + 1}))
    },
    decrement:() =>{
        set(state => ({count:state.count-1}))
    },
    add:(value)=>{
        set(state =>({count:state.count + value}))
    },
    //이전 값을 참조하지 않고 유지 하는 함수 
    set:(value)=>{
        set({count:value}) //이렇게 하면 객체 안에 들어있는 함수가 사라진다. 
    }
})) //보라색 부분이 객체 
export default useCounterStore