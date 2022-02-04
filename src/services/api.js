import axios from 'axios'

export const key = '8043adc621f2b9bd9ae404366ed0a193c83d2de3'

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: { Authorization: `Bearer ${key}` }
})

export default api
