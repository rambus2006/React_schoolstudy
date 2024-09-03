export async function GET(req, { params }) {
    const id = params.id
    return Response.json({ name: "Product " + id })
}

//SSR
/*
 - 서버에서 html 콘텐츠를 그리는 방법 
*/
//CSR
/*
 - 구글, 리액트등을 만들 때  
 */
//서버 컴포넌트 
/*
 - 리액트 기준으로 클라이언트 사이드 렌더링이었다. 
 - 한계: 훅을 쓰지 못한다. 이벤트 핸들링을 할 수 없다. (서버에서 해야 하는일이 아님)
 - 화면에서 서버 컴포넌트 영역이랑 클라이언트 컴포넌트 영역을 나뉘어서 생각해야한다. 그래서 두 개의 장점을 살리는 방법을 사용해야 한다. 
  
 */