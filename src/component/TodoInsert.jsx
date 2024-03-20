import React, { useCallback,useState } from 'react';
import {MdAdd}from 'react-icons/md'
import './TodoInsert.scss'
const TodoInsert = ({onInsert}) => {
    const [value,setValue]= useState('');

    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[]);
    const onSubmit = useCallback(
        e=>{
            onInsert(value);
            setValue(''); //value값 초기화 

            //submit 이벤트는 브라우저에서 새로고침을 발생시킨다. 
            //이를 방지하기 위해 이 함수를 호출한다 .
            e.preventDefault(); //새로고침 방지 함수 
            //다음 로직으로도 가능하다. 
            
        },
        [onInsert,value],
    )
    // const onClick = useCallback(
    //     ()=>{
    //         onInsert(value);
    //         setValue('');
    //     },
    //     [onInsert,value],
    // )
    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input placeholder='할일을 입력하세요'value={value} onChange={onChange}></input>
            <button type='submit'>
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;