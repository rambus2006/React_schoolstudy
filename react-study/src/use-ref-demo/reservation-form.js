import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

const ReservationForm = function(props) {
    const [state, setState] = useState({
        name: '',
        date: '',
        isForeigner: false,
        roomNumber: 'one'
    })
    

    const handleInputChange = (event) => {
        const target = event.target; //참조가 가리키고 있는 것 
        const value = target.type === 'checkbox' ? target.checked : target.value; //checkbox만 checked를 쓰고, 나머지 값은 value값으로 접근한다. 
        const name = target.name; //name은 백엔드에서 키로 쓰인다. 이걸 이용하여 객체 속성값과 같다. 

        // ES6에서 도입된 computed property names 문법 활용
        // https://eloquentcode.com/computed-property-names-in-javascript
        setState({
            ...state,
            // 태그의 name 속성값을 속성키로 사용
            [name]: value //여기가 핵심! : name이라고 하는 것의 값이 달라지면 그걸 그대로 써준다. 그리고 value는 들어가는 값이 되어 객체를 만들 수 있다. 
        });
    }
    
    const handleSubmit = (e) => {
        alert("submit!");
        // 페이지로 이동을 시도하는 기본 동작을 무시하고,
        e.preventDefault(); //페이지 이동 막는다. 
        // 필요한 네트워크 요청(ex: ajax 요청) 보내기 코드를 여기에 작성
        // (입력 요소와 상태값이 동기화되어 있으므로, 필요한 내용은 전부 상태값을 통해서 참조 가능)
    }

    return (
        <form>
            <p>{JSON.stringify(state)}</p>
            <hr />
            {/* onChange에 들어가는 값이 같다. */}
            <label>이름 <input value={state.name} name="name" type="text" onChange={handleInputChange} /></label><br />
            <label>날짜 <input value={state.date} name="date" type="date" onChange={handleInputChange} /></label><br />
            <label>외국인 여부 <input checked={state.isForeigner} name="isForeigner" type="checkbox" onChange={handleInputChange} /></label><br />
            <select name="roomNumber" value={state.roomNumber} onChange={handleInputChange}>
                <option value="one">1개</option>
                <option value="two">2개</option>
                <option value="three">3개</option>
            </select>
            <br />
            <input type="submit" value="제출" onClick={handleSubmit} />
        </form>
    )
}

root.render(<ReservationForm />)