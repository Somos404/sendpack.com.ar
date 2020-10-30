import React from 'react';
import { Link } from 'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import backgroundContacto from "../../assets/recursos/backgroundContacto.png";

const useStyles = makeStyles(theme => ({
    backgroundContacto: {
        backgroundImage: `url(${backgroundContacto})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        width: "100%",
        
        [theme.breakpoints.down("sm")]: {
        backgroundImage: "none",
        },
    }
}));

export default function Contacto() {
    const classes = useStyles()
    const theme = useTheme()
    
    return (
        <Grid container direction="row">
            <Grid item container direction="column">
                <Grid item>
                    <Typography variant="h2" style={{lineHeight: 1.5, fontFamily: "Roboto"}}>CONTACTATE CON NOSOTROS</Typography> 
                    <Typography variant="body1" style={{ color: "#C76869",  fontFamily: "Roboto", fontWeight: 800}}>Preocupate por otra cosa</Typography>       
                </Grid>    
            </Grid>
            <Grid item container className={classes.backgroundContacto}>
                
            </Grid>
        </Grid>
    )
}
