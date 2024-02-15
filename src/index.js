// mostly React imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import {ThemeProvider} from "@mui/material/styles";

// Pages routes
import Authentication from "./pages/Authentication/Authentication";
import Recipes from './pages/Recipes/Recipes';
import Storage from './pages/Storage/Storage';
import Hosting from './pages/Hosting/Hosting';
import Functions from './pages/Functions/Functions';
import MachineLearning from './pages/MachineLearning/MachineLearning';
import Home from './pages/Home/Home'
import {dashboardTheme} from "./dashboardTheme";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

ReactDOM.render(
    <ThemeProvider theme={dashboardTheme}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<DevSupport ComponentPreviews={ComponentPreviews}
                                                 useInitialHook={useInitial}
            >
                <App/>
            </DevSupport>}>
                {/*<Route path="/" element={<Home/>}/>*/}
                <Route path="/home" element={<Home/>}/>
                <Route path="/authentication" element={<Authentication/>}/>
                <Route path="/database" element={<Recipes/>}/>
                <Route path="/functions" element={<Functions/>}/>
                <Route path="/hosting" element={<Hosting/>}/>
                <Route path="/machine-learning" element={<MachineLearning/>}/>
                <Route path="/storage" element={<Storage/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();