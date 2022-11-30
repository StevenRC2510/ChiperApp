import {useQuery} from 'react-query';

import {Categories} from '@app/interfaces/posts';

import {postsHttp} from '@app/services/clients';
import {PostsResponseTypes} from '@app/services/posts.client';

const usePosts = (category: Categories) => {
  const allPosts = useQuery<PostsResponseTypes>(
    ['posts', category],
    () => postsHttp.getPosts(category),
    {
      onError: () =>
        console.log(
          'Sentry report: Ops! Error',
          'posts not loaded, try again.',
        ),
    },
  );

  return allPosts;
};

export default usePosts;
