import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'
import Spinner from './Spinner'

const PrivateRoute = () => {
    const { loggedIn, checkingStatus } = useAuthStatus()

    if (checkingStatus) return <Spinner/>

    // If user is logged in, render the Outlet component which is the profile component
    // If not, redidirect the user to the sign in page
    return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />
}

export default PrivateRoute