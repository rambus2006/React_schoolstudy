"use client"

//바닐라 자바스크립트의 history 객체와 같다. 이동 관련 메서드 
// history.back하면 뒷 페이지로 가고, history.forword 하면 앞페이지로 간다. 
// "next/router" 모듈에서 불러오는 것 아님!
// import { useRouter } from "next/router"
import { useRouter } from "next/navigation"

export default function UseRouterDemoComponent() {
    const router = useRouter()

    return (
        <div>
            <button onClick={() => {
                // 해당 주소로 이동
                router.push("/link_demo")
            }}>push to "/link_demo"</button>
            <button onClick={() => {
                // 해당 주소로 이동하되, 현재 주소를 history에서 지우고 이동
                router.replace("/link_demo")
            }}>replace to "/link_demo"</button>
            <button onClick={() => {
                // 브라우저의 "뒤로" 기능과 같음
                router.back()
            }}>back</button>
            <button onClick={() => {
                // 브라우저의 "앞으로" 기능과 같음
                router.forward()
            }}>forward</button>
        </div>
    )
}
