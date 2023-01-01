import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://apiteste.taxireturn.com.br/',
})
