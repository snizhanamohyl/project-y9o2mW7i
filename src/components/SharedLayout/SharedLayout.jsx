import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { Layout } from "./SharedLayout.styled";

export default function SharedLayout() {
  const location = useLocation();
  
  const isMainPage = location.pathname === '/' ? true : false;
  
  return (<>
    <Layout ismainpage={ isMainPage ? 'true' : 'false' }>
        <Header/>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Footer />
    </Layout></>)
}