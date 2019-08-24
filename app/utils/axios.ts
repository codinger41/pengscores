import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com/v2',
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': '5088ed9f42mshdb8f74ace323105p1fcdefjsn82b3f2bcc65e'
  }
})

export default instance
