import React from 'react'
import Grid from '@mui/material/Grid'
import CommonButton from "../../components/common/CommonButton/commonButton";
import NotificationBell from "../../components/common/NotificationBell/NotificationBell";

const Authentication = () => {
    // const buttonStyles = {
    //     fontSize: '0.875rem',
    //     fontWeight: 600,
    //     textTransform: 'capitalize',
    //     borderRadius: 2.5,
    //     '&.MuiButton-contained': {
    //         backgroundColor: '#009be5',
    //         '&:hover': {
    //             backgroundColor: '#006db3'
    //         },
    //     },
    //     '&.MuiButton-outlined': {
    //         color: "#fff",
    //         borderColor: '#fff',
    //         '&:hover': {
    //             backgroundColor: 'blue'
    //         },
    //     },
    // };

    return (
        <Grid item xs={8}>
            This is authentication page.
            <CommonButton
                // sx={buttonStyles}
                variant="contained"
            >
                Add user
            </CommonButton>
            <CommonButton
                // sx={buttonStyles}
                variant="outlined"
            >
                Web setup
            </CommonButton>
            <CommonButton
                variant="contained"
                color="primary"
            >
                Primary
            </CommonButton>
            <NotificationBell
                iconColor={'coffee'}
                badgeContent={'0'}    //0 = No notifica
                badgeColor={'red'}
            />
        </Grid>
    )
}

export default Authentication