interface Colors {
  [key: string]: string;
}

interface ThemeInterface {
  colors: Colors;
  fontSizes: string[];
  media: Media;
  themeName: string;
}

export interface Media {
  [key: string]: string;
}

export interface ThemeNameProps {
  themeName: string;
}

export interface Themes {
  [key: string]: ThemeInterface;
}
