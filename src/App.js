import './App.css';
import { useState ,useRef,useCallback} from 'react';
import TodoInsert from './component/TodoInsert';
import TodoTemplate from './component/TodoTemplate';
import TodoList from './component/TodoList';
const App = () =>{
  //useState를 사용하여 값 정의하기 - 여려개라 객체로 표현했다. 
  const [todos,setTodos] = useState([
    {
      id:1,
      text:'리액트의 기초 알아보기',
      checked:true,
    },
    {
      id:2,
      text:'리액트의 기초 알아보기2',
      checked:true,
    }, {
      id:3,
      text:'리액트의 기초 알아보기3',
      checked:false,
    },
  ]);
  //고윳값으로 사용될 id
  //ref를 사용하여 변수 담기 
  const nextId = useRef(4);
  const onInsert = useCallback(
    text =>{
      const todo ={
        id:nextId.current,
        text,
        checked:false,
      };
      setTodos(todos.concat(todo))
      nextId.current +=1; //nextId 1씩 더하기
    },
    [todos],
  );
  const onRemove = useCallback(
    id =>{
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  )
  const onToggle = useCallback(
    id =>{
      setTodos(
        todos.map(todo =>
          todo.id === id ? {...todo, checked:!todo.checked} : todo,  
        ),
      );
    },
    [todos],
  )
  return(
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      {/* TodoList에게 props - todos로 넘겨준다. */}
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  )
}
export default App;
// useRef : DOM에 주는 id 를 함수 컴포넌트 내에서 쉽게 사용할 수 있게 해준다. 
// useCallback : 함수를 재활용할 수 있게 해주는 hook 함수이다. 
// useMemno : 연산을 최적화,변경된 연산만 새로하는 hook 함수이다. 