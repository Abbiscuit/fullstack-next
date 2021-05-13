import React from 'react';
import { Post } from '../posts/post-item';
import PostsGrid from '../posts/posts-grid';

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
