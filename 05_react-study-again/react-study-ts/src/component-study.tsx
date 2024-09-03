import React,{useState} from "react";
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement) //HTML 태그는 언제나 있기 때문에 html 로 강제 형 변환을 해도 오류가 나지 않는다. 

function MyComponent(){
    return <div>Hello</div>
}
//interface로 속성을 정의 
interface MyPropsType{
    a:number;
    b:string;
}

// props로 속성을 정의 
// 하늘색 props의 타입은 MyPropsType
//JSX:jsx를 반환 
// const MyPropsComponent: React.FC<MyPropsType> = (props):JSX.Element =>{
//     return <div></div>
// }
const MyPropsComponent: React.FC<MyPropsType> = (props) =>{
    return <div>{props.a} {props.b}</div>
}
// UserProfile 컴포넌트를 정의하고 UserProfileProps 타입 정의해서 props값으로 전달받게 하고 (name, age,address 데이터를 전달 가능)
//방법1
interface UserPropsType{
    name:string;
    address?:string;
}
const UserProfile: React.FC<UserPropsType> = (props) =>{
    return(
        <div>
            <div>{props.name}</div>
            <div>{props.address}</div>
        </div>
       
    );
}
//방법2
function UserProfile2({name,address}:UserPropsType){
    return(
        <div>
            <div>{name}</div>
            <div>{address}</div>
        </div>
       
    );
}
//-------------------------------------------------------------
//Q) 밑의 타입을 정의 한다면 
interface ProductInfo{
    id:string;
    manufacturer:string;
}
interface ProductProps{
    num:number;
    product:ProductInfo;
}
// :any 아무거나 다 들어갈 수 있다. 
// const productProps:any = {
//     n:"1234",
//     product:{id:1234,manufacturer:1234}
// }
const productProps:ProductProps = {
    num:1234,
    product:{id:"A1234",manufacturer:"Samsung"}
}
//함수 타입 
interface CalcProps{
    calcFn:(op1:number,op2:number) => number; //입력값은 2개, 둘 다 타입은 number, 반환값은 number
    fn?:()=> void; //줘도 되고 안줘도 되는 함수 
}
function Calculator({calcFn,fn}:CalcProps){
    return <div>
        {calcFn(2,3)}
        <button onClick={fn}>Click</button>
    </div>
}

//props: 인자값 
root.render(
<div>
    <MyComponent/>  
    {/* a가 문자열이거나, b가 없는 경우 에러가 난다.  */}
    <MyPropsComponent a={100} b="hello"/>
    <UserProfile name="minseo" address=""/>
    <UserProfile2 name="minseo" address="hello"/>
    {/* 타입이 모두 number가 된다.  */}
    <Calculator calcFn={(a,b)=> a+b} fn={()=>alert("!")}/> 
    <Calculator calcFn={(a,b)=> a*b}/> 
    </div>
)