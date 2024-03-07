// 다음과 같이 임의의 리액트 요소를 하나 정의하고 root 요소에 그려보기 (가급적 태그 바구고, 내용도 바꿔보기 )
import ReactDOM from "react-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

const e1 = <p>hello</p>;
const e2 = <h1>subtitle</h1>;

root.render(
  <div>
    {e1}
    {e2}
  </div>
);
