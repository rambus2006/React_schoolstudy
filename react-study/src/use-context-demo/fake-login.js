import React, { useState, useContext, createContext } from "react"
import ReactDOM from "react-dom"

//1. 로그인 사용자 정보 저장 
const LoginUserContext = createContext(null)

function LoginButton(props) {
    // 비구조화 할당시, loginUser 정보가 필요하지 않으면 생략 가능 (세터 함수만 받기)
    const { setLoginUser } = useContext(LoginUserContext)
    //데이터를 가져오는 중인지 판단하기 위한 내부 함수 
    const [ fetching, setFetching ] = useState(false)

    const handleLogin = () => {
        setFetching(true) //로딩 상태를 true
        fetch('https://randomuser.me/api/', { headers: { 'Content-Type': 'application/json' } })
            .then(res => res.json())
            .then(data => {
                const login = data.results[0].login
                
                //로그인한 사용자의 정보를 저장하고 있다. 
                setLoginUser({
                    picture: data.results[0].picture.large,
                    username: login.username,
                    email: data.results[0].email,
                    cell: data.results[0].cell,
                });
            })
    }

    return (
        fetching ?
            <button disabled>...</button> :
            <button onClick={handleLogin}>Login</button>
    )
}

// 로그아웃 버튼을 눌렀을 때
function LogoutButton(props) {
    const { setLoginUser } = useContext(LoginUserContext)

    const handleLogout = () => {
        setLoginUser(null)
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    )
}

function UserInfo(props) {
    const { loginUser } = useContext(LoginUserContext)

    return (
        <div>
            <img src={loginUser.picture} style={{ borderRadius: '50%',width:'25px' }}/>
            <span>username: {loginUser.username}</span>
            <span>email: {loginUser.email}</span>
            <span>cell: {loginUser.cell}</span>
        </div>
    )
}
function UserButton(props){
    const {loginUser } = useContext(LoginUserContext)
    return(
        <div>{
            loginUser === null ?
            <div>
                <LoginButton />
            </div>
            :
            <div>
                
                <UserInfo />
                <LogoutButton />
            </div>
            }
        </div>
        
    )
        
}

function App() {
    // setter함수와 함수를 주고 있다.
    const [ loginUser, setLoginUser ] = useState(null)

    return (
        <LoginUserContext.Provider value={ { loginUser, setLoginUser } }>
            <UserButton/>
        </LoginUserContext.Provider>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));