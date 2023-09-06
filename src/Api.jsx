import axios from 'axios';

const getArticles =() => {
    return axios
      .get(`https://taryns-news.onrender.com/api/articles`)
      .then(( {data} ) => {
        return data.articles
})
}

const retriveIndividualArticles = ({id}) => {
    return axios
    .get(`https://taryns-news.onrender.com/api/articles/${id}`)
    .then((response) => {
        return response.data
    })
    .catch((err) => {
        console.log(err)
    })
}

const getComments = ({id}) => {
    return axios
    .get(`https://taryns-news.onrender.com/api/articles/${id}/comments`)
    .then((response) => {
        return response.data.comments
    })
    .catch((err) => {
        console.log(err)
    })
}
export {getArticles, retriveIndividualArticles, getComments};

