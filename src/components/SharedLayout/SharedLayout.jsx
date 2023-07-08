import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { Container } from "./SharedLayout.styled";

export default function SharedLayout() {
    return (<>
    <Container>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
    <Footer /></>)
}