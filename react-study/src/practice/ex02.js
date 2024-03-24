import React,{useState} from 'react';

import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"));

const SlotMachine = (props) => {
    const {s1, s2,s3} = props;
    // const [color,setColor] = useState({color:"black"})
    let res = " ";
    let style ={color:"black"}
    // let highlight = (s1 ==="7" && s2 ==="7" && s3 ==="7")
    if(s1==s2 && s2 == s3 ){
        res = "Congrats!";
        if(s2==="7"){
            style={color:"red"};
        }
    }
    return (
        <div>
            <h1>{s1} {s2} {s3}<br/><p style={style}>{res}</p></h1>
        </div>
    );
};
/* <해설>
 * let congratz = null //null로 주면 아무런 표시가 안된다. 
 * {(s1 === s2 && s2 === s3) ? "Congratz!" : null}
 * highlight = (s1 ==="7" && s2 ==="7" s3 ==="7")
 * 
 */
root.render(
    <div>
        <SlotMachine s1="X" s2="Y" s3="Z" />
        <SlotMachine s1="X" s2="X" s3="X" />
        <SlotMachine s1="7" s2="7" s3="7" />
            {/* // 과일 이모지 : 🍇🍈🍉🍊🍌🍍🍎🍏🍑🍒🍓🍅🍆🌽🍄🌰 */}
        <SlotMachine s1="🍓" s2="🍒" s3="🍍" />
        <SlotMachine s1="🍒" s2="🍒" s3="🍒" />
    </div>)