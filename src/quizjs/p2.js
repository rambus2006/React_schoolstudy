//임의의 타입을 가진 임의의 값을 몇개 선언하고 임의의 리액트 요소 안에 중괄호
//이용하여 표시한 후 그 요소를 root 요소에 그려보기 (표현식 써보기 연습)
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

//배열사용
const arr = [10, 30, 40, 50];
const arrexprestion = <h1>{arr[1]}</h1>;

//객체 사용
const objectname = {
  name: "민서",
  age: "19",
  hakbon: "3307",
  class: "웹솔루션",
};
// const ul = (
//   <ul>
//     {objectname.map((item) => {
//       return <li>{item}</li>;
//     })}
//   </ul>
// );
root.render(<div>{arrexprestion}</div>);
