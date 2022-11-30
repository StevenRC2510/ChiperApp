export type TextColors =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'quinary'
  | 'error'
  | 'alert'
  | 'info'
  | 'success';
export type TextWeights = 'rgl' | 'smBold' | 'bold';
export type TextAlign = 'center' | 'left' | 'right';
export type TextDecoration = 'underline' | 'line-through' | 'overline';
export interface ResponsivePropObject {
  xs?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  xlg?: number | string;
}
export interface SpaceProps {
  margin?: ResponsivePropObject | string; // Deprecated: Use instead the m and p types
  padding?: ResponsivePropObject | string; // Deprecated: Use instead the m and p types
  m?: ResponsivePropObject | string;
  p?: ResponsivePropObject | string;
}
export interface Colors {
  black: string;
  white: string;
  blue: string;
  gold: string;
}
