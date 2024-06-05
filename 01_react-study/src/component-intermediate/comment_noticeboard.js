import React,{useState} from 'react';
import ReactDOM  from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById("root"))

//이쪽은 게시판 

function handleTitleInput(){
   
}
function handleContent(){

}
function showContent(){

}
//아래쪽은 댓글 
function CommentInput({handleCommentAdd}){
    const [input, setInput] = useState("")
    const handleOnChange = (e) => setInput(e.target.value)
    
    return (
        <div>
            <br/>
            <input type='text' placeholder='댓글을 입력하세요.'onChange={handleOnChange} value={input}/>
            <button onClick={()=>{
                handleCommentAdd({content:input})
                setInput("") 
        }}>게시</button>
        </div>
    )
}
function CommentElement({comment,index,handleCommentRemove}){
    return <li>{comment.content}<button onClick={()=>handleCommentRemove(index)}>삭제 </button></li>
}
function CommentList({commentcontent,handleCommentRemove,handleNoticeAdd}){
    const [titleInput,setTitleInput] = useState("");
    const [contentInput,setContentInput] = useState("");

    const handleTitleInput = (e) => setTitleInput(e.target.value) // titleInput 값 정의 
    const handleContentInput =(e)=> setContentInput(e.target.value);

    return (
        <>
        <div>
            {/* 게시글 */}
            <p>제목</p>
            <input type='text' onChange={handleTitleInput} value={titleInput} />
            <p>내용</p>
            <input type='textarea' onChange={handleContentInput} value={contentInput}/>
            <br/>
            <button onClick={()=>{
                handleNoticeAdd({title:titleInput, content:contentInput})
            }}>게시</button>
        </div>
        {/* 글 보여주는 div */}
        <div><NoticeBoard/></div> 
            <ul>{
                commentcontent.map((comment,index)=>{
                    
                    return <CommentElement comment={comment} handleCommentRemove={handleCommentRemove} index={index} />
                })
            }</ul>
        </>
    
    )
}
function ShowNotice({text}){
    return(
        <>
        <h1>{text.title}</h1>
        <p>{text.content}</p>
        </>
        
    )
}
//title 과 content 내용이 들어가서 관리되는 컴포넌트 
function NoticeBoard(){
    //더미 데이터 
    const [text,setText] = useState([
        {title:"제목1",content:"내용1"},
        {title:"제목2",content:"내용2"}
    ])

    const handleNoticeAdd = notice => setText(text.concat(notice))
    return(
        <>
            <ShowNotice text={text}/>
            <CommentList handleNoticeAdd={handleNoticeAdd}/>
        </>
    )
}
function Comment(props){
    const [commentcontent,setComment] = useState([
        {content : "댓글1"},
        {content : "댓글2"}
    ])
    const handleCommentAdd = comment => setComment(commentcontent.concat(comment));
    const handleCommentRemove = i => setComment(commentcontent.filter((_,index)=>i !==index));

    return(
        <>
            <CommentList commentcontent={commentcontent} handleCommentRemove={handleCommentRemove} />
            <CommentInput handleCommentAdd={handleCommentAdd}/>
   </>

    ) 
}

root.render(<Comment />)