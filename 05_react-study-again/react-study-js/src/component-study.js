import React,{useState} from "react";
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById('root'))

/*
<컴포넌트>
1. 함수를 이용하여 컴포넌트 정의 
2. 함수의 이름이 대문자로 시작
3. JSX(=HTML)을 반환 
*/
function MyComponent(){
    return <div>Hello</div>
}
function MyPropsComponent(props){
    return <div>{props.a}{props.b}{props.c.a}</div>
}
function MyPropsComponent2({a,b}){
    return <div>{a} {b}</div>
}
// props의 name 문자열을 출력하는 NamePrint 컴포넌트 작성 
function NamePrint({name}){
    return <div>{name}</div>
}
//props: 인자값 
root.render(
<div>
    {/* <컴포넌트> */}
    {MyComponent() //이렇게 해도 Hello가 잘 나온다. 
    }
    {/* 이렇게 해도 잘 나온다. 사실 구조는 위와 같다.  */}
    <MyComponent/>  
    {/*<props> */}
    {MyPropsComponent({a:"hello",b:1234,c:{a:100}})}
    <MyComponent a="hello" b={1234} c={{a:100}}/>
    {/* 모든 타입의 문자열이나 숫자, 객체가 props로 들어갈 수 있지만, 중괄호로 꼭 감싸줘야 한다.(문자열은 생략가능) */}
    <MyPropsComponent2 a="hello" b={1234} c={{a:100}}/> 
    <NamePrint name="minseo"/>
    </div>
)