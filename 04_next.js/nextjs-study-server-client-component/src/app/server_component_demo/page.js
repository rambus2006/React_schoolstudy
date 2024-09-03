// 아예 import 자체가 불가능함을 유의
//현재 아무것도 안했기 때문에 서버 컴포넌트 useClient를 쓰면 클라이언트 컴포넌트. 

import MyClientComponent from "@/components/MyClientComponent"
import MyServerComponent from "@/components/MyServerComponent"
import UserListComponent from "@/components/UserListComponent"

// import { useState } from "react" 

// 전체는 서버 컴포넌트 
export default async function ServerComponentDemoPage() {
    // 훅 사용 불가
    // const [data, setData] = useState(null)
    console.log("from Server Component Demo Page")
    return(
        <div>
            <h1>Server Component Demo Page</h1>
            {/* 서버 컴포넌트  */}
            <MyServerComponent/> 
            <UserListComponent/>
            {/* 클라이언트 컴포넌트  */}
            <MyClientComponent/>
        </div>
    ) 
}
