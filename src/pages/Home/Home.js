import React, {useRef} from "react"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import {homeStyles} from "./homeStyles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container"


import Github from "../../components/common/Icons/Github";
import Twitter from "../../components/common/Icons/Twitter";
import Osu from "../../components/common/Icons/Osu"
import Twitch from "../../components/common/Icons/Twitch";
import Youtube from "../../components/common/Icons/Youtube";
import DrawerAppBar from "../../components/common/DrawerBar/DrawerBar";

const Home = () => {

    function useClientRect() {
  const [rect, setRect] = React.useState(null);
  const ref = React.useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
}

    const [rect, ref] = useClientRect()

    return (
    <Box>
        <Box
            ref={ref}
            sx={{marginBottom: '10%px'}}
        >
            <DrawerAppBar/>
        </Box>
        <Box
            sx={homeStyles.backgroundBox}
        >
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
                {rect !== null && (
                    <h2>
                        {Math.round(rect.height)}
                    </h2>
                )}
            </Typography>
            <Box sx={homeStyles.linkBox}>
                <Twitter
                    sx={{
                        marginLeft: '5px',
                        marginRight: '5px',
                        maxWidth: '48px',
                        cursor: 'pointer'
                    }}
                />
                <Github
                    sx={{
                        marginLeft: '5px',
                        marginRight: '5px',
                        maxWidth: '48px',
                        cursor: 'pointer'
                    }}
                />
                <Youtube
                    sx={{
                        marginLeft: '5px',
                        marginRight: '5px',
                        maxWidth: '48px',
                        cursor: 'pointer'
                    }}
                />
                <Osu
                    sx={{
                        marginLeft: '5px',
                        marginRight: '5px',
                        maxWidth: '48px',
                        cursor: 'pointer'
                    }}
                />
                <Twitch
                    sx = {{
                        marginLeft: '5px',
                        marginRight: '5px',
                        maxWidth: '48px',
                        cursor: 'pointer'
                    }}
                />
            </Box>
            <Box
                sx={{
                    marginTop: 'auto',
                }}
            >
                <Container maxWidth="sm"
                    sx={{
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Typography sx={homeStyles.footer}>
                        Made with ❤ by ignorance
                    </Typography>
                    <Typography
                        sx={homeStyles.credits}
                        onClick={() => {
                            window.location.assign('/Credits')
                        }}
                    >
                        Credits
                    </Typography>
                </Container>
            </Box>
            <Box sx={{height: '5vh'}}/> {/*This is literally just for the footer to be up*/}
        </Box>
    </Box>
    )
}

export default Home