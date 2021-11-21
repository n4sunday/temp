import { Route, Redirect } from 'react-router-dom'
import useAuth from 'src/hooks/useAuth'

const PrivateRoute = ({ component: Component, ...props }) => {
  const { isAuthenticated } = useAuth()

  return (
    <Route
      {...props}
      render={(props) => (isAuthenticated() ? <Component {...props} /> : <Redirect to={'/'} />)}
    />
  )
}

export default PrivateRoute
