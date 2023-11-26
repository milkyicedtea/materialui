import Box from "@mui/material/Box";
import React from "react";
import {LinksProperties} from "./IconsProperties";


const Github = ({sx, alt}) => {
    return (
        <Box
            component="img"
            sx={sx}
            alt={(alt) ? alt : 'Github Profile'}
            src={LinksProperties['Github'].src}
            onClick={() => LinksProperties['Github'].handleClick()}
        />
    )
}

export default Github