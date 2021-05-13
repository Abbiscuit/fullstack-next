import React, { Fragment } from 'react';

/* components */
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';

interface Props {}

const HomePage = (props: Props) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
};

export default HomePage;
