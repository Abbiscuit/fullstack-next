import React from 'react';
import AllPosts from '../../components/posts/all-posts';

import { Post } from '../../components/types';

interface Props {}

const DUMMY_POSTS: Post[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is awesome!',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is awesome!',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is awesome!',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is awesome!',
    date: '2022-02-10',
  },
];

const AllPostsPage = (props: Props) => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
