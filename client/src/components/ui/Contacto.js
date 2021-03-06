import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import backgroundContacto from "../../assets/backgroundContacto.svg";
import phoneIcon from "../../assets/phone.svg";
import emailIcon from "../../assets/email.svg";
import UserService from 'services/UserService';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    backgroundContacto: {
        backgroundImage: `url(${backgroundContacto})`,
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        height: "35em", 
        position: "absolute",
        marginTop: "6em",
        marginLeft: "32em", 
        [theme.breakpoints.down("sm")]: {
        backgroundImage: "none",
        height: 0,
       
        },
    },
    botonEnviar: {
        backgroundColor: "#D34D4C",
        color: "white",
        borderRadius: 50,
        border: "1px solid white",
        height: 45,
        width: 145,
        marginRight: 40,
        transitionDuration: ".5s",
        transitionProperty: "background,transform",
        transitionTimingFunction: "cubic-bezier(.33,.19,.3,.85)",
        "&:hover": {
          backgroundColor: "#8EC3C7",
          border: "none",
          opacity: 1,
          transform: "rotate(-30deg)",
        },
      },

      
    overrides: {
        MuiInputLabel: {
            root: {
                color: "#8EC3C7"
            }
        },
        MuiInput: {
            underline: {
                "&:before": {
                    borderBottom: `2px solid #8EC3C7`
                }
            }
        }
    },

    mensaje: {
        border: `2px solid #8EC3C7`,
        marginTop: "2em",
        borderRadius: 5,
        width: "25em",
    }

}));

export default function Contacto() {
    const history = useHistory();
    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [mensaje, setMensaje] = useState('')

    const handlerEnviar = () => {
        const body = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            mensaje: mensaje
        }
    
        UserService.sendContactMails(body).then(
          data => {
            //sacarspiner
            //vulve a donde estaba antes del logeo 
            if (data.ok) {
              history.push({
                pathname: '/'
              });
            } else {
              //no pudo logear ya se por clave erronea o usuario
              console.log(data);
            }
          },
          error => {
            //mensaje de error sacael el spiner 
            console.log('error', error);
          }
        );
      }

    return (
        <Grid container direction="row">
            <Grid item container direction="column"  justify="center" alignItems="center" style={{ marginLeft: matchesSM ? "4em" : "7em", maxHeight: matchesSM ? "40em" : undefined }} lg={3}> 
                <Grid item>
                    <Grid container direction="column">
                    <Grid item>
                    <Typography variant="h2" style={{lineHeight: 1, fontFamily: "Roboto", marginTop: "0.7em", }}>CONTACTATE</Typography> 
                    <Typography variant="body1" style={{ color: "#C76869",  fontFamily: "Roboto", fontWeight: 800, marginLeft: matchesSM ? "2em" : undefined}}>Preocupate por otra cosa</Typography>       
                </Grid>
                <Grid item container style={{ marginTop: "1.5em" }}>
                    <Grid item>
                        <img src={phoneIcon} alt="telefono" style={{ marginRight: "0.5em" }} />
                    </Grid>
                    <Grid item
                    component={Link} 
                    to="https://wa.link/i0tbjs"
                    style={{ textDecoration: "none", color: "#8ec3c7" }}
                    >379 4007273 
                    </Grid>    
                </Grid>
                <Grid item container style={{ marginBottom: "1em" }}>
                    <Grid item>
                        <img src={emailIcon} alt="email" style={{ marginRight: "0.5em", verticalAlign: "bottom" }} />
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{color: "#8EC3C7", textDecoration: "none"}}  component={Link} to="/"> sendpack@gmail.com</Typography>
                    </Grid>    
                </Grid>
                <Grid item container >
                    <Grid item>
                        <TextField label="Nombre" id="nombre" value={nombre}
                            onChange={event => setNombre(event.target.value)}
                            style= {{ borderBottom: "2px solid #71c4c8", width: matchesSM ? "15em" : "25em" }}
                        />    
                    </Grid>
                    <Grid item>
                        <TextField label="Email" id="email" value={email}
                             onChange={event => setEmail(event.target.value)}
                             style= {{ borderBottom: "2px solid #71c4c8", width: matchesSM ? "15em" : "25em" }}                        />      
                    </Grid>   
                    <Grid item>
                        <TextField label="Teléfono" id="telefono" value={telefono}
                            onChange={event => setTelefono(event.target.value)}
                            style= {{ borderBottom: "2px solid #71c4c8", width: matchesSM ? "15em" : "25em" }}                        />       
                    </Grid>       
                </Grid>
                <Grid item style={{maxWidth: matchesSM ? "2em" : "20em" }} >
                    <TextField value={mensaje} InputProps={{ disableUnderline: true}} className={classes.mensaje} multiline rows={5} label="Mensaje" id="mensaje" onChange={event => setMensaje(event.target.value)}  style= {{  width: matchesSM ? "15em" : "25em" }}/>
                </Grid>
                <Grid item container style={{ marginTop: "1.5em", marginBottom: "1em", marginLeft: matchesSM ? "3.5.5em" : "1em" }}>
                <Button
                      onClick={() => handlerEnviar()}
                      className={classes.botonEnviar}
                      variant="contained"
                    >
                     ENVIAR
                </Button>
                </Grid>  
                    </Grid>    
                </Grid>     
            </Grid>
            <Grid item container className={classes.backgroundContacto} lg={8}>
                
            </Grid>
        </Grid>
    )
}
