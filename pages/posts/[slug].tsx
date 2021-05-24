import { getPostData, getPostsFiles } from '@/lib/posts-util';
import { Post } from '@components/types';
import { GetStaticPropsContext } from 'next';
import PostContent from '../../components/posts/post-detail/post-content';

interface Props {}

const PostDetailPage = (props: { post: Post }) => {
  const { post } = props;
  return <PostContent post={post} />;
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
