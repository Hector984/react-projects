import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const loggedIn = false

    // If user is logged in, render the Outlet component
    // If not, redidirect the user to the sign in page
    return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />
}

export default PrivateRoute