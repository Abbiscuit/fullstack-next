import classes from './posts-grid.module.css';

import PostItem from './post-item';
import { Post } from '../types';

interface Props {
  posts?: Post[];
}

const PostsGrid = (props: Props) => {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map(post => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
