import { createMuiTheme, ThemeOptions } from '@material-ui/core';

export const themesConfig: ThemeOptions = {
  palette: {
    type: 'dark',
    background: {
      default: '#091921',
      paper: '#fff'
    },
    primary: {
      light: '#ff6ea7',
      main: '#ff3077',
      dark: '#c6004d'
    },
    secondary: {
      light: '#acff72',
      main: '#74ff3b',
      dark: '#30cb00',
      contrastText: '#111'
    },
    action: { hover: '#fff' }
  }
};

export const theme = createMuiTheme(themesConfig);
