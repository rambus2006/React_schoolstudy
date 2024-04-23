import React from 'react';
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

//방법2. 매개변수에 {num1,num2,op} 를 넣는 것 
const Calculator = ({num1, num2,op}) => {
    //방법1. 상수로 풀어헤치는 방법 
    // const {num1, num2,op} = props
    let sum=0;
    if(op === "+"){
        sum = num1 + num2;
        return <h1>결과 : {num1} + {num2} = {sum}</h1>
    }else if(op ==="-"){
        sum= num1-num2;
        return <h1>결과 : {num1} - {num2} = {sum}</h1>
    }
    /*< 해설
     * if(op === "+") sum = num1 + num2;
       else if(op ==="-") sum= num1-num2;
       return (
        <h1>{num1} {op} {num2} = {sum}
       )

       - 만약 op를 이상하게 준 경우 
     */
    // 예외처리 
    if(num1 ===null || num1 === undefined
        || num2 ===null || num2 ===undefined){
            return <div>num1,num2가 없습니다.</div>
    }
    if(sum===null){
        return <div>게산을 할 수없습내ㅣ다. 제대로된 연산자를 입력하세요. </div>
    }
    
   
};

root.render(
    <div>
      {/* <ComponentWithProps value="Hello" />
      <ComponentWithProps value={1} />
      <ComponentWithProps value={{ a: 1, b: "React" }} />
      <ComponentWithProps value={() => { }} /> */}
      <Calculator num1={1} num2={2} op="+" />
      <Calculator num1={1} num2={2} op="-" />
    </div>)