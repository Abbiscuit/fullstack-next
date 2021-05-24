import { getAllPosts } from '@/lib/posts-util';
import React from 'react';
import AllPosts from '../../components/posts/all-posts';

import { Post } from '../../components/types';

interface Props {}

const AllPostsPage = (props: { posts: Post[] }) => {
  const { posts } = props;
  return <AllPosts posts={posts} />;
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
