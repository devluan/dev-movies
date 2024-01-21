import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '4592d7f129c301fadd6055a5ff345818',
    language: 'pt-BR',
    page: 1
  }
})
export default api
