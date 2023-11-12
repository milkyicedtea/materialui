import {createTheme} from "@mui/material/styles";

export const dashboardTheme = createTheme({
    // https://mui.com/material-ui/customization/theming/
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // CSS
                    // fontSize: 'red!important',
                },
            },
        },
    },
    // https://mui.com/material-ui/customization/palette/
    palette: {
        // Color palette to customize
        primary: {
            main: "#bada55",
        }
    },
    // https://mui.com/material-ui/customization/typography/
    typography: {
        fontFamily: [
            '-apple-system',
            'BlindMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    // https://mui.com/material-ui/customization/spacing/
    spacing: [4, 8, 12, 16, 20]
    // theme.spacing(4)
})