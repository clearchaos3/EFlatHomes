// theme.js
import { green, orange } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core';

const fonts = "'Quicksand', sans-serif";

export const lightTheme = createMuiTheme({
    palette: {
      primary: orange,
      secondary: green,
      type: 'light'
    },
    shape: {
        borderRadius: 10,
      },
      typography: {
        fontFamily: fonts,
        button: {
          textTransform: 'none'
        }
      }
  });
  
export const darkTheme = createMuiTheme({
    palette: {
      primary: orange,
      secondary: green,
      type: 'dark'
    },
    shape: {
        borderRadius: 10,
      },
      typography: {
        button: {
          textTransform: 'none'
        }
      }
  });