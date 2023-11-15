import React, {useEffect, useState} from 'react'
import Navbar from "./components/Navbar/Navbar"
import {Outlet} from "react-router-dom"
import Grid from '@mui/material/Grid'
import Header from "./components/common/Header/Header";
import {useLocation} from "react-router-dom";
import {cleanup} from "@testing-library/react";

function App() {
    const [title, setTitle] = useState(null)
    const location = useLocation()

    useEffect(() => {
        const parsedTitle = location.pathname.replace(/\W/g, " ")
        setTitle(parsedTitle)
    }, [location])

    return (
        <Grid container={true}>
            <Navbar/>
            <Header title={title}/>
            <Outlet/>
        </Grid>
    )
}

export default App;
