import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Logo1 from '../../assets/Logo1.svg';
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: "#D34D4D",
        width: "100%",
        height: "13em",
        zIndex: 1302,
        position: "relative",
        [theme.breakpoints.down("xs")]: {
            width: "215%"
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
           marginTop: "2em",
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
           width: "3em",
           [theme.breakpoints.down("xs")]: {
            height: "2.5em",
            width: "2.5em"
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
                                    Expreso de encomiendas
                                </Grid>
                                <Grid 
                                    component={Link} 
                                    onClick={() => {props.setValue(1); 
                                    props.setSelectedIndex(2)}} 
                                    to="/mudanzas" 
                                    item 
                                    className={classes.link}>
                                    Mudanzas familiares y corporativas
                                </Grid>
                                <Grid 
                                    component={Link} onClick={() => {props.setValue(1); 
                                    props.setSelectedIndex(3)}} 
                                    to="/logistica:dist_prod" 
                                    item className={classes.link}>
                                    Logística y distribución de productos
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
                                <Grid 
                                    component={Link} 
                                    onClick={() => props.setValue(2)} 
                                    to="/MyV" 
                                    item className={classes.link}>
                                    Misión y Visión
                                </Grid>
                                <Grid 
                                    component={Link} 
                                    onClick={() => props.setValue(2)} 
                                    to="/" 
                                    item className={classes.link}>
                                    Lorem Ipsum
                                </Grid>
                                <Grid 
                                    component={Link} 
                                    onClick={() => props.setValue(2)} 
                                    to="/"    
                                    item className={classes.link}>
                                    Lorem Ipsum
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
                                    className={classes.link}>
                                    boton de whats                        
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
                    href="https://www.facebook.com" 
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
                    href="https://www.instagram.com" 
                    rel="noopener noreferrer" 
                    tarjet="_blank">
                    <img 
                        alt="instagram logo" 
                        src={instagram} 
                        className={classes.icon} 
                    />
                </Grid>

            </Grid>   
        </footer>
        );
}
