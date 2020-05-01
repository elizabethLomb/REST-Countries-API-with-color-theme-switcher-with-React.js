import axios from 'axios';

const http = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/`
});

const list = () => http.get('/')

const search = (search) => http.get('/search', { params: { q:search }})

const detail = (id) => http.get(`/${id}`)

const region = (region) => http.get(`/${region}`)

export default {
  list,
  search,
  region,
  detail
}