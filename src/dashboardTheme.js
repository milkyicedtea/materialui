import {createTheme} from "@mui/material/styles";
import "@fontsource/varela-round"

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
        // https://mui.com/material-ui/customization/palette/
        palette: {
            // Color palette to customize or create
            primary: {
                main: "#bada55",
            },
            tomatored: {
                main: "#A12312",
            },
            // THIS IS BEST COLOR
            red: {
                main: "#FF0000",
            },
            // This is same color as error
            vermilion: {
                main: "#CB2821",
            },
            rose: {
                main: "#E63244",
            },
            trafficorange: {
                main: "#F54021",
            },
            signalorange: {
                main: "#D84B20",
            },
            salmon: {
                main: "#FA8072",
            },
            violet: {
                main: "#5C3A93",
            },
            lightblue: {
                main: "#ADD8E6",
                contrastText: "#000000",
            },
            trafficblue: {
                main: "#063971",
            },
            coffee: {
                main: "#6F4E37",
            },
            nutbrown: {
                main: "#5B3A29",
            },
            trafficyellow: {
                main: "#FAD201",
            },
            melonyellow: {
                main: "#F4A900",
            },
            green: {
                main: "#00FF00",
                contrastText: "#000000",
            },
            cream: {
                main: "#FDF4E3",
            },
            papyruswhite: {
                main: "#CFD3CD",
            },
            stonegrey: {
                main: "#8B8C7A",
            },
            grey: {
                main: "#696969",
            },
            anthracite: {
                main: "#293133",
            },
            graphiteblack: {
                main: "#1C1C1C",
            },
        },
        // https://mui.com/material-ui/customization/typography/
        typography: {
            h1: {
                fontSize: '1.6rem',
                color: '#FFFFFF',
                letterSpacing: '2px',
                // textTransform: 'capitalize',
            },
            h2: {
                fontSize: '1.25rem',
                color: '#FFFFFF',
                letterSpacing: '0.5px'
            },
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
                "'Varela Round'",
            ].join(','),
            fontWeight: [
                'bold'
            ].join(','),
        },
        // https://mui.com/material-ui/customization/spacing/
        // spacing: [4, 8, 12, 16, 20]
        // theme.spacing(4)
    },
})
