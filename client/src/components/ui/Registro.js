import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AuthService from "services/AuthService";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import data from "animations/documentsAnimation/data";
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
            marginLeft: "14em"
          },
    },
    botonRegistrar: {
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
    }
}));
const EmailVer = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Registro(props) {
    
        const classes = useStyles();
        
        const theme = useTheme();
        const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
        const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
        
        const [inputs,  setInputs] = useState({
            name: "",
            last_name: "",
            email: "",
            password: "",
            repeatPassword: "",
        });

        const changeForm = e => {
            if (e.target.name) {
                setInputs({
                    ...inputs,
                    [e.target.name]: e.target.value
                })
            }
        }

        function validateForm() {
            let isEmail = EmailVer.test(String(inputs.email).toLowerCase());
            let isEqualPassword = inputs.password === inputs.repeatPassword;

            return isEmail && inputs.password.length > 6 && isEqualPassword;
        }
        
        const handleSubmitRegister = (e) => {
            e.preventDefault();
            console.log(inputs);

            AuthService.register(inputs).then(
                (data) => {
                    //vulve a donde estaba antes del logeo
                    console.log(data);
                    if(data.ok){
                        window.history.back();
                    }
                },
                error => {
                    //mensaje de error
                }
            );
        }
      
        return (
            <Paper className={classes.padding} justify="center" alignItems="center" style={{ width: matchesSM ? "100%" : '30%' }}>
                <div className={classes.margin}>
                    <form onChangeCapture={changeForm} onSubmit={handleSubmitRegister}>
                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Face />
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField 
                                 value={inputs.name}
                                 name="name"
                                 label="Nombre" 
                                 type="text" 
                                 fullWidth autoFocus required />
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Face />
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField 
                                 value={inputs.last_name}
                                 name="last_name"
                                 label="Apellido" 
                                 type="text" 
                                 fullWidth autoFocus required />
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <MailOutlineIcon />
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField
                                 value={inputs.email}
                                 name="email"
                                 label="Email" 
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
                                 value={inputs.password}
                                 name="password"
                                 label="Contraseña" 
                                 type="password" 
                                 fullWidth required />
                            </Grid>
                            
                        </Grid>
                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Fingerprint />
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField 
                                value={inputs.repeatPassword}
                                name="repeatPassword"
                                label="Repetir contraseña"
                                type="password"
                                fullWidth required />
                            </Grid>
                            
                        </Grid>
                    
                        <Grid container justify="center" style={{ marginTop: '3em' }}>
                            <Button
                                className={classes.botonRegistrar}  
                                disabled={!validateForm()}
                                variant="outlined" 
                                color="primary"
                                type="submit"
                                style={{ textTransform: "none" }}>REGISTRARSE</Button>
                        </Grid>
                    </form>
                </div>
            </Paper>
        );
    }


