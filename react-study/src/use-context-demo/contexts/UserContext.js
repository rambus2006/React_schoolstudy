import { createContext } from 'react'

// createContext 함수를 통해서 Context 값 생성 (기본값은 null로 설정)
//초기값을 줄 수 있는데 이게 null이다. 
const UserContext = createContext(null)

export default UserContext