import { useEffect, useState } from 'react'
import data from '../news.json'
import NewsItem from './NewsItem'
import '../styles/global.css'
import newsAppStyle from '../styles/NewsApp.module.css'

function NewsApp(props){
    const [articles,setArticles] = useState([])
    //상태를 추가한다. 
    const [loading,setLoading] = useState(false)
    
    useEffect(()=>{
        // 요청을 보내는 코드인데 
        //데이터를 불러오기 전 로딩을 하는 코드이다. 
        setLoading(true)
        setTimeout(()=>{
            // 데이터를 불러오는 코드이다.
            console.log(data.articles)
            setArticles(data.articles)
            //데이터를 다 불러오면 로딩이 필요가 없기 때문에 false를 준다. 
            setLoading(false)
        },2000)
    },[])

    useEffect(()=>{
        fetch("/api/users")
            .then(res=>res.json())
            .then(json => console.log(json))
    },[])

    // 데이터를 로딩중일 때 실행되는 조건문이다. 
    if(loading) return <h1>데이터를 불러오는 중입니다...</h1>
    // NewsApp_news_app_$sldjk 이런식이기 때문에 스타일을 적용할 때 다음과 같이 해줘야 한다. 
    return(
        <div className={newsAppStyle.news_app}>
            <ul>
            {/* 이미 중괄호가 있어서 중괄호 안에 있는 코드는 JS 코드이다. => 삼항연산자할 때 {} 안써도 된다.  */}
            {
                // 삼항연산자 조건문 
                // 만약 articles에 아무것도 없으면 아무것도 뜨지 않는다. => 이를 해결하기 위해 조건문으로 만약 articles의 개수가 0이면 다른 걸 표시되게 한다. 
                articles.length===0? <h1>article이 없습니다. </h1> 
                :
                articles.map(article => {
                    return <li className={newsAppStyle.news_app_list}>
                        <NewsItem article={article} />
                    </li>
                }) 
                
                
            }
            </ul>
        </div>
    ) 
}
export default NewsApp