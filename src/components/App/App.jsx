import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/auth-operations";

import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "components/RestrictedRoute/RestrictedRoute";
import SharedLayout from "components/SharedLayout/SharedLayout";

import RegisterPage from "pages/RegisterPage/RegisterPage";
import SigninPage from "pages/SigninPage/SigninPage";

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
// const SigninPage = lazy(() => import('pages/SigninPage/SigninPage'));
const CategoriesPage = lazy(() => import('pages/CategoriesPage/CategoriesPage'));
const MyRecipesPage = lazy(() => import('pages/MyRecipesPage/MyRecipesPage'));
const AddRecipePage = lazy(() => import('pages/AddRecipePage/AddRecipePage'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
const ShoppingListPage = lazy(() => import('pages/ShoppingListPage/ShoppingListPage'));
const FavoritePage = lazy(() => import('pages/FavoritePage/FavoritePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export default function App() {  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return <Routes>
    <Route path='/signin' element={<RestrictedRoute component={SigninPage} redirectTo='/signin'/>}></Route>
    <Route path='/register' element={<RestrictedRoute component={RegisterPage} redirectTo='/register' />}></Route>

    <Route path='/' element={<SharedLayout />} >
      <Route index element={<PrivateRoute component={MainPage} redirectTo='/' />}></Route>
      <Route path='/categories' element={<PrivateRoute component={CategoriesPage } redirectTo='/categories' />}></Route>
      <Route path='/categories/:categoryName' element={<PrivateRoute component={CategoriesPage } redirectTo='/categories/:categoryName' />}></Route>
      <Route path='/add' element={<PrivateRoute component={AddRecipePage} redirectTo='/add' />}></Route>
      <Route path='/my' element={<PrivateRoute component={MyRecipesPage} redirectTo='/my' />}></Route>
      <Route path='/favorite' element={<PrivateRoute component={FavoritePage} redirectTo='/favorite' />}></Route>
      <Route path='/shopping-list' element={<PrivateRoute component={ShoppingListPage} redirectTo='/shopping-list' />}></Route>
      <Route path='/search' element={<PrivateRoute component={SearchPage} redirectTo='/search' />}></Route>
      <Route path='*' element={<NotFoundPage />}></Route>
    </Route>    
  </Routes>
};
