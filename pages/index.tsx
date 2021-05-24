import React, { Fragment } from 'react';

import FeaturedPosts from '@components/home-page/featured-posts';
import Hero from '@components/home-page/hero';
import { Post } from '@components/types';
import { getFeaturedPosts } from '@/lib/posts-util';

/* components */

interface Props {
  posts: Post[];
}

const HomePage = (props: Props) => {
  const { posts } = props;
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
      revalidate: 60,
    },
  };
}

export default HomePage;
