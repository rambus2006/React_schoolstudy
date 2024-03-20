import React from 'react';
// import{
//     MdCheckBoxOutlineBlank,
//     MdCheckBox,
//     MdCheckCircleOutline,
// }from './react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';
import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline,MdCheckBox} from 'react-icons/md';

const TodoListItem = ({todo,onRemove,onToggle}) => {
    //todo를 props(객체형식)으로 가져와서 
    //todo를 text와 checked 로 비구조화할당(객체를 풀어해침)
    const {text,checked,id} = todo;
    return (
        <div className='TodoListItem'>
            {/* cn 함수: 인자로 들어간 값이 true면 class로 넣어주고, false이면 안넣어준다.   */}
            {/* 클래스 이름이 checkbox 인 값에 checked값이 들어가는데,이때 true이면 MdCheckBox를 실행, false면 MdCheckBoxOutlineBlank를 실행한다. */}
            <div className={cn('checkbox',{checked})} onClick={()=>onToggle(id)}> 
                {checked?<MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                
                <div className='text'>{text}</div>
            </div>
            <div className='remove'onClick={()=>onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

export default TodoListItem;