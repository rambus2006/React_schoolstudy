import React, { useState, useEffect, useRef, useContext } from "react";
import ReactDOM from "react-dom";
// 1.사용할 Context 불러오기(아까 정의해둠)
import UserContext from "./contexts/UserContext";

const UserConsumeComponent = (props) => {
    // 간단히 useContext 훅에 불러온 Context 객체를 전달하는 것만으로 전역값에 접근 가능
    // 전역인 객체에 useContext로 접근할 수 있다. 
    const user = useContext(UserContext)

    return (
        <div>
            <h1>UserConsumeComponent</h1>
            <p>id : { user.id }</p>
            <p>name : { user.name }</p>
        </div>
    )
}

const UserIdPrinter = (props) => {
    // 아까 input 해온 context 객체를 불러올 수 있다. 
    const user = useContext(UserContext)

    return (
        <div>
            <h1>User ID Printer</h1>
            <p>id : { user.id }</p>
        </div>
    )
}

const Nested = (props) => <>{props.children}</>

//2.root컴포넌트 
function App() {
    // 객체 정의 
    const globalUser = {
        name: "John",
        id: "john123"
    }

    // 불러온 컨텍스트의 Provider 컴포넌트를 이용해서 전역값에 접근할 모든 컴포넌트를 감싸주어야 함
    // (그래서 보통 가장 루트 컴포넌트에서 Provider 컴포넌트를 씌워줌)
    return (
        // .Provider로 접근하면 안에 있는 모든 컴포넌트에 접근할 수 있다. 여기에 value를 주면 전역 상태가 된다. 
        <UserContext.Provider value={globalUser}>
            <Nested>
                <Nested>
                    {/* provider 안에 있으니 globalUser에 접근할 수 있다.  */}
                    <UserConsumeComponent /> 
                    <Nested>
                        <UserIdPrinter />
                    </Nested>
                </Nested>
            </Nested>
        </UserContext.Provider>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));