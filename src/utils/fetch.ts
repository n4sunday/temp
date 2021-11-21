import axios, { AxiosRequestConfig } from 'axios'
import { environment } from 'constants/environments'

const fetch = async (
  method: AxiosRequestConfig['method'] = 'GET',
  endpoint: string = '/',
  body: Object = {},
  headers: Object = {},
  apiUrl: any = environment.API_URL,
  options: Object = {}
) => {
  try {
    const url = `${apiUrl}/${endpoint}`
    const data = body
    const queryName = method === 'GET' ? 'params' : 'data'

    const api = await axios.create({
      baseURL: url,
    })

    api.interceptors.request.use((config) => {
      const token = sessionStorage.getItem('access_token')

      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    })

    const res = api.request({
      method,
      url,
      [queryName]: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
      ...options,
    })

    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}

export default fetch
