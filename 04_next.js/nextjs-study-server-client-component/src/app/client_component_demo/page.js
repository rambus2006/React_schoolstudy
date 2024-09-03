// "use client" 디렉티브를 반드시 써줘야 함
"use client"

import MyClientComponent from "@/components/MyClientComponent"
import { useState } from "react"

export default function ClientComponentDemoPage() {
    const [data, setData] = useState("hello")
    console.log("from Client Component Demo Page")
    return <div>
        <h1>Client Component Demo Page</h1>
        <input type="text" value={data} onChange={e => setData(e.target.value)} />
        <button onClick={() => {
            alert(data);
        }}>이벤트 테스트</button>
        <MyClientComponent/>
    </div>
}
//콘솔에 개발자 모드를 키면 2번 렌더링한다. 
//그래서 2번 콘솔에 찍히게 된다. 