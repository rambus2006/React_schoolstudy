import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

//1.함수를 만들고 컴포넌트 이름을 지정해야 한다. 원래 함수는 대문자이면 안되지만
// 컴포넌트는 그렇게 해야한다.
/*
- 4~5년 전에는 클래스형 컴포넌트를 썼다. 현재는 함수형 컴포넌트로 바뀌었다. 
- 리액트 첫해에는 클래스형 컴포넌트들이 많이 나왔다. 선배한테 물어보니 함수형 컴포넌트로 바뀌었다고 해서 
  수업 폐기함
 */
function FirstComponent() {
  return <div>FirstComponent</div>;
}
//대문자 유의!!1
function SecondComponent() {
  return <div>Hello, World!</div>;
}
//컴포넌트는 태그쓰듯이 그려줘야 한다.
root.render(
  // 꼭 div로 묶어줘야 한다. (컴포넌트 2개 쓸 때 )
  <div>
    <FirstComponent />
    <SecondComponent />
  </div>
);
