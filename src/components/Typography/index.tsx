import React from 'react';
import {Text} from 'react-native';

import {TypographyProps} from 'components/Typography/types';
import {typographyStyles} from 'components/Typography/typography.styles';

const Typography = (props: TypographyProps) => (
  <Text style={typographyStyles(props)} />
);

export default Typography;
