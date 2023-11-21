import Icon from "@mui/material/Icon"
import {makeStyles} from "@mui/styles"

const iconStyles = makeStyles({
    imageIcon: {
        width: 'inherit',
        height: 'inherit',
        display:'flex'
    },
    iconRoot: {
        textAlign: 'center'
    }
})

const Github = () => {
    return (
        <Icon classes={iconStyles.iconRoot}>
            <img className={iconStyles.imageIcon} src={"../../../../public/github-mark/github-mark-white.svg"}/>
        </Icon>
    )
}

export default Github