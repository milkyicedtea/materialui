import Box from "@mui/material/Box";
import React from "react";
import {LinksProperties} from "./IconsProperties";


const Twitter = ({sx, alt}) => {
    return (
        <Box
            component="img"
            sx={sx}
            alt={(alt) ? alt : 'Twitter Profile'}
            src={LinksProperties['Twitter'].src}
            onClick={() => LinksProperties['Twitter'].handleClick()}
        />
    )
}

export default Twitter