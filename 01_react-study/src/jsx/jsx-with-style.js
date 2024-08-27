import ReactDOM from 'react-dom'  // ReactDOM 라이브러리에서 ReactDOM 모듈을 가져옵니다.
const root = ReactDOM.createRoot(document.getElementById("root"))  // id가 "root"인 DOM 요소에 React 애플리케이션을 렌더링할 root를 생성합니다.

function MyHeader() {
    // 스타일 관련 정보를 담은 객체 생성
    const mystyle = {
        color: "white",  // 텍스트 색상을 흰색으로 설정
        backgroundColor: "DodgerBlue",  // 배경색을 DodgerBlue로 설정
        padding: "10px",  // 패딩을 10px로 설정
        fontFamily: "Arial"  // 폰트를 Arial로 설정
    };
    return (
        <div>
            {/* 앞서 생성한 mystyle 객체를 전달 */}
            <h1 style={mystyle}>Let's add some style!</h1>  {/* mystyle 객체를 style 속성으로 전달하여 스타일을 적용합니다. */}
        </div>
    );
}

root.render(<MyHeader />)  // MyHeader 컴포넌트를 root 요소에 렌더링합니다.
