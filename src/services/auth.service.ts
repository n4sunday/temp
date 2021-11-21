import { environment } from 'constants/environments'
import { HttpMethod } from 'interfaces/enums'
import fetch from 'utils/fetch'

const endpoint = 'authToken'

export const AuthService = {
  login: async (appId: string, secretKey: string) => {
    const url = `${endpoint}`
    const data = {
      appId,
      secretKey,
    }
    return await fetch(HttpMethod.POST, url, data, {}, environment.API_AUTH_URL)
  },
}
