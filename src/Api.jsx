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

const patchVotes = ({id}, vote) => {
    return axios
     .patch(`https://taryns-news.onrender.com/api/articles/${id}`, { inc_votes: vote })

}

const postComment = (comment) => {
    return axios 
    .post(`https://taryns-news.onrender.com/api/articles/${id}/comments`, {comment})
    
}

const getUsers = () => {
    return axios
    .get(`https://taryns-news.onrender.com/api/users`)
    .then((response) => {
        return response.data.users
    }).catch((err) => {
        console.log(err)
    })
}

export {getArticles, retriveIndividualArticles, getComments, patchVotes, postComment, getUsers};

