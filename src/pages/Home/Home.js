import React from "react"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import {homeStyles} from "./homeStyles";
import Typography from "@mui/material/Typography";
import {Image} from "@mui/icons-material";
import CardMedia from "@mui/material/CardMedia"

const handleClickGithub = () => {
    window.location.assign("https://github.com/milkyicedtea")
}

const handleClickYoutube = () => {
    window.location.assign("https://github.com/milkyicedtea")
}

const handleClickTwitter = () => {
    window.location.assign("https://twitter.com/ignoranceuwu")
}

const handleClickOsu = () => {
    window.location.assign("https://osu.ppy.sh/users/20178628")
}

const handleClickTwitch = () => {
    window.location.assign("https://twitch.tv/strxwberryice")
}

const Home = () => {

    return (
        <Box sx={homeStyles.backgroundBox}>
            <Avatar
                src='https://i.pinimg.com/1200x/7a/31/68/7a31685c7b607f1a742658dc182e353c.jpg'
                alt='Avatar'
                variant='circular'
                sx={{
                    width: 180,
                    height: 180,
                    marginTop: '2.5%'
                }}
            />
            <Typography variant='h1' sx={homeStyles.welcomeText}>
                Stay hydrated :)
            </Typography>
            <Typography variant='h2' sx={homeStyles.introText}>
                Small React app that i will to use to practice, keep my links and have my own cooking recipes in
            </Typography>
            <Box>
                <Avatar
                    src="https://i.ibb.co/mzWdMWK/github-mark-white.png"
                    alt='Github'
                    onClick={() => {
                        handleClickGithub();
                    }}
                />
                <CardMedia
                    sx={{
                        height: "32px",
                        width: "32px",
                    }}
                    alt='Github'
                    variant='rounded'
                    onClick={() => {
                        handleClickYoutube();
                    }}
                >
                    <img
                        alt="Youtube"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"/>
                </CardMedia>
            </Box>
        </Box>

)
}

export default Home