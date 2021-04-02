import axios from 'axios'

const api = axios.create({
baseURL: 'https://api.github.com', //pedaço de endereço que vai pra todoas requisições, link da api do hithub
});

export default api;
