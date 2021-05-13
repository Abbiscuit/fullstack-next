import React, { Fragment, ReactNode } from 'react';

import MainNavigation from './main-navigation';

interface Props {
  children?: ReactNode;
}

const Layout = (props: Props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
