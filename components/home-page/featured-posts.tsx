import React from 'react';
import PostsGrid from '../posts/posts-grid';
import { Post } from '../types';

import classes from './featured-posts.module.css';

interface Props {
  posts?: Post[];
}

const FeaturedPosts = (props: Props) => {
  const { posts } = props;

  return (
    <section className={classes.latest}>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
