import axios from 'axios';

const getArticles =() => {
    return axios
      .get(`https://taryns-news.onrender.com/api/articles`)
      .then(( {data} ) => {
        return data.articles
})
}

export default getArticles;
