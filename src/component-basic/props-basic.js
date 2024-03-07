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
root.render(
  <div>
    {/* value 속성도 아무거나 써도 된다.(사실 props 안에 value._______ 이렇게 접근할 수 있다.(객체로 접근하여 {value : Hello}이런 구조로 되어 있다. )) */}
    {/* 객체로 함수를 줄 수도 있다.  */}
    <ComponentWithProps value="Hello" />
    <ComponentWithProps value={1} />
    <ComponentWithProps value={{ a: 1, b: "React" }} />
    <ComponentWithProps value={() => {}} />
  </div>
);
