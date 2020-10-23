import { Media } from 'constants/styles/types';

export const fontSizes: Array<string> = ['12px', '14px', '16px', '18px', '20px', '22px', '28px'];

export const media: Media = {
  biggest: '990px',
  big: '920px',
  lessThanBig: '755px',
  moreThanMiddle: '633px',
  middle: '500px',
  small: '440px',
  smallest: '360px',
};

export const DEFAULT_THEME = {
  fontSizes,
  media,
};
