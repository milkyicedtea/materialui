import React from "react"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import {homeStyles} from "./homeStyles";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link'
import {Twitter} from "@mui/icons-material";
import {YouTube} from "@mui/icons-material";
import Github from "../../components/common/Icons/Github";

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
                <Link href='https://github.com/milkyicedtea'>
                    <Github
                        sx={{
                            height: '64',
                            width: '64'
                        }}
                    />
                </Link>
                {/*<Link href='https://github.com/milkyicedtea'>*/}
                {/*    <Twitter*/}
                {/*        sx={{*/}
                {/*            color: 'error.main',*/}
                {/*            height: '64px',*/}
                {/*            width: '64px'*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</Link>*/}
                {/*<Link href='https://youtube.com/c/@Ignorance' target='_blank'>*/}
                {/*    <YouTube*/}
                {/*        sx={{*/}
                {/*            color: 'main',*/}
                {/*            height: '64px',*/}
                {/*            width: '64px'*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</Link>*/}
            </Box>
        </Box>

)
}

export default Home