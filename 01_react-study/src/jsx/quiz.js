import ReactDOM from 'react-dom'  // ReactDOM 라이브러리에서 ReactDOM 모듈을 가져옵니다.
const root = ReactDOM.createRoot(document.getElementById("root"))  // id가 "root"인 DOM 요소에 React 애플리케이션을 렌더링할 root를 생성합니다.

// 사용자 목록을 담은 배열 생성
const users = [
  { name: "John", isKorean: false },  // 사용자 John, 한국인이 아님
  { name: "철수", isKorean: true },   // 사용자 철수, 한국인
  { name: "영희", isKorean: true },   // 사용자 영희, 한국인
  { name: "Sally", isKorean: false }  // 사용자 Sally, 한국인이 아님
]

// userList라는 JSX 요소 생성, 각 사용자에 대해 환영 메시지를 포함한 리스트 생성
const userList = <ul>
  {
    users.map((e, index) => {
      // 각 리스트 아이템에 고유한 key 속성을 추가하여 React가 효율적으로 업데이트할 수 있도록 함
      return <li key={index}>{(e.isKorean ? '환영합니다. ' : 'Welcome. ') + e.name}</li>;
    })
  }
</ul>

// userList를 화면에 렌더링
root.render(<div>
  {/* userList JSX 요소를 렌더링 */}
  {userList}
</div>)

// 주석 처리된 MyStyle 함수는 필요 시 사용할 수 있음
// function MyStyle() {
//   const mystyle = {
//     color: 'yellow',  // 텍스트 색상을 노란색으로 설정
//     fontSize: '20px'  // 글자 크기를 20px로 설정    
//   }
//   return <p style={mystyle}>Hello!</p>  {/* 위에서 정의한 스타일을 적용한 <p> 태그 생성 */}
// }

// root.render(
//   <MyStyle />  // MyStyle 컴포넌트를 root 요소에 렌더링
// )
