import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    typography: {
        name: {
            fontFamily: [
                'Montserrat'
            ].join(','),
            fontSize: 32
        },
        link: {
            fontFamily: [
                'montserrat'
            ].join(','),
            fontSize: 22
        }
      },
    palette: {
        background: {
            default: "#e3e3e3"
        },
    },
  });

export default theme;