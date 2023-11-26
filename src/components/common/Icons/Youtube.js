import Box from "@mui/material/Box";
import React from "react";
import {LinksProperties} from "./IconsProperties";

const Youtube = ({sx, alt}) => {
    return (
        <Box
            component="img"
            sx={sx}
            alt={(alt) ? alt : 'Youtube Channel'}
            src={LinksProperties['Youtube'].src}
            onClick={() => LinksProperties['Youtube'].handleClick()}
        />
    )
}

export default Youtube