import axios from 'axios'

const server = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000
})

server.interceptors.request.use((config) => {
  return config
})

server.interceptors.response.use(res => {
  return res
})

export const Get = (options: any) => server.get(options)
export const Post = (options: any) => server.post(options)

export default server