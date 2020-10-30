import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';


const useStyles = makeStyles(theme => ({
     botonLeerMas: {
        borderColor: "#D34D4C",
        color: "#D34D4C",
        borderWidth: 2,
        borderRadius: 50,
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "0.7rem",
        height: 35,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    subtitle: {
        marginBottom: 1
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0 
        }
    },
    servicioContainer: {
        marginTop: "10em",
        [theme.breakpoints.down("sm")]: {
            padding: 25 
        }
    }
}))

export default function Servicios(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    
    return (
        <Grid container direction="column">
            <Grid item> {" "} {/*---Contenedor de Servicio---*/}
                <Grid 
                    container 
                    direction="row" 
                    justify={matchesSM ? "center" : undefined}
                    className={classes.servicioContainer}>
                    <Grid item style={
                        {marginLeft: matchesSM ? 0 : "5em",
                         textAlign: matchesSM ? "center" : undefined}}>
                    <Typography variant="h4"> 
                        Low Cost
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}> 
                        Loren Ipsum. Loren ipsum. Ipsum Lorem
                    </Typography>
                    <Typography variant="subtitle1"> 
                    Loren Ipsum. Loren ipsum. Ipsum Lorem,{" "} 
                    <span>Loren Ipsum</span> 
                    </Typography>
                    <Button variant="outlined" className={classes.botonLeerMas}>
                        <span style={{marginRight: 10}}>Leer más</span>                   
                    </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt="custom software icon" src={customSoftwareIcon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {" "} {/*--- Servicio Económico---*/}
                <Grid container direction="row" justify={matchesSM ? "center" : "flex-end"}
                    className={classes.servicioContainer}>
                    <Grid item style={{
                         textAlign: matchesSM ? "center" : undefined}}>
                    <Typography variant="h4"> 
                        Servicio Económico
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}> 
                        Loren Ipsum. Loren ipsum. Ipsum Lorem
                    </Typography>
                    <Typography variant="subtitle1"> 
                    Loren Ipsum. Loren ipsum. Ipsum Lorem,{matchesSM ? null : <br />}Ipsum Lorem 
                   
                    </Typography>
                    <Button variant="outlined" className={classes.botonLeerMas}>
                        <span style={{marginRight: 10}}>Leer más</span>                   
                    </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                        <img className={classes.icon} alt="mobile phon icon" src={mobileAppsIcon} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}