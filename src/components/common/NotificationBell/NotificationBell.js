import React from 'react'
import NotificationIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import BasicMenu from "../BasicMenu/BasicMenu";

const NotificationBell = ({iconColor, badgeColor, sx=null}) => {

    const notifications = [
        {
            id: 0,
            label: 'Notification 1'
        },
        {
            id: 1,
            label: 'Notification 2'
        },
    ]

    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const newNotifications = `You have ${notifications.length} new notifications`
    const noNotification = 'Nessuno frocio'

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Tooltip title={notifications.length ? newNotifications : noNotification}>
                <IconButton
                    color={iconColor}
                    onClick={notifications.length ? handleOpen : null}
                    anchorEl={anchorEl}
                    sx={{
                        marginLeft: "5px",
                        marginRight: "10px"
                    }}
                >
                    <Badge
                        badgeContent={notifications.length}
                        color={badgeColor}
                    >
                        <NotificationIcon/>
                    </Badge>
                </IconButton>
            </Tooltip>
            <BasicMenu
                open = {open}
                anchorEl={anchorEl}
                handleClose={handleClose}
                menuItems={notifications}
            />
        </div>
    )
}

export default NotificationBell