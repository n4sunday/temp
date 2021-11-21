import { useMemo } from 'react'
import { useHistory } from 'react-router'

import { AuthService } from 'services/auth.service'
import { ProfileStore } from 'stores/profile/profile.store'
import { session } from 'utils/sessions'

const useAuth = () => {
  const Router = useHistory()
  const { user, setUser } = ProfileStore()
  const userSession = session.getUser()
  const tokenSession = session.getAccessToken()

  const profile = useMemo(() => {
    return user
  }, [user])

  const onLogin = async (values) => {
    try {
      let res = await AuthService.login(values.appId, values.secretKey)
      if (res?.data) {
        session.setAccessToken(res?.data.token)
        Router.push('/home')
      }
    } catch (error) {}
  }

  const initialData = async () => {
    try {
    } catch (err) {
      session.clear()
    }
  }

  const isAuthenticated = () => {
    if (profile) {
      return profile
    } else if (userSession || tokenSession) {
      initialData()
      return true
    } else {
      sessionStorage.clear()
      Router.push('/')
    }
  }

  return { isAuthenticated, onLogin }
}

export default useAuth
