import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com/v2',
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': '<INSERT API KEY HERE>'
  }
})

export default instance
