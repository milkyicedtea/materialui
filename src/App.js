import React, {useEffect, useState} from 'react'
import Navbar from "./components/Navbar/Navbar"
import {Outlet} from "react-router-dom"
import Grid from '@mui/material/Grid'
import {useLocation} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Header from "./components/common/Header/Header";

function App() {
    const [title, setTitle] = useState(null)
    const location = useLocation()

    useEffect(() => {
        const parsedTitle = location.pathname.replace(/\W/g, " ")
        setTitle(parsedTitle)
    }, [location])

    return (
        <Grid container={true}>
            <Outlet/>
        </Grid>
    )
}

export default App;
