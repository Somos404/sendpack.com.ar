import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Logo1 from '../../assets/Logo2.png';
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: "#D34D4D",
        width: "100%",
        height: "13em",
        zIndex: 1302,
        bottom: 0,
        position: "relative",
        [theme.breakpoints.down("xs")]: {
            
         }
         
    },
    footerRojo: {
        width: "25em",
      
        justify: "center",

        verticalAlign: "bottom",
       [theme.breakpoints.down("md")]: {
           width: "21em"
       },
       
       [theme.breakpoints.down("xs")]: {
           width: "20em",
           marginTop: "0em",
        }
        },
       mainContainer: {
           position: "absolute"
       },
       link: {
           color: "white",
           fontFamily: "Arial",
           fontSize: "0.73rem",
           fontWeight: "bold",
           textDecoration: "none"
       },
       gridItem: {
           margin: "3em"
       },
       icon: {
           height: "3em",
           width: "2em",
           [theme.breakpoints.down("xs")]: {
            height: "2.5em",
            width: "1.5em"
         }
       },
       socialContainer: {
           position: "absolute",
           marginTop: "-6em",
           right: "1.5em",
           [theme.breakpoints.down("xs")]: {
            right: "0.9em",
            marginTop: "-4em",
            }
       },
       contenedorCopy: {
           marginTop: "6.5em",
           marginLeft: "2em"
       },
       [theme.breakpoints.down("xs")]: {
        marginTop: "2em",
        marginLeft: "2em"
        }
    
}));

export default function Footer(props) {
    const classes = useStyles();

        return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                    <Grid 
                     container 
                     justify="center" 
                     className={classes.mainContainer}>
                        <Grid 
                            item 
                            className={classes.gridItem}>
                            <Grid 
                                container 
                                direction="column" 
                                spacing={2}>
                                <Grid 
                                    component={Link} 
                                    onClick={() => props.setValue(0)} 
                                    to="/" item 
                                    className={classes.link}>
                                    INICIO
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid 
                            item 
                            className={classes.gridItem}>
                            <Grid 
                                container 
                                direction="column" 
                                spacing={2}>
                                <Grid
                                    item 
                                    component={Link} 
                                    onClick={() => {props.setValue(1); 
                                    props.setSelectedIndex(0)}} 
                                    to="/servicios" 
                                    className={classes.link}>
                                    SERVICIOS
                                </Grid>
                                <Grid 
                                    component={Link} 
                                    onClick={() => {props.setValue(1); 
                                    props.setSelectedIndex(1)}} 
                                    to="/encomiendas" 
                                    item 
                                    className={classes.link}>
                                    Logistica corporativa para empresas
                                </Grid>
                                <Grid 
                                    component={Link} 
                                    onClick={() => {props.setValue(1); 
                                    props.setSelectedIndex(2)}} 
                                    to="/mudanzas" 
                                    item 
                                    className={classes.link}>
                                    Transporte General                                
                                </Grid>
                                <Grid 
                                    component={Link} onClick={() => {props.setValue(1); 
                                    props.setSelectedIndex(3)}} 
                                    to="/logistica:dist_prod" 
                                    item className={classes.link}>
                                    Mudanzas
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid 
                            item 
                            className={classes.gridItem}>
                            <Grid 
                                container 
                                direction="column" 
                                spacing={2}>
                                <Grid 
                                    component={Link} 
                                    onClick={() => props.setValue(2)} 
                                    to="/sobre_nosotros" 
                                    item className={classes.link}>
                                    SOBRE NOSOTROS
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid 
                            item 
                            className={classes.gridItem}>
                            <Grid 
                                container 
                                direction="column" 
                                spacing={2}>
                                <Grid 
                                    component={Link} 
                                    onClick={() => props.setValue(3)} 
                                    to="/contacto" 
                                    item className={classes.link}>
                                    CONTACTO
                                </Grid>
                                <Grid 
                                    item 
                                    className={classes.link}
                                    component={Link} to="https://wa.link/i0tbjs"
                                    
                                    > 379 4007273
                                                     
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>
            <img 
            alt="globe" 
            src={Logo1} 
            className={classes.footerRojo}
            /> 
            <Grid 
                container 
                justify="flex-end" 
                spacing={2} 
                className={classes.socialContainer}>  
                <Grid 
                    item component={"a"} 
                    href="https://www.facebook.com/sendpackctes/" 
                    rel="noopener noreferrer" 
                    tarjet="_blank">
                    <img  
                        alt="facebook logo" 
                        src={facebook} 
                        className={classes.icon} 
                    />
                </Grid>
                <Grid 
                    item component={"a"} 
                    href="https://instagram.com/sendpack.ok?igshid=6z9197hp0rho" 
                    rel="noopener noreferrer" 
                    tarjet="_blank">
                    <img 
                        alt="instagram logo" 
                        src={instagram} 
                        className={classes.icon} 
                    />
                </Grid>
                <Grid item container alignItems="center" justify="center" className={classes.contenedorCopy}>
                    <Grid 
                        component={Link} 
                        styles={{textDecoration:"none"}}
                        to="/" 
                        item className={classes.link}>
                        ©opyrigh Somos404studio Not Found
                    </Grid>        
                </Grid>                   
                </Grid>   
        </footer>
        );
}
