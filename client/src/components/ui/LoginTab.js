import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ReactDOM from 'react-dom'
import useMediaQuery from "@material-ui/core/useMediaQuery";
import axios from 'axios';
import AuthService from "services/AuthService";
import { useHistory } from "react-router-dom";

import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import './iconoFacebook.css'
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing.unit * 2,
        
    },
    padding: {
        padding: theme.spacing.unit,
        marginLeft: "32.5em",
        marginTop: "3em",
        marginBottom: "3em",
        [theme.breakpoints.down("xs")]: {
            marginTop: "5em",
            marginLeft: "2em"
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

const EmailVer = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function LoginTab(props) {

        const history = useHistory();

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        function validateForm() {
            let isEmail = EmailVer.test(String(email).toLowerCase());
            return isEmail && password.length > 6;
        }
    
        const classes = useStyles();
        
        const theme = useTheme();
        const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
        const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
        

        const handleSubmit = (e) => {
            e.preventDefault();
            AuthService.login(email, password).then(
                data => {
                    if (data.ok) {
                        history.push({
                            pathname:  props.location.customroute,
                            reload: true
                        });

                    }else{
                        //no pudo logear ya se por clave erronea o usuario
                    }
                   
                },
                error => {
                    //mensaje de error sacael el spiner 
                }
            );
        }

        const loginHandler=(response)=>{
            AuthService.googleFacebookHandler(response).then(
                data => {
                    if (data.ok) {
                        history.push({
                            pathname:  props.location.customroute,
                            reload: true
                        });

                    }else{
                        //no pudo logear ya se por clave erronea o usuario
                    }
                },
                error => {
                    //mensaje de error
                }
            );
        }
  
        return (
            
            <Paper className={classes.padding} justify="center" alignItems="center" style={{ width: matchesSM ? "80%" : '30%' }}>
                <div className={classes.margin}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Face />
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    id="username" 
                                    label="Usuario" 
                                    type="email" 
                                    fullWidth autoFocus required />
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Fingerprint />
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField 
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    id="userpass" 
                                    label="Contraseña" 
                                    type="password" 
                                    fullWidth required />
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
                                disabled={!validateForm()}
                                type="submit"
                                className={classes.botonIngresar} 
                                variant="outlined" 
                                color="primary"
                                style={{ textTransform: "none" }}>Ingresar</Button>
                        </Grid>
                    </form>
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
                            onSuccess={loginHandler}
                            onFailure={loginHandler}
                            cookiePolicy={'single_host_origin'}
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

 
   