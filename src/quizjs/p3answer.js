import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

let myNumber = 4;
function isEven(num) {
  return num % 2 === 0;
}
const users = [
  //자바스크립트 객체를 리스트로 바꾸는 것이 목표
  { name: "John", isKorean: false },
  { name: "철수", isKorean: true },
  { name: "영희", isKorean: true },
  { name: "Sally", isKorean: false },
];
const userList = (
  <ul>
    {/* 괄호 안에 객체가 한개씩 들어온다.  */}
    {users.map((user) => {
      return user.isKorean ? (
        <li>안녕하세요{user.name}</li>
      ) : (
        <li>welcome{user.name}</li>
      );
    })}
  </ul>
);
root.render(
  // <div>{isEven(myNumber) && <h1>짝수는 사용할 수 없습니다.</h1>}</div>
  //삼항연산자를 이용하여 다음 상황으로 고쳐보기
  <>
    isEven(myNumber) ? <h1>짝수입니다.</h1> : <h1>홀수입니다.</h1>,
    <div>{userList}</div>
  </>
);
