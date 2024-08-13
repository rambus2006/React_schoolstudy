// 페이지 컴포넌트를 정의 할 ㄹ때 export default 로 정의해야 한다. 
//first 만 제거하면 동적인 웹사이트가 된다. 
export default function BlogPage(props) {
    const id = props.params.id
    return <div>Post ID:{id}</div>
  }
  