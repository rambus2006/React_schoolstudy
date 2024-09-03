import ClientComponentRenderServerComponent from "@/components/ClientComponentRenderServerComponent";
import ServerComponentToDelivered from "@/components/ServerComponentToDelivered";

//서버 컴포넌트에서 클라이언트를 그릴 때는 아무런 문제가 되지 않는다.하지만 클라이언트에서 서버 컴포넌트를 그리고 싶으면 props를 통해서 전달해야 ㅎ나다. 
//ParentServerPage에서 렌더링한 것이다. 
/**
 * 사실 서버에서 서버컴포넌트로 렌더링한 것이고, 그것을 클라이언트 컴포넌트로 전달된 구조이다. 
 */
export default async function ParentServerPage() {
    return <div>
        <h1>Parent Server Page</h1>
        {/* props이름을 줘서 안에 컴포넌트와 props값을 그리는 방식  */}
        <ClientComponentRenderServerComponent serverComponentProp={<ServerComponentToDelivered data={1} />}>
            {/* children으로 전달  */}
            <ServerComponentToDelivered data={2} /> 
        </ClientComponentRenderServerComponent>
    </div>
}
