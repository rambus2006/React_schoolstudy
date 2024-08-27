import { redirect } from "next/navigation"

export default async function RedirectDemoPage() {
    const random = Math.random() < 0.5
    
    // 렌더링 도중 만나는 로직에 의해서 redirect
    if(random) redirect("/")
    
    // 만약 redirect 되는 상황이라면 뒤의 코드는 무시된다고 생각하기
    return <div>Redirect Demo Page</div>
}
