import React from 'react';
import {FlatList} from 'react-native';

import {PostTypes} from '@app/interfaces/posts';

import Card from '@app/components/Card';

const keyExtractor = (_: any, index: number) => index.toString();

const renderItem = ({item}: {item: {data: PostTypes}}) => (
  <Card {...item.data} />
);

const PostsList = ({data}: {data: Array<any>}) => (
  <FlatList keyExtractor={keyExtractor} data={data} renderItem={renderItem} />
);

export default PostsList;
