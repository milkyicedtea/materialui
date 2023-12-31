import * as React from 'react';
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuRounded from '@mui/icons-material/MenuRounded';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Icon} from "@mui/material";

// function useClientRect() {
//   const [rect, setRect] = React.useState(null);
//   const ref = React.useCallback(node => {
//     if (node !== null) {
//       setRect(node.getBoundingClientRect());
//     }
//   }, []);
//   return [rect, ref];
// }
//
// const [rect, ref] = useClientRect()

const drawerWidth = 240
const navItems = ['Home', 'About', 'Contacts']

export default function DrawerAppBar(props) {

    const {window} = props
    const [mobileOpen, setMobileOpen] = React.useState(false)


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle}
             sx={{
                 textAlign: 'center',
                 backgroundColor: '#6F4E37'
            }}
        >
            <Typography variant='h6'
                        sx={{marginY: 2}}
            >
                MUI
            </Typography>
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{textALign: 'center'}}>
                            <ListItemText primary={item}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    const container = window !== undefined ? () => window().document.body : undefined

    return (
        <Box sx={{display: 'flex',
            // color: '#6F4E37'
        }}
            // ref={ref}
        >
            <AppBar component='nav'
                sx={{
                    // color: '#6F4E37'
                }}>
                <Toolbar>
                    <Icon
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        sx={{
                            marginRight: 2,
                            color: 'tomatored.main',
                            display: {
                                sm: 'none'
                            }
                        }}
                    >
                        <MenuRounded/>
                    </Icon>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'none',
                                sm: 'block'
                            }
                        }}
                    >
                        MUI
                    </Typography>
                    <Box
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'block',
                            }
                        }}
                    >
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                sx={{

                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true
                    }}
                    sx={{
                        display: {
                            xs: 'block',
                            sm: 'none'
                        },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth
                        }
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    )
}
