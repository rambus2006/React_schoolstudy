
// Node에서 실행
// 리스트 데이터
let lst = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Paul" },
]

// console.log(lst)
// console.log(newlst)
/*{ concat }
- 기존의 참조를 건들이지 않고 새로운 것을 만들 수 있기 때문에 사용한다. (참조가 바뀌어서 리랜더링 가능)
*/
// 1. newLst 에 새 배열 만들고 
// 2. lst 냉ㅇ을 newLst 에 복사하고(반복문 사용) 
// 3. newLst에 추가할 내용을 push 를 하면 

/* push함수 
- item변수에 lst의 객체 1개씩 저장을 했다가 newLst 에 넣는다.
- newLst와 lst의 참조는 다르다. 
*/
let newLst=[]
for(const item of lst){
   newLst.push(item)
}
newLst = lst.concat({id:4,name:"Ken"})
console.log(newLst)

// let newLst = [...lst] 도 된다.
//push 내용 끝---------------------------------------------------------------------
//map 함수 내용시작 ----------------------------------------------------------------
// 요소 내용 변경은 map 메소드를 이용하여 처리
//let updatedId = 2
//let updatedName = "Smith"
//let updatedLst=[]
/*for(const x of lst){
    updatedLst = lst.push(x)
}
updatedLst=lst.concat({id:updatedId,name:updatedName})
console.log(updatedLst)*/
//let updatedLst = lst.map(item => {
  //  if(item.id === updatedId) {
        // 다음과 같이 객체를 직접 변경하지 않고 (원본 리스트는 불변!)
        // item.name = updatedName //전체적인 참조item는 바뀌지만 name의 참조는 바뀌지 않기 때문에 화면에서 그부분만 안바뀔 수 있다. 

        // 전개 연산자를 이용하여 값 복사 후 덮어쓰기 전략으로 새 객체를 생성하여 대입하기
//        item = { ...item, name: updatedName } 
  //  }
   // return item
//})
