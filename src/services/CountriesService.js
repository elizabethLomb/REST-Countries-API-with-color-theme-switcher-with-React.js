import axios from 'axios';

const http = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/`,
  responseType: "json"
});

const list = () => http.get('/')

const detail = (name) => http.get(`/name/${name}`)

const search = (search) => http.get('/search', { params: { q:search }})

const region = (region) => http.get(`/${region}`)

export default {
  list,
  search,
  region,
  detail
}