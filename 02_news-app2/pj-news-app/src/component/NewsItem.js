import newsItemStyle from '../styles/NewsItem.module.css'
//styled-components : css 파일이 따로 필요없고 필요한 css를 바로 적용할 수 있다. 
import styled from 'styled-components'

const CircleImage = styled.img`
    border: 2px solid red;
    border-radius: 50%;
    width: 100px;
    height: 100px;
`
function NewsItem({article}) {
    return (
        <div>
            <h1 className={newsItemStyle.title}>
                {/* '-'를 쓸 때 이런 방식으로 []로 감싸서 쓰는 방법이 있고, 그냥 캐멀 케이스로 css를 바꾸는 방식이 더 낫다. */}
                <a className={newsItemStyle["title-link"]} href={article.url}>{article.title}</a></h1>
            {/* <img src={article.urlToImage} style={{width:'300px'}}></img> */}
            <CircleImage src={article.urlToImage}/>
            <p>{article.description}</p>
        </div>
    )
}
export default NewsItem