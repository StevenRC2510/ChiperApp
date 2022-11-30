import {Linking} from 'react-native';

import {makeWrapper} from '@app/utils/tests/wrapper';
import {cleanup, screen, fireEvent} from '@app/utils/tests/customRender';

import {PostTypes} from '@app/interfaces/posts';

import Card from '@app/components/Card';

afterEach(cleanup);

describe('[Card] ', () => {
  const defaultProps: PostTypes = {
    title: 'Testing card title',
    score: 2000,
    thumbnail: 'https://www.google.com',
    likes: 2,
    author_fullname: 'test',
  };
  const testContainer = makeWrapper<PostTypes>(Card, {
    defaultProps,
  });

  it('Should render without crashing', () => {
    const {props} = testContainer();

    expect(screen.getByText(props.title)).toBeDefined();
    expect(screen.getByText(/Score: 2000/)).toBeDefined();
    expect(screen.getByText(/2 likes/)).toBeDefined();
    expect(screen.getByText(props.author_fullname)).toBeDefined();
  });

  it('Should click the call and call openURL function', () => {
    const {props} = testContainer();
    const LinkingMock = jest.spyOn(Linking, 'openURL');

    const card = screen.getByTestId(`card-${props.title}`);
    expect(card).toBeDefined();

    fireEvent.press(card);

    expect(LinkingMock).toHaveBeenCalledWith(props.thumbnail);
  });
});
