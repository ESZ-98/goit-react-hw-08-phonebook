import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuthRoute } from 'hook/useAuthRoute';
import SharedLayoutRest from '../SharedLayoutRest/SharedLayoutRest';
import SharedLayoutPriv from '../SharedLayoutPriv/SharedLayoutPriv';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  const { isLoggedIn } = useAuthRoute();
  return (
    <>
      <header className={css.header}>
        <nav className={css.header_navigation}>
          {isLoggedIn ? <SharedLayoutPriv /> : <SharedLayoutRest />}
        </nav>
      </header>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
