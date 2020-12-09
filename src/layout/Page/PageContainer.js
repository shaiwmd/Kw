import React from 'react';
import Page from './Page';
import { Footer } from '..';

const PageContainer = ({ navigators, children, ...rest }) => {
  return (
    <Page {...rest}>
      <Page.Navigation navigators={navigators} />

      <Page.Menu />
      {children}
      <Footer />
    </Page>
  );
};

export default PageContainer;
