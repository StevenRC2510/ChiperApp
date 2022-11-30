import React, {useMemo} from 'react';

import usePosts from '@app/hooks/usePosts';
import {Categories} from '@app/interfaces/posts';

import PostsList from '@app/views/Posts/List';

const Posts = ({newCategory}: {newCategory: Categories}) => {
  const {data: posts} = usePosts(newCategory);
  const finalDataMemoize = useMemo(
    () => posts?.data.children,
    [posts?.data.children],
  );
  return <PostsList data={finalDataMemoize} />;
};

export default Posts;
