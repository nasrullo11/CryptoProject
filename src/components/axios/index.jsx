import axios from 'axios'

export default axios.create({
  baseURL: 'https://rahmet97.pythonanywhere.com/api/token/',
})

export const axios2 = axios.create({
  baseURL: 'https://rahmet97.pythonanywhere.com/v1/api/',
})
