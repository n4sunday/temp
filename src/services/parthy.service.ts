import { HttpMethod } from 'interfaces/enums'
import fetch from 'utils/fetch'

const endpoint = 'parthy'

export const PathyService = {
  getAll: async (query) => {
    const url = `${endpoint}/find`
    const data = { ...query }
    return await fetch(HttpMethod.GET, url, data)
  },
}
