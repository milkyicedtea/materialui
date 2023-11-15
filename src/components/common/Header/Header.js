import React from 'react'
import CommonButton from "../CommonButton/commonButton";
import NotificationBell from "../NotificationBell/NotificationBell";
import Avatar from "@mui/material/Avatar";

const Header = () => {
    const [open, setOpen] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <CommonButton variant="default"
            >
                Go to docs
            </CommonButton>
            <NotificationBell
                iconColor={'lightblue'} // Bell and text color
                // textColor={}
                badgeContent={1}    //0 = No notifica, "0" = "Notifica 0"
                badgeColor={'green'} // Tooltip color
                anchorEl={anchorEl}
                onClick={handleOpen}
            />
            <Avatar
                src='https://i.ibb.co/KN9jghK/image.png'
                variant='circular'
                sx={{
                    width: 200,
                    height: 200,
                }}
            />
        </div>
    )
}

export default Header