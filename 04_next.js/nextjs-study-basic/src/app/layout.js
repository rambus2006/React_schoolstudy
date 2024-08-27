
//import "./globals.css"; //상대경로 
//import "@app/app/globals.css" //절대경로

// 이름은 안바꿔도 되지만 정의는 해야 한다. 
// props로 바꾸는 children은 page.js에서 <div>Home</div>를 의미한다. 
// 즉, Home이 RootLayout으로 들어와 표시된다. 
//public 은 웹사이트를 구성하는 이미지나 파일들이 들어간다. 
//'/next.config.mjs'에 설정을 추가할 수 있다. 
//component는 재활용 많이 하는 컴포넌트를 담는 폴더 
//lib 는 라이브러리 (우리가 쓰는 함수나 db와 통신하는 모듈, 리액트랑 관련없는것)을 담는 폴더 
// /app/page.js => /
// /app/about/page.js => /about
// /app/profile/page.js => /profile
/*
<a href="/second" />
=>/second 로 이동하기 위해서 브라우저에서 네트워크 요청을 보냄
html,js,기타 파일이 모두 불러와진다. 
불러와질 때 중간에 흰 화면이 발생된다. 

<Link href="/second" />
-> SPA 방법론 적용 -> 페이지 로딩은 한번만 
=>/second로 브라우저의 주소 내용을 바꾸고 , 네트워크 요청은 보내지 않음
=> 전역 상태인 주소 값이 바뀌었음을 전달하여 적절한 컴포넌트 렌더링
=> 네트워크 요청은 안보내고 링크만 바꾼다. 
=> 바뀐 상태의 페이지가 로딩된다. 로딩되기 전에는 second 페이지(로딩중페이지)이 나온다. 
=> 하얀 화면이 나오지 않고 화면이 교체된다.(자바스크립트에서만 내용 전환) 


_rsc payload
json 과 같이 제공하는 형식 

코드 스플리팅 
화면을 올리면 링크가 안보였다가 화면에 보이게 될 때 뒤에서 컴포넌트(js번들)이 로딩된다. 
*/
import Link from "next/link"
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>Header</header>
        <UseRouterDemoComponent />
        <main>{children}</main>
        <menu>
                    <Link href="/second">to second</Link><br />
                    <Link href="/second/third">to third</Link><br />
                    {/* 외부 사이트의 경우 a 태그를 사용하여 링크 */}
                    <a href="http://www.google.com">to google</a>
        </menu>
        <hr/>
        <main>body</main>
        <hr/>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
