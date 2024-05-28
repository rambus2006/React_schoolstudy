//3307 방민서 
import React,{useState} from 'react';
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

//문제 1
function Greeting(props){
    const {prefix,target} = props
    const sum = prefix + " " + target
    return (
        <div>
            {sum}
        </div>
    )
}
//문제2
function Reverse({str}){
    var split = str.split("");
    var reverse = split.reverse();
    var join = reverse.join("");
    return (
        <div>
            {join}
        </div>
    )
}
//문제 3
function Gugudan({from, to }){
    var arr = []
    
    const newarr=[]
    //1부터 9까지 반복 
    const arrloop = () =>{
        for(var j = from;j<=parseInt(to);j++){
            for(var i = 1;i<=9;i++){
            arr[i] = j * i;
            newarr.push( <div>{i}x{j}={arr[i]}</div>)
            }
    }
    return newarr;
}
    return <>{arrloop()}</>
    
}

function LimitedPusher({limit}){
    const [count,setCount] = useState(0);
    
    return<div>
        {
            count === limit ?<><h1>모두 출력하셨습니다.</h1></>:
            <>
                <h1>{count}/{limit}번 클릭하셨습니다.</h1>
                <button onClick={()=>setCount(c =>c+1)}>클릭</button>
            </>
        }
    </div>
}
function LikeDislikeButton(){
    const [like,setLike] = useState(0)
    const [dislike,setDisLike] = useState(0)
    let status = null

    if(like>dislike) status = "liked"
    if(dislike>like) status = "disliked"
    if(like === dislike) status = "neutral"
    return <div>
        <button onClick={() => setLike(v =>v+1)} style={status ==="liked" ? {backgroundColor:"green"}:null}>좋아요</button>
        <button onClick={() => setDisLike(v =>v+1)} style={status ==="disliked" ? {backgroundColor:"red"}:null}>싫어요</button>
        <button onClick={()=>{
            setLike(0)
            setDisLike(0)
        }} style={status ==="neutral" ? {backgroundColor:"gray"}:null}>초기화</button>
    </div>
}
function randomHex() {
    return (Math.floor(Math.random() * (15 - 1 + 1) + 1)).toString(16);
    }
function generateRandomColor(){
    let color="#"
    for(let i=0;i<6;i++) color+= randomHex()
    return color
}

function RandomColorPicker(){   
    const [color,setColor] = useState("#000000")
   return <div>
    <div style={{width:"100px",height:"100px",backgroundColor:color}}></div>
    <button onClick={()=>setColor(generateRandomColor())}>pick</button>
   </div>
}
root.render(
    <div>
      {/* <Greeting prefix="Hello" target="Yu Byung Suk" /> */}
    {/* <Reverse str="Hello" /> */}
    {/* <Gugudan from={3} to={5} /> */}
    {/* <LimitedPusher limit={10} /> */}
    {/* <LikeDislikeButton /> */}
    {/* <RandomColorPicker /> */}
</div>
)