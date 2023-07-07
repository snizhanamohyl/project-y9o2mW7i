// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { selectToken } from 'redux/selectors';

export default function RestrictedRoute({ component: Component, redirectTo = '/' }) {
	// const isLogggedIn = useSelector(selectToken);

	// return isLogggedIn ? <Navigate to={redirectTo} /> : <Component />;
    return <Component />;
}