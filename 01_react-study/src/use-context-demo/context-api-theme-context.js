import React, { useState, useContext, createContext } from "react"
import ReactDOM from "react-dom"

const ThemeContext = createContext(null)

const ThemeConsumeComponent = (props) => {
    // Context를 통해서 전달받은 값과 세터 대입
    // useContext(ThemeContext) 를 하면 객체 theme과 setTheme이 튀어나오기 때ㅐ문에 비구조화 할당해서 받는다. 
    const { theme, setTheme } = useContext(ThemeContext) //안에 있는 객체값이 바뀌기만 하면 리랜더링 된다.


    const themeStyle = theme === 'light' ?
        { color: 'black', backgroundColor: 'white', padding: '20px' } :
        { color: 'white', backgroundColor: 'black', padding: '20px' }

    return (
        <div style={themeStyle}>
            <h1>ThemeConsumeComponent { theme === 'light' ? '🌞' : '🌙' }</h1>
            <p>currentTheme : { theme }</p>
            <button onClick={() => { setTheme('light') }}>light</button>
            <button onClick={() => { setTheme('dark') }}>dark</button>
        </div>
    )
}

function App() {
    // 1.Provider를 통해 전달할 값과 세터 생성
    const [ theme, setTheme ] = useState('light')

    return (
        // 2.
        <ThemeContext.Provider value={ { theme, setTheme } }>
            {/* useState 훅을 이용하여 반환받은 값과 세터 함수를 Provider를 통해 Context 값으로 전달*/}
            {/* theme과 setTheme에 접근 가능 */}
            {/* provider 보자기안에 value 가 감싼 구조이다.그리고 안에 있는 Theme 컴포넌트는 밖에 있는 provider 에 몇겹이든 밖에 있는 건 모두 접근할 수 있다.  */}
            <ThemeConsumeComponent />
        </ThemeContext.Provider>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));