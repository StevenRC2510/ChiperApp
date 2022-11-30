import {makeWrapper} from '@app/utils/tests/wrapper';
import {cleanup, screen} from '@app/utils/tests/customRender';

import {PostTypes} from '@app/interfaces/posts';

import PostList from '@app/views/Posts/List';

afterEach(cleanup);

describe('[PostList] ', () => {
  const defaultProps: {data: [{data: PostTypes}]} = {
    data: [
      {
        data: {
          title: 'Testing card title',
          score: 2000,
          thumbnail: 'https://www.google.com',
          likes: 2,
          author_fullname: 'test',
        },
      },
    ],
  };
  const testContainer = makeWrapper<{data: [{data: PostTypes}]}>(PostList, {
    defaultProps,
  });

  it('Should render without crashing', () => {
    const {props} = testContainer();

    expect(screen.getByText(props.data[0].data.title)).toBeDefined();
    expect(screen.getByText(props.data[0].data.author_fullname)).toBeDefined();
  });
});
