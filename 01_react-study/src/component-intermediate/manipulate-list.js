import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
// > npm install uuid
import { v4 } from 'uuid' //랜덤한 String을 만드는 라이브러리 
const root = ReactDOM.createRoot(document.getElementById("root"))

const ListItem = function({ onRemove, onUpdate, item: { id, value } }) { //비구조화할당 2번 한다. id 와 value도 비구조화 할당을 여기서 할 수 있다. 
    // 부모 컴포넌트로부터 전달받은 상태 변화 메소드 저장
    // { onRemove, onUpdate, item: { id, value } } <= 대신 사용 가능
    // const { onRemove, onUpdate } = this.props
    // const { id, value } = this.props.item

    return (
        <div style={{ border: '1px solid black', margin: '20px', padding: '20px' }}>
            <span>id : {id}</span><br />
            <span>value : {value}</span><br />
            {/* 화살표 함수를 전달하여, 부모로 부터 전달받은 상태 변경 메소드(onRemove, onUpdate)를 호출 */}
            <button onClick={() => onRemove(id) /* 필요한 인자값(삭제할 id) 전달 */}>remove</button>&nbsp;
            {/* 객체를 새로 만들어서 전달하고 있다. -> 참조값때문에  */}
            <button onClick={() => onUpdate(id, { id: id, value: value + 1 }) /* 필요한 인자값(추가할 객체) 전달 */}>update</button>
        </div>
    )
}

const ListComponent = function(props) {
    const [list, setList] =  useState([])   
    // create (concat)
    
    // 새 항목을 추가한 "새로운 참조를 가진" 리스트로 교체
    const handleCreateItem = () => setList(state => state.concat({ id: v4(), value: 0 }))
    // remove (filter)
    // id가 일치할 경우 false 리턴하여 리스트에서 제외
    const handleRemoveItem = (uuid) => setList(state => state.filter((item) => item.id !== uuid))
    // update (map)
    // id가 일치할 경우 수정된 객체를 반환
    const handleUpdateItem = (uuid, updated) => setList(state => state.map(item => (item.id === uuid) ? updated : item))

    return (
        <div>
            <button onClick={handleCreateItem}>add</button>
            <ul>
                {
                    list.map(item => {
                        // uuid => 데이터베이스에서 참조할 pk 값이라고 가정
                        return <li key={item.id}>
                            {/* 여기서 props로 함수들을 전달해주지 않았더라면 수정할 수 없었을 것이다.props로 사용되는 것은 간접적으로만 접근이 가능해 값 수정이 가능하다.  */}
                            <ListItem item={item} onRemove={handleRemoveItem} onUpdate={handleUpdateItem} />
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

root.render(<ListComponent />)