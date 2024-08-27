import ReactDOM from 'react-dom/client'  // ReactDOM 라이브러리에서 ReactDOM 모듈을 가져옵니다. React 18+ 버전에서는 'react-dom/client'를 사용합니다.
const root = ReactDOM.createRoot(document.getElementById("root"))  // id가 "root"인 DOM 요소에 React 애플리케이션을 렌더링할 root를 생성합니다.
// 루트 요소를 생성하여 밑에서 root.render() 메서드를 호출할 수 있게 준비합니다.

// 하나의 함수가 컴포넌트가 됨 (React 컴포넌트는 함수 이름을 대문자로 시작하여 명명합니다.)
function FirstComponent() {
  // FirstComponent라는 함수형 컴포넌트를 정의합니다.
  return <div>First Component</div>  // JSX를 반환하여 화면에 "First Component" 텍스트를 표시하는 <div> 요소를 생성합니다.
}

function HelloWorld() {
  // HelloWorld라는 함수형 컴포넌트를 정의합니다.
  return <h1>Hello, World!</h1>  // JSX를 반환하여 화면에 "Hello, World!" 텍스트를 표시하는 <h1> 요소를 생성합니다.
}

root.render(
  <div>
    {/* HelloWorld 컴포넌트를 두 번 렌더링하여 화면에 두 개의 "Hello, World!"를 표시합니다. */}
    <HelloWorld />
    <HelloWorld />
  </div>
)
