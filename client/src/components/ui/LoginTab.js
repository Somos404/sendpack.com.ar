import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ReactDOM from 'react-dom'
import useMediaQuery from "@material-ui/core/useMediaQuery";

import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import './iconoFacebook.css'
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing.unit * 2,
        
    },
    padding: {
        padding: theme.spacing.unit,
        marginLeft: "30em",
        marginTop: "3em",
        marginBottom: "3em",
        [theme.breakpoints.down("xs")]: {
            marginTop: "5em",
            marginLeft: "14em"
          },
    },

    botonIngresar: {
        backgroundColor: "#8EC3C7",
        color: "white",
        borderRadius: 50,
        height: 45,
        width: 145,
        
        "&:hover": {
          backgroundColor: "#D34D4C",
          border: "none",
          opacity: 1,
        },
    },
    iconoFacebook: {
        height: "2em"
    }
}));

export default function LoginTab(props) {
    
        const classes = useStyles();
        
        const theme = useTheme();
        const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
        const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
        
        const respuestaGoogle=(respuesta)=>{

        }
        const responseFacebook = (response) => {
            console.log(response);
          }

        
        return (
            
            <Paper className={classes.padding} justify="center" alignItems="center" style={{ width: matchesSM ? "100%" : '30%' }}>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Usuario" type="email" fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Contraseña" type="password" fullWidth required />
                        </Grid>
                        
                    </Grid>
                    <Grid container alignItems="center" justify="space-between" style={{ marginTop: '2em' }}>
                        <Grid item>
                            <FormControlLabel control={
                                <Checkbox
                                    color="primary"
                                />
                            } label="Recordarme" />
                        </Grid>
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Olvidaste la contraseña? ?</Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '3em' }}>
                        <Button
                            className={classes.botonIngresar} 
                            variant="outlined" 
                            color="primary" 
                            style={{ textTransform: "none" }}>Ingresar</Button>
                    </Grid>
                    <Grid 
                        item 
                        container
                        justify="center"
                        alignItems="center"
                        direction="row"
                        style={{ marginTop: "2em" }}
                        >
                        <GoogleLogin
                            clientId="448673356256-kou597h432km5h0nbtij5vmlgs9o6a53.apps.googleusercontent.com"
                            buttonText="Acceder con Google"
                            onSuccess={respuestaGoogle}
                            onFailure={respuestaGoogle}
                            cookiePolicy={'single_host_origin'}
                            />
                    </Grid>
                    <Grid 
                        item 
                        container
                        justify="center"
                        alignItems="center"
                        direction="row"
                        style={{ marginTop: "2em" }}
                        >
                        <FacebookLogin
                        appId="1033562960426830"
                        autoLoad={false}
                        fields="name,email,picture"
                        textButton="Acceder con Facebook"
                        icon="fa-facebook"
                        callback={responseFacebook}
                        cssClass="iconoFacebook"
                    />
                    </Grid>
                    <Grid 
                        item container  
                        justify="center"
                        alignItems="center"
                        direction="row"
                        style={{ marginTop: '2em' }}>
                            <Button
                                component={Link}
                                to="/registro"
                                disableFocusRipple 
                                disableRipple style={{ textTransform: "none" }} 
                                variant="text" 
                                color="primary">Registrarme</Button>
                        </Grid>
                </div>
                 
            </Paper>
            
        );
       
    }

 
   