import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, refreshUser } from 'redux/auth/auth-operations';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import RegisterPage from 'pages/RegisterPage/RegisterPage';
import SigninPage from 'pages/SigninPage/SigninPage';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import { getAllowRefreshUser, getIsLoggedIn } from 'redux/auth/selectors';

// import NotFound from "components/NotFound/NotFound";

// const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
// const SigninPage = lazy(() => import('pages/SigninPage/SigninPage'));

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const CategoriesPage = lazy(() =>
  import('pages/CategoriesPage/CategoriesPage')
);
const MyRecipesPage = lazy(() => import('pages/MyRecipesPage/MyRecipesPage'));
const AddRecipePage = lazy(() => import('pages/AddRecipePage/AddRecipePage'));
const RecipePage = lazy(() => import('pages/RecipePage/RecipePage'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
const ShoppingListPage = lazy(() =>
  import('pages/ShoppingListPage/ShoppingListPage')
);
const FavoritePage = lazy(() => import('pages/FavoritePage/FavoritePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export default function App() {
  const dispatch = useDispatch();
  const allowRefreshUser = useSelector(getAllowRefreshUser);
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
    if (allowRefreshUser === false && isLoggedIn) {
      dispatch(logout());
    }
  }, [dispatch, isLoggedIn, allowRefreshUser]);

  return (
    <Routes>
      <Route
        path="/welcome"
        element={<RestrictedRoute component={WelcomePage} redirectTo="/" />}
      />
      <Route
        path="/signin"
        element={<RestrictedRoute component={SigninPage} redirectTo="/" />}
      />
      <Route
        path="/register"
        element={<RestrictedRoute component={RegisterPage} redirectTo="/" />}
      />

      <Route path="/" element={<SharedLayout />}>
        <Route index element={<PrivateRoute component={MainPage} />} />
        <Route
          path="/categories"
          element={<PrivateRoute component={CategoriesPage} />}
        ></Route>
        <Route
          path="/categories/:categoryName"
          element={<PrivateRoute component={CategoriesPage} />}
        ></Route>
        <Route
          path="/add"
          element={<PrivateRoute component={AddRecipePage} />}
        ></Route>

        <Route
          path="/recipe/:recipeId"
          element={<PrivateRoute component={RecipePage} />}
        ></Route>
        <Route
          path="/my"
          element={<PrivateRoute component={MyRecipesPage} />}
        ></Route>
        <Route
          path="/favorite"
          element={<PrivateRoute component={FavoritePage} />}
        ></Route>
        <Route
          path="/shopping-list"
          element={<PrivateRoute component={ShoppingListPage} />}
        ></Route>
        <Route
          path="/search"
          element={<PrivateRoute component={SearchPage} />}
        ></Route>
        <Route
          path="*"
          element={<PrivateRoute component={NotFoundPage} />}
        ></Route>
      </Route>
    </Routes>
  );
}
