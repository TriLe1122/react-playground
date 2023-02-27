import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})
api.defaults.headers.authorization = JSON.parse(localStorage.getItem('user-token'))


export const pokemonCardAPI = Axios.create({
  baseURL: "https://api.pokemontcg.io/v2/",
  headers: {
    'X-Api-Key': '34aca3f7-b90d-4d5c-bac6-22e19765e181'
  },
  timeout: 8000
})