import Box from "@mui/material/Box";
import React from "react";
import {LinksProperties} from "./IconsProperties";

const CustomIcon = ({sx, alt, src, href}) => {
    const handleClick = () => {
        window.location.assign(href.toString())
    }

    return (
        <Box
            component="img"
            sx={sx}
            alt={alt}
            src={src}
            onClick={() => handleClick()}
        />
    )
}

export default CustomIcon