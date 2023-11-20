import React from "react"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import {homeStyles} from "./homeStyles";
import Typography from "@mui/material/Typography";

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
                    src = 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'
                />
            </Box>

        </Box>

)
}

export default Home