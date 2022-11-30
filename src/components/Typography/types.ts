import {TextColors, TextAlign, SpaceProps} from 'interfaces/interfaces';

export type TextSize =
  | 'button1'
  | 'button2'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'caption'
  | 'overline';

export type TextDecoration = 'underline' | 'line-through' | 'overline';

export interface TypographyProps extends SpaceProps {
  color?: TextColors | string;
  align?: TextAlign;
  size?: TextSize;
  txtDecoration?: TextDecoration;
}
