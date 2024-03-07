import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

// props를 통해서 전달된 값에 접근 가능
// #함수표현식(걍 쌤마음)
// 저 인자의 이름은 에러가 나는 것은 아니지만 props라고 그냥 이름을 쓴다
const ComponentWithProps = function (props) {
  console.log(props); //console.log로 쓰기
  return <p>{JSON.stringify(props)}</p>; //객체를 표시(. 안찍고 그냥)
  //stringify 객체가 들어왔을 때 문자열로 표시해주는 메서드
};

//props값
//props 값은 고칠 수 없다.
//자바스크립트에서는 함수를 값으로 취급하므로 속성값으로 함수나 메소드도 전달할 수 있음
/*
const user = {} //상수는 대입을 방지한다. (user라는 객체에 대입이 안된다는 뜻)
// 가능(props값 안에 있는 속성값은 바꿀 수 있다.하지만 안건들이는 게 낫다.)(user.name객체에 대입한 것)
user.name = "John"
// 불가능 (Uncaught TypeError: Assignment to constant variable.)
user = {}
*/
/*
객체 비구조화 할당 
- const {a,b} = {a:"hello",b:'"React"}
- hello 값(오른쪽)이 왼쪽 상수에 대입됨 
배열 비구조화 할당
- const [a,b] = [1,"hello"]
- 오른쪽 1과 hello가 왼쪽 배열에 대입된다. 
*아래코드랑 다른건가?
 const { value1, value2, whatever } = props 
  return <p>{value1} {value2} {whatever}</p>
*/
/*
스프레드 문법 
- ComponentWithMultipleProps {...propsObj} />
propsObj의 객체를 분리해서 가져온다. 
스프레드 문법과 다른 점은?

propsObj안의 값을 가져올 때 propsObj.___이렇게 안써도 된다. 
*/
/*
/* 
autocomplete 기본값은 true 
<MyTextBox autocomplete />
//같은 의미 
<MyTextBox autocomplete={true} />
*/
/*
function func({a,b}){// 객체를 풀어버리는 것 
}
function func(a,b)는 그냥 값을 가져오는 것 
func({a:"hello",b:1234})
*/

function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}
function Age(props) {
  return <h3>your age is {props.age}</h3>;
}
root.render(
  <div>
    {/* value 속성도 아무거나 써도 된다.(사실 props 안에 value._______ 이렇게 접근할 수 있다.(객체로 접근하여 {value : Hello}이런 구조로 되어 있다. )) */}
    {/* 객체로 함수를 줄 수도 있다.  */}
    <ComponentWithProps value="Hello" /> {/* {"value":"Hello"} */}
    <ComponentWithProps value={1} />{" "}
    {/* {"value":1} 값을 출력하려면 props.value*/}
    <ComponentWithProps value={{ a: 1, b: "React" }} />{" "}
    {/* {"value":{"a":1,"b":"React"}} */}
    <ComponentWithProps value={() => {}} /> {/* {} */}
    {/*Q) 컴포넌트로 name 속성값을 전달하면 "Hello, {name}"을 내용을 출력하는 h1 요소가 있는 Greeting 컴포넌트 정의*/}
    <Greeting name="jon" />
    <Age age={1} />
  </div>
);
