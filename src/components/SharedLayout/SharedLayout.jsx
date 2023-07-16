import { Suspense, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Layout, Wrap } from './SharedLayout.styled';
import MobMenu from 'components/MobMenu/MobMenu';
import PageLoader from 'components/PageLoader/PageLoader';

export default function SharedLayout() {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);

  const location = useLocation();
  const path = location.pathname;
  const isMainPage = path === '/';
  const isRecipePage = path === '/recipe/:recipeId';

  const toggleMenu = () => {
    const menuStatus = isMobMenuOpen ? false : true;
    setIsMobMenuOpen(menuStatus);
  };

  return (
    <>
      <Layout $isMainPage={isMainPage}>
        <Wrap $isRecipePage={isRecipePage}>
          <Header toggleMenu={toggleMenu} />
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </Wrap>
      </Layout>
      <Footer />

      <MobMenu toggleMenu={toggleMenu} isOpen={isMobMenuOpen} />
    </>
  );
}
