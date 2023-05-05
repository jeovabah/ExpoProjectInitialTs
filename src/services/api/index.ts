import axios from 'axios'
import { buildApp } from '~config/constantBuild'

export const api = axios.create({
  baseURL: buildApp().HOST_API_APP,
})
