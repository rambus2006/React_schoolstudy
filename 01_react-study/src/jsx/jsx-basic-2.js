import ReactDOM from 'react-dom' // ReactDOM을 가져옵니다. ReactDOM은 React 요소를 실제 DOM에 렌더링하는 데 사용됩니다.
const root = ReactDOM.createRoot(document.getElementById("root")) // React 요소를 렌더링할 root를 생성하고, id가 "root"인 DOM 요소를 사용합니다.

// AND 연산자를 이용한 조건부 렌더링 함수
function conditionalRenderUsingAND() {
    let unreadMessages = ["Hello", "React"]; // unreadMessages 배열에 "Hello"와 "React" 문자열을 넣습니다.

    return (
        <div>
            <h1>Hello!</h1> {/* 기본적으로 "Hello!"를 출력하는 h1 요소 */}
            {/* 만약 읽지 않은 메시지가 있다면 경고문 출력 */}
            {unreadMessages.length > 0 && 
                <h2>You have {unreadMessages.length} unread messages.</h2> 
                /* unreadMessages 배열의 길이가 0보다 크다면, 
                   "You have X unread messages."라는 경고문을 출력합니다. 
                   AND 연산자를 사용하여 조건부 렌더링을 수행합니다. */
            }
        </div>
    )
}

// if, else 구문을 이용한 조건부 렌더링 함수
function conditionalRender(age) {
    if(age >= 20) { // age가 20 이상일 경우
        return <div>성인</div> // "성인"이라는 텍스트를 포함한 div 요소를 반환합니다.
    } else { // age가 20 미만일 경우
        return <div>미성년자</div> // "미성년자"라는 텍스트를 포함한 div 요소를 반환합니다.
    }
}

// JSX 내부에서는 if, else 구문 사용이 불가능하므로 삼항 연산자를 사용하여 조건부 렌더링을 수행
const age = 20 // age라는 변수에 20을 할당합니다.
const conditionalElement = (
    <>{age >= 20 ? <div>성인</div> : <div>미성년자</div>}</> 
    /* age가 20 이상이면 "성인"을, 그렇지 않으면 "미성년자"를 표시하는 div 요소를 반환합니다. 
       삼항 연산자를 사용한 조건부 렌더링입니다. */
)

// 반복문을 사용하여 리스트 렌더링
const lst = ['Hello', 'React', 'JSX'] // "Hello", "React", "JSX" 문자열을 가진 배열 lst를 선언합니다.
const ul = (
    <ul>
        {
            lst.map(item => {
                return <li>{item}</li> // lst 배열의 각 요소를 li 요소로 변환하여 ul 안에 삽입합니다.
            })
        }
    </ul>
)

function JsxBasic2() {
    return (
        <div>
            {ul} {/* ul 리스트를 렌더링합니다. */}
            {conditionalRenderUsingAND()} {/* 조건부 렌더링을 사용한 "Hello!" 및 메시지 경고를 렌더링합니다. */}
            {conditionalRender(20)} {/* age가 20일 때 "성인"을 렌더링합니다. */}
            {conditionalRender(19)} {/* age가 19일 때 "미성년자"를 렌더링합니다. */}
            {conditionalElement} {/* age 변수를 기준으로 삼항 연산자를 이용한 조건부 렌더링을 수행합니다. */}
            {/* 이것은 주석입니다 */} {/* JSX에서 주석을 다는 방법을 보여줍니다. */}
        </div>
    )
}

root.render(<JsxBasic2 />) // JsxBasic2 컴포넌트를 root DOM 요소에 렌더링합니다.
