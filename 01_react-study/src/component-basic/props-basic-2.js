import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

//[여러개의 props를 가진 코드]
//3. 컴포넌트를 선언하고 props를 방아온다. 
const ComponentWithMultiProps = function(props) {
    console.log(props)
    // props 값은 수정 불가
    // Cannot assign to read only property 'name' of object '#<Object>'
    // props.value1 = 1234

    //3-1. props값을 비구조화 할당한다. 
    const { value1, value2, whatever } = props
    //3-2. props값을 p 태그 안에 넣어서 리턴한다. 
    return <p>{value1} {value2} {whatever}</p>
}

//1. propsObj 객체를 선언해서 안에 초기값을 선언한다. 
const propsObj = {
    value1: 2,
    value2: 'JavaScript',
    whatever: 2.345
}

//2. 컴포넌트를 랜더링 하고 props 안에 value1,2를 넣어준다.:ComponentWithMultiProps
root.render(<div>
    <ComponentWithMultiProps value1={1} value2='React' whatever={1.234} />
    {/* spread 연산자 사용 가능 */}
    <ComponentWithMultiProps {...propsObj} />
</div>)