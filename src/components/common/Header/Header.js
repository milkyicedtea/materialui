import React from 'react'
import CommonButton from "../CommonButton/CommonButton"
import NotificationBell from "../NotificationBell/NotificationBell"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Tooltip from "@mui/material/Tooltip"
import HelpIcon from "@mui/icons-material/Help"
import Box from "@mui/material/Box"
import {headerStyles} from './styles'

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
                src='https://i.ibb.co/KN9jghK/image.png'
                variant='circular'
                sx={{
                    width: 50,
                    height: 50,
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