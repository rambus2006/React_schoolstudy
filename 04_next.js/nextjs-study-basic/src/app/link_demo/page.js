// 일단 신경쓰지 말 것
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function LinkDemoPage() {
    const path = usePathname() // '/link_demo'/가 들어간다. 
    // 현재 주소 정보 출력
    console.log(path)
    const links = [
        { href: "/second", description: "to second" },
        { href: "/second/third", description: "to third" },
        { href: "/link_demo", description: "to link demo" },
    ]

    return (
        <ul>
            {
                links.map(link => <li><Link 
                    href={link.href} 
                    //현재 위치한 링크와 그 페이지의 경로가 같을 때 강조 표시를 해준다. (내가 이 페이지에 위치해 있음을 알려줌 )
                    style={path === link.href ? 
                        { color: "red", fontWeight: "bold", textDecoration: "underline" } : 
                        { color: "blue", textDecoration: "none" }}>
                    {link.description}
                </Link></li>)
            }
        </ul>             
    )
}
