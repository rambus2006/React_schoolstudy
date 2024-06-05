import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

//1. 함수표현식으로 props전달:ComponentWithProps
const ComponentWithProps = function(props) {
  console.log(props)
  //stringify메서드: javascript 값을 json 문자열로 변환한다. 
  //2. props.value값을 json 문자열로 변환한다. 
  return <p>{JSON.stringify(props.value)}</p>
}

//2. 함수 표현식으로 props 전달:Greeting
const Greeting = function(props) {
  //2-1.age,name을 비구조화 할당
  const {age, name} = props
  //2-2. 안녕하세요 (나이)살 (이름)씨를 h1 태그로 리턴 
  return <h1>안녕하세요, {age}살 {name}씨</h1>
}

//3. render 메서드 사용 
root.render(
<div>
  {/* ComponentWithProps value 값 props로 주기 */}
  <ComponentWithProps value="Hello" />
  <ComponentWithProps value={1} />
  <ComponentWithProps value={{ a: 1, b: "React" }} />
  <ComponentWithProps value={() => { }} />
  {/* Greeting, 이름, 나이 props로 주기  */}
  <Greeting name={"황슬기"} age={19}/>
  <Greeting name={"홍삼"} age={2}/>
</div>)