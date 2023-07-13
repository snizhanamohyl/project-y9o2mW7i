import { Suspense, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { Layout, Wrap } from "./SharedLayout.styled";
import MobMenu from "components/MobMenu/MobMenu";

export default function SharedLayout() {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);

  const location = useLocation();
  const isMainPage = location.pathname === '/' ? true : false;

  const toggleMenu = () => {
    const menuStatus = isMobMenuOpen ? false : true;
    setIsMobMenuOpen(menuStatus);
  }
  
  return (<>
    <Layout $isMainPage={isMainPage}>
      <Wrap>
        <Header toggleMenu={toggleMenu} />  
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Wrap>
    </Layout>
    <Footer />
    
    <MobMenu toggleMenu={toggleMenu} isOpen={isMobMenuOpen} />
  </>)
}