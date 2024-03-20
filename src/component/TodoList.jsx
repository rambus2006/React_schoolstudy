import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';
// App에서 props로 넘겨준 todos 받기 
//todos = {todo, id, onRemove}
const TodoList = ({todos,onRemove,onToggle}) => {
    return (
        <div className='TodoList'>
            {/* map함수- 반복문  */}
            {todos.map(todo =>(
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
            {/* 
            <map함수>

             */}

        </div>
    );
};

export default TodoList;