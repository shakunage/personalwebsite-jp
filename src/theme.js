import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    typography: {
        name: {
            fontFamily: [
                'Montserrat'
            ].join(','),
            fontSize: "2rem"
        },
        link: {
            fontFamily: [
                'montserrat'
            ].join(','),
            fontSize: "1.4rem"
        }
      },
    palette: {
        background: {
            default: "#e3e3e3"
        },
    },
  });

export default theme;