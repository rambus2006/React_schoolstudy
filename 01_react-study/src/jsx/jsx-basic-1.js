import ReactDOM from 'react-dom' // ReactDOM을 가져옵니다. ReactDOM은 React 요소를 실제 DOM에 렌더링하는 데 사용됩니다.
const root = ReactDOM.createRoot(document.getElementById("root")) // React 요소를 렌더링할 root를 생성하고, id가 "root"인 DOM 요소를 사용합니다.

const name = "Hwang Seulgi" // "Hwang Seulgi"라는 문자열을 변수 name에 할당합니다.
const element = <h1>Hello, {name}</h1> // JSX 요소를 생성합니다. h1 태그 안에 "Hello, Hwang Seulgi"가 렌더링됩니다.

const lst = [100, 200, 300] // 숫자 100, 200, 300이 들어있는 배열 lst를 선언합니다.
const person = {
    name: 'Seulgi', // person 객체의 name 속성은 'Seulgi'입니다.
    age: 20 // person 객체의 age 속성은 20입니다.
}
function double(value) {
    return value * 2 // 전달된 값 value의 두 배를 반환하는 함수입니다.
}

const JSXwithExpressions = (
    <h1>
        {lst[0]} {/* lst 배열의 첫 번째 요소인 100을 출력합니다. */}
        &nbsp;{person.name} {/* person 객체의 name 속성값인 'Seulgi'를 출력합니다. */}
        &nbsp;{person.age} {/* person 객체의 age 속성값인 20을 출력합니다. */}
        &nbsp;{2 + 2} {/* 2 + 2의 결과인 4를 출력합니다. */}
        &nbsp;{person.name.toUpperCase()} {/* person.name을 모두 대문자로 변환한 'SEULGI'를 출력합니다. */}
        &nbsp;{person.name.length} {/* person.name 문자열의 길이인 6을 출력합니다. */}
        &nbsp;{double(person.age)} {/* person.age를 두 배로 한 값인 40을 출력합니다. */}
    </h1>)

root.render(
  <div>
    {element} {/* "Hello, Hwang Seulgi"가 표시된 h1 요소를 렌더링합니다. */}
    {JSXwithExpressions} {/* 다양한 자바스크립트 표현식 결과를 포함한 h1 요소를 렌더링합니다. */}
  </div>
)
