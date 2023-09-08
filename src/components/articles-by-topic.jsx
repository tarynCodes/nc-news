import {useState, useEffect} from 'react';
import ArticleCard from './article-card'
import { getArticles } from '../Api';
import {useParams} from "react-router-dom"

const ArticlesByTopic = ({articles, setArticles}) => {
    const {topic} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getArticles(topic).then((article) => {
            setArticles(article);
            setIsLoading(false)
        })
    }, [topic])

    if (isLoading) return <p>Loading...</p>
    return(
        <ul>
        <ArticleCard articles={articles}/>
        </ul>
    )
}

export default ArticlesByTopic;













