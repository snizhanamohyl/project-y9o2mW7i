import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import RegisterPage from 'pages/RegisterPage/RegisterPage';
import SigninPage from 'pages/SigninPage/SigninPage';
import WelcomePage from 'pages/WelcomePage/WelcomePage';

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

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

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
        />
        <Route
          path="/categories/:categoryName"
          element={<PrivateRoute component={CategoriesPage} />}
        />
        <Route
          path="/add"
          element={<PrivateRoute component={AddRecipePage} />}
        />
        <Route
          path="/recipe/:recipeId"
          element={<PrivateRoute component={RecipePage} />}
        />
        <Route
          path="/my"
          element={<PrivateRoute component={MyRecipesPage} />}
        />
        <Route
          path="/favorite"
          element={<PrivateRoute component={FavoritePage} />}
        />
        <Route
          path="/shopping-list"
          element={<PrivateRoute component={ShoppingListPage} />}
        />
        <Route
          path="/search"
          element={<PrivateRoute component={SearchPage} />}
        />
        <Route path="*" element={<PrivateRoute component={NotFoundPage} />} />
      </Route>
    </Routes>
  );
}
