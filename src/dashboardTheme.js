import {createTheme} from "@mui/material/styles";

export const dashboardTheme = createTheme({
    // https://mui.com/material-ui/customization/theming/
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    borderRadius: 8.5,
                    '&.MuiButton-outlined': {
                        color: '#FFFFFF',
                        borderColor: '#FFFFFF',
                        '&:hover': {
                            backgroundColor: 'transparent'
                        },
                    },
                    // CSS
                    // fontSize: 'red!important',
                },
            },
        },
    },
    // https://mui.com/material-ui/customization/palette/
    palette: {
        // Color palette to customize or create
        // primary: {
        //     main: "#bada55",
        // }
        green: {
            main: "#00FF00",
        },
        // This is same color as error
        red: {
            main: "#FF0000",
        },
        lightblue: {
            main: "#ADD8E6",
        },
        violet: {
            main: "#5C3A93",
        },
        coffee: {
            main: "#6F4E37",
        },
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
    // spacing: [4, 8, 12, 16, 20]
    // theme.spacing(4)
})