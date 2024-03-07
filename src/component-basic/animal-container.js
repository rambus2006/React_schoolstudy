import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

/*
{js 함수 표현식 }
1. function키워드 (이걸 많이 쓰긴 한다.)
2. 화살표함수 
  - {} 가 있으면 return 문이 꼭 있어야 하지만 없으면 안써도 된다. 
  - {}는 두줄 이상일 때 쓰긴 한다.(대신 이때 리턴문 꼭 있어야 한다.)
3. 변수에 대입하기 
*/
// 함수 선언식을 통해서 컴포넌트 정의 가능
function Cat() {
  return <div>🐱</div>;
}

// 함수 표현식을 통해서 컴포넌트 정의 가능
const Dog = function () {
  return <div>🐶</div>;
};

// 화살표 함수로 컴포넌트 정의 가능
const Pig = () => <div>🐷</div>;

//3개의 컴포넌트를 묶은 AnimalContainer
function AnimalContainer() {
  return (
    /* 컴포넌트와 일반적인 태그를 혼용해서 사용 가능 */
    // 뭔가를 그릴 때는 1개의 컴포넌트나 js요소밖에 못그린다.묶기만 하면된다.
    /*
      <div>를 안쓰고 싶은 경우 
      - section 태그나 div가 없어도 된다. 
      - 리액트에서 fragment 태그를 지원한다.(<></>)
         - 논리적으로만 몪어주는 것이다. (결과값에는 아무것도 안보인다.)
         - fragment 태그는 사실 <React.Fragement> 의 줄임이다. 
      (다만 <div> 태그를 더 많이 써서 묶는다.) 
      - 테이블 태그를 쓸 때 tr위에 반드시 td태그가 있어야 할 때 <>태그를 쓴다. 

    */
    <div style={{ fontSize: "100px" }}>
      {/* 이미 정의한 컴포넌트들도 JSX 내부에서 사용 가능 */}
      <Cat />
      <Dog />
      <Pig />
    </div>
  );
}

root.render(<AnimalContainer />, document.getElementById("root"));
