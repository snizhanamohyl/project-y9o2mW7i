// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { selectIsRefreshing, selectToken } from 'redux/selectors';

export default function PrivateRoute({ component: Component, redirectTo = '/' }) {
	// const isLogggedIn = useSelector(selectToken);
	// const isRefreshing = useSelector(selectIsRefreshing);

	// const shouldRedirect = !isLogggedIn && !isRefreshing;

    // return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
    return <Component />;
}