import Box from "@mui/material/Box";
import React, {useState} from "react";
import {LinksProperties} from "./IconsProperties";

const Github = ({sx, alt}) => {
    return (
        <Box
            component="img"
            sx={sx}
            alt={(alt) || 'Github Profile'}
            src={LinksProperties['Github']?.src}
            onClick={() => LinksProperties['Github'].handleClick()}
            onError={(e) => {
                e.target.src = './img-github-mark-white.png'
            }}
        />
    )
}

export default Github