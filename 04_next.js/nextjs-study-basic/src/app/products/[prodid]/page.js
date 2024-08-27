// 페이지 컴포넌트를 정의 할 ㄹ때 export default 로 정의해야 한다. 
export default function ShopCatchAllPage(props) {
    const prodid = props.params.prodid
    return <div>상품 ID:{prodid}</div>
}