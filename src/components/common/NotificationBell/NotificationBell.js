import React from 'react'
import NotificationIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

const NotificationBell = ({iconColor, badgeContent, badgeColor}) => {
    const newNotifications = `${badgeContent} FROCIO`
    const noNotification = 'Nessuno frocio'
    return (
        <Tooltip title={badgeContent ? newNotifications : noNotification}>
        <IconButton
            color={iconColor}
        >
        <Badge
            badgeContent={badgeContent}
            color={badgeColor}
        >
            <NotificationIcon/>
        </Badge>
        </IconButton>
        </Tooltip>
    )
}

export default NotificationBell