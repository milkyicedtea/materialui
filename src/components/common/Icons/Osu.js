import Box from "@mui/material/Box";
import React from "react";
import {LinksProperties} from "./IconsProperties";


const Osu = ({sx, alt}) => {
    return (
        <Box
            component="img"
            sx={sx}
            alt={(alt) ? alt : 'Osu Profile'}
            src={LinksProperties['Osu'].src}
            onClick={() => LinksProperties['Osu'].handleClick()}
        />
    )
}

export default Osu