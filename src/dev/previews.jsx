import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import App from "../App";
import Authentication from "../pages/Authentication/Authentication";
import NotificationBell from "../components/common/NotificationBell/NotificationBell";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/Authentication">
                <Authentication/>
            </ComponentPreview>
            <ComponentPreview path="/NotificationBell">
                <NotificationBell/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews