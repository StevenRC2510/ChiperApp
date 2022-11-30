import React from 'react';

import {render} from '@app/utils/tests/customRender';

export function makeWrapper<T>(
  Comp: React.ElementType,
  options?: {
    defaultProps?: T;
    ExtraProvider?: React.ElementType;
  },
): (newProps?: T) => {props: T} {
  const {defaultProps = {}, ExtraProvider = React.Fragment} = options || {};
  return function (newProps?: T) {
    const props = {...defaultProps, ...newProps};
    render(
      <ExtraProvider>
        <Comp {...props} />
      </ExtraProvider>,
    );
    return {props: props as T};
  };
}
