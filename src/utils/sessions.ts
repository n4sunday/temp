export const session = {
  setUser: (data) => {
    sessionStorage.setItem('user', JSON.stringify(data))
  },
  setAccessToken: (data) => {
    sessionStorage.setItem('access_token', data)
  },
  setRefreshToken: (data) => {
    sessionStorage.setItem('refresh_token', data)
  },
  clear: () => {
    sessionStorage.clear()
  },
  getUser: () => {
    const user = sessionStorage.getItem('user')
    return user ? JSON.parse(user) : undefined
  },
  getAccessToken: () => {
    return sessionStorage.getItem('access_token')
  },
}
