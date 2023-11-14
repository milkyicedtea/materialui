import React from 'react'
import Grid from '@mui/material/Grid'
import CommonButton from "../../components/common/CommonButton/commonButton";
import NotificationBell from "../../components/common/NotificationBell/NotificationBell";
import BasicMenu from "../../components/common/BasicMenu/BasicMenu"

const Authentication = () => {
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
        <Grid item xs={8}>
            This is authentication page.
            <NotificationBell
                iconColor={'lightblue'}
                // textColor={}
                badgeContent={'franco'}    //0 = No notifica, "0" = "Notifica 0"
                badgeColor={'green'}
                anchorEl={anchorEl}
                onClick={handleOpen}
            />
            <BasicMenu
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
            />
        </Grid>
    )
}

export default Authentication