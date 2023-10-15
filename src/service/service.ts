import axios, { AxiosInstance } from "axios"

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
})

service.interceptors.response.use((rep) => {
  return rep.data
})

export { service }
