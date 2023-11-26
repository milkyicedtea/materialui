import Box from "@mui/material/Box";
import React from "react";
import {LinksProperties} from "./IconsProperties";


const Twitch = ({sx, alt}) => {
    return (
        <Box
            component="img"
            sx={sx}
            alt={(alt) ? alt : 'Twitch Channel'}
            src={LinksProperties['Twitch'].src}
            onClick={() => LinksProperties['Twitch'].handleClick()}
        />
    )
}

export default Twitch