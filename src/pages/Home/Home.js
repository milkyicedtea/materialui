import React from "react"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import {homeStyles} from "./homeStyles";
import Typography from "@mui/material/Typography";
import Image from "mui-image";
import {dashboardTheme} from "../../dashboardTheme";

const links = {
    Github: {
        id: 'Github',
        src: 'https://i.ibb.co/mzWdMWK/github-mark-white.png',
        handleClick:() => {
            window.location.assign("https://github.com/milkyicedtea");
        },
    },
    Youtube: {
        id: 'Youtube',
        src: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
        handleClick:() => {
            window.location.assign("https://youtube.com/c/@Ignorance");
        }
    },
    Osu: {
        id: 'Osu',
        src: '',
    },
    Twitter: {
        id: 'Twitter',
        src: '',
        handleClick:() => {
            window.location.assign("https://twitter.com/ignorancespam");
        }
    }
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
            <Typography sx={homeStyles.welcomeText}>
                Stay hydrated :)
            </Typography>
            <Typography sx={homeStyles.introText}>
                Small React app that i will to use to practice, keep my links and have my own cooking recipes in
            </Typography>
            <Box sx={homeStyles.linkBox}>
                <Box
                    component="img"
                    sx={{
                        height: 48,
                        width: 48,
                      }}
                    alt="The house from the offer."
                    src={links['Github'].src}
                    onClick={() => links['Github'].handleClick()}
                />
            </Box>
        </Box>

)
}

export default Home