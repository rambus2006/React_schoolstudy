"use client"

// props값을 전달 
export default function ClientComponentRenderServerComponent(props) {
    return <div>
        {props.serverComponentProp}
        {/* ServerComponentToDelivered data={2}에서 전달된 2가 children에 들어감 */}
        {props.children} 
    </div>
}
