export default async function ServerComponentToDelivered(props) {
    return <div>이 컴포넌트는 클라이언트 컴포넌트 내부에 그려질 예정입니다. {props.data}</div>
}
