import React from 'react'
import Grid from '@mui/material/Grid'
import CommonButton from "../../components/common/CommonButton/commonButton";
import NotificationBell from "../../components/common/NotificationBell/NotificationBell";
import BasicMenu from "../../components/common/BasicMenu/BasicMenu"
import Avatar from '@mui/material/Avatar'
import Header from "../../components/common/Header/Header"

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
            <Header/>
        </Grid>
    )
}

export default Authentication