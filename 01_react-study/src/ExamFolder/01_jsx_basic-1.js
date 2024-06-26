import ReactDOM from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById("root"))

const name = "Hwang Seulgi"
// 변수 내용 삽입 가능
const element = <h1>Hello, {name}</h1>

// 표현식 내부에서 배열, 객체 참조도 가능하며 수식 사용 및 함수, 메소드 사용도 자유로움
const lst = [100, 200, 300]
const person = {
    name: 'Seulgi',
    age: 20
}
function double(value) {
    return value * 2
}

// 내부에서 배열, 객체 참조도 가능하며 수식 사용 및 함수, 메소드 사용도 자유로움 
//(자바스크립트 표현식을 모두 사용 가능, 단, if 구문이나 for 구문은 사용 불가)
const JSXwithExpressions = (
    <h1>
        {lst[0]}
        &nbsp;{person.name}
        &nbsp;{person.age}
        &nbsp;{2 + 2}
        &nbsp;{person.name.toUpperCase()}
        &nbsp;{person.name.length}
        &nbsp;{double(person.age)}
    </h1>)

// render 메서드로 요소 그려주기

// 자동으로 ;을 붙여줘서 {} (중괄호)를 넣어줘야함
root.render(<div>
  {element}  
  {JSXwithExpressions}
</div>)
