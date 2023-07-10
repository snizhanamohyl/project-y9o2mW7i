import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { Layout } from "./SharedLayout.styled";
// import Container from "components/Container/Container";

export default function SharedLayout() {
    return (<>
      <Layout>
        {/* <Container> */}
          <Header/>
        {/* </Container> */}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Footer />
      </Layout></>)
}