import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    // Authentication-related code removed
    const location = useLocation()
    
    // Since we removed authentication, let's assume user is always authenticated
    // You can replace this with your own authentication logic later
    const isAuthenticated = true
    
    if (isAuthenticated) {
        return (
            <div>
                {children}
            </div>
        );
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
}

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
}