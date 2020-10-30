import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';
import { makeStyles, useTheme } from "@material-ui/core/styles";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
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

export default function Registro(props) {
    
        const classes = useStyles();
        
        const theme = useTheme();
        const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
        const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
        
      
        return (
            <Paper className={classes.padding} justify="center" alignItems="center" style={{ width: matchesSM ? "100%" : '30%' }}>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Nombre" type="text" fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Apellido" type="text" fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <MailOutlineIcon />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Email" type="email" fullWidth autoFocus required />
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
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Repetir contraseña" type="password" fullWidth required />
                        </Grid>
                        
                    </Grid>
                   
                    <Grid container justify="center" style={{ marginTop: '3em' }}>
                        <Button
                            className={classes.botonRegistrar}  
                            variant="outlined" 
                            color="primary" 
                            style={{ textTransform: "none" }}>REGISTRARSE</Button>
                    </Grid>
                    
                </div>
            </Paper>
        );
    }


