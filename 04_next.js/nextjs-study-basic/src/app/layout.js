
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
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
