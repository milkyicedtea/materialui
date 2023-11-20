import React from 'react'
import CommonButton from "../CommonButton/CommonButton"
import NotificationBell from "../NotificationBell/NotificationBell"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Tooltip from "@mui/material/Tooltip"
import HelpIcon from "@mui/icons-material/Help"
import Box from "@mui/material/Box"
import {headerStyles} from './headerStyles'

const Header = ({title}) => {
    return (
        <Box sx={headerStyles.wrapper}>
            <Box sx={headerStyles.topRow}>
            <Typography
                sx={headerStyles.link}
            >
                Go to docs
            </Typography>
            <NotificationBell
                iconColor={'lightblue'} // Bell and text color
                badgeColor={'green'} // Tooltip color
            />
            <Avatar
                src='https://i.pinimg.com/1200x/7a/31/68/7a31685c7b607f1a742658dc182e353c.jpg'
                alt='Avatar'
                variant='circular'
                sx={{
                    width: 75,
                    height: 75,
                    borderColor: "#FFFFFF",
                    marginLeft: "5px",
                    marginRight: "5px"
                }}
            />
            </Box>
            <Box sx={headerStyles.middleRow}>
                <Typography
                    variant="h1"
                    color="white"
                >
                    {title}
                </Typography>
                <Box>
                    <CommonButton
                        sx={headerStyles.webButton}
                        variant="outlined"
                    >
                        Web setup
                    </CommonButton>
                    <Tooltip
                        title="Help"
                    >
                        <IconButton
                            color="white"
                            // sx={headerStyles.helpIcon}
                        >
                            <HelpIcon/>
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    )
}

export default Header