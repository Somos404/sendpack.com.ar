import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import customSoftwareIcon from '../assets/recursos/Ico-04.png';
import mobileAppsIcon from '../assets/recursos/Ico-07.png';
import websiteIcon from "../assets/recursos/Ico-06.png";
import './animacion.css'


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
      

        <Grid container direction="column" style={{ zIndex: 1}}>

    
            <Grid item> {" "} {/*---Contenedor de Servicio---*/}
                
            <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.servicioContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              marginTop: matchesSM ? "-5em" : "0em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
              <Grid sm item className={classes.heroTextContainer}>
            <Typography className={classes.tituloHeader} variant="h1" align="left" style={{ marginTop: matchesSM ? "-0.5em" : "-1em",  marginLeft: matchesSM ? "1em" : "6em", marginBottom: matchesSM ? "1em" : "1.8em", maxWidth: matchesSM ? undefined : "14em", color: "#D34D4C", fontSize: matchesSM ? "3rem" : "4.8rem", fontWeight: 500}}>
              SERVICIOS
              <br />
              
            </Typography>
            </Grid>
            <Typography variant="h4">Logística Corporativa para empresas</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
            Nuestros servicios de Logística Corporativa están pensados para brindar <br/>la mejor  logística personalizada e integral para tu negocio. 
            </Typography>
            <Typography variant="subtitle1">
            Sabemos que cada negocio es especial, y requiere una logística desarrollada y pensada  <br/>para brindar una solución acorde a las necesidades de nuestros clientes. 
            </Typography>
            <Button
              component={Link}
              to="/contacto"
              variant="outlined"
              style={{marginTop: matchesSM ? "2em" : "2em"}}
              className={classes.botonLeerMas}
            >
              <span style={{ marginRight: 10 }}>MÀS INFO</span>
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="custom software icon"
              src={customSoftwareIcon}
              style={{marginTop: matchesSM ? "0em" : "6em"}}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {" "}
        {/*--- Servicio Transporte General---*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.servicioContainer}
        >
          <Grid
            item
            style={{
              marginTop: matchesSM ? "-12em" : "0em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Transporte General</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
            Nuestro servicio de transporte general está pensado para brindar un servicio de gran calidad,<br/> con modalidad de entrega puerta a puerta, cargas completas y servicios prioritarios.
            </Typography>
            {/*--- 
            <Typography variant="subtitle1">
              Loren Ipsum. Loren ipsum. Ipsum Lorem,{matchesSM ? null : <br />}
              Ipsum Lorem
            </Typography>---*/}
            <Button
              component={Link}
              to="/contacto"
              variant="outlined"
              className={classes.botonLeerMas}
              style={{marginTop: matchesSM ? "2em" : "2em"}}
            >
              <span style={{ marginRight: 10 }}>MÀS INFO</span>
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              alt="mobile phon icon"
              src={mobileAppsIcon}
              style={{marginTop: matchesSM ? "3em" : "inherit"}}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {" "}
        {/*---Contenedor de Servicio---*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.servicioContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              marginTop: matchesSM ? "-9em" : undefined,
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Mudanzas</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
            Nuestro servicio de mudanzas esta pensado para que mudarse sea fácil y rápido.<br/>
            Con personal altamente capacitado e idóneo para todo tipo de traslados de corta y larga distancia.  
            </Typography>
            <Typography variant="subtitle1">
            Hoy en día ofrecemos un servicio completo, con precios accesibles <br/>para todos los clientes que nos eligen y con la seguridad que usted y sus muebles se merecen.
            </Typography>
            <Button
              component={Link}
              to="/contacto"
              variant="outlined"
              className={classes.botonLeerMas}
              style={{marginTop: matchesSM ? "2em" : "2em"}}
            >
              <span style={{ marginRight: 10 }}>MÀS INFO</span>
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="web site icon"
              src={websiteIcon}
              style={{marginTop: matchesSM ? "0em" : "inherit"}}
            />
          </Grid>
        </Grid>
      </Grid>
            
            </Grid>
   
    )
}