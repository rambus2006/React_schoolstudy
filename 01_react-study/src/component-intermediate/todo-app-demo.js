import React,{useState} from 'react';
import ReactDOM  from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById("root"))

function TodoAdder({handleTodoAdd}){
    const [input,setInput] = useState("")
    const handleOnChange = (e) => setInput(e.target.value)
    return(
    <div>
        <input type='text' value={input} onChange={handleOnChange}></input>
        <button onClick={()=>{
            if(!(input.trim().length>0)){
                alert("정상적으로 입력해주세요.")
            }else{
                handleTodoAdd({completed:false,text:input})
                setInput("")
            }
        }}>추가</button>
    </div>
    )
}

function TodoItem({todo,index,handleTodoRemove, handleToodoStatusToggle}){
    return <li><span onClick={()=> handleToodoStatusToggle(index)} style={todo.completed?{textDecoration:"line-through"}:null} >{todo.text}</span><button onClick={()=>handleTodoRemove(index)}>X</button></li>
}

function TodoList({todos,handleTodoRemove,handleToodoStatusToggle }){
    return <ul>{  
        //Q) mao 을 이용해서 li 태그를 만들고 거기에 todo의 항목 중 text를 출력 
        todos.map((todo, index)=>{
            // return <li>{item.text}</li>
            return <TodoItem todo={todo} handleTodoRemove={handleTodoRemove} handleToodoStatusToggle={handleToodoStatusToggle} index={index}/>
        })
    }  </ul>
}

function TodoApp (props){
    const [todos,setTodos] = useState ([
        {completed: false,text:"리액트 공부하기"},
        {completed: true,text:"스프링 공부하기"},

    ])
    
    //Q) 여기에 handlTodAdd 함수를 정의하고, 새로운 todo 객체를 받아서 todos에 추가할 수 있도록 하기 
    const handleTodoAdd = todo=>setTodos(todos.concat(todo));
    const handleTodoRemove = i =>setTodos(todos.filter((_,index)=>i !==index))
    //handletoodoStatusToggle 함수를 만들고 index를 받아서 map을 써서 해당 index에 있는 completed 상태를 토글 
    const handleToodoStatusToggle = i => setTodos(todos.map((item,index)=>{
        if(i===index){
            //item.completed = !item.completed
            item = {...item,completed:!item.completed}
        }
        return item
    }))
    
    return (
        <div>

            <TodoList todos={todos} handleTodoRemove={handleTodoRemove} handleToodoStatusToggle={handleToodoStatusToggle} />
            <TodoAdder handleTodoAdd={handleTodoAdd} />
        </div>
    );
};


//화면에 "todoapp"
root.render(<TodoApp />)