import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";

export default function SharedLayout() {
    return (<>
    <div>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
    <Footer /></>)
}