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
import headerBackground from '../../assets/portadaNosotros.jpg';

const useStyles = makeStyles(theme => ({

        mainContainer: {
            
        },
        servicioContainer: {
            backgroundImage: `url(${headerBackground})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "50em",
            width: "100%",
            marginTop: "0em",
            [theme.breakpoints.down("sm")]: {
              backgroundImage: "none",
              height: "60em",
            },
          },
          buttonContainer: {
              marginLeft: "1em",
          },
          span: {
              fontWeight: 900
          },
          titulo: {
            [theme.breakpoints.down("sm")]: {
                align: "center",
              },
          },
         

}));

export default function Nosotros() {
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
          className={classes.servicioContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? "-3em" : "1em",
              marginTop: matchesSM ? "-2em" : "0em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
          <Grid sm item className={classes.heroTextContainer}>
            <Typography className={classes.tituloHeader} variant="h1" align="left" style={{ marginTop: matchesSM ? "1.5em" : "1em",  marginLeft: matchesSM ? "1.4em" : "1.8em", maxWidth: matchesSM ? undefined : "14em", color: "#D34D4C", fontSize: matchesSM ? "3rem" : "4.8rem", fontWeight: 500}}>
              NOSOTROS
              <br />
              
            </Typography>

            <Grid item container className={classes.formLin5} direction="column">
              <Grid item direction="row">
                <Grid
                  container
                  justify="center"
                  className={classes.buttonContainer}
                  direction="column"
                  style={{marginLeft: matchesSM ? "-4em" : "6.8em"}}
                >
                <Grid item lg>
                    <Typography paragraph variant="body1" className={classes.titulo} align="left" style={{ marginTop: matchesSM ? "1.5em" : "1em",  marginLeft: matchesSM ? "7em" : "2em", maxWidth: matchesSM ? undefined : "25em", color: matchesSM ? "#71c4c8" : "white", fontSize: matchesSM ? "1.2rem" : "1rem" , fontWeight: 300}}>
                        Sabemos que cada negocio es especial, y requiere una logística desarrollada y pensada para brindar una solución acorde a las necesidades de nuestros clientes. 
                        </Typography>
                  </Grid>
                  <Grid item lg>
                    <Typography paragraph variant="body1" className={classes.titulo} align="left" style={{ marginTop: matchesSM ? "1.5em" : "1em",  marginLeft: matchesSM ? "7em" : "2em", maxWidth: matchesSM ? undefined : "25em", color: matchesSM ? "#71c4c8" : "white", fontSize: matchesSM ? "1.2rem" : "1rem" , fontWeight: 300}}>
                        Detectamos una necesidad fundamental en las empresas, la de incrementar la rentabilidad de su negocio. La cuál se ve ampliamente afectada tras las variaciones económicas del páis, que no solamente merman su poder adquisitivo, sino también el consumismo de la población que adquiere sus productos y servicios. 
                        </Typography>
                  </Grid>
                  <Grid item lg>
                    <Typography paragraph variant="body1" className={classes.titulo} align="left" style={{ marginTop: matchesSM ? "1.5em" : "1em",  marginLeft: matchesSM ? "7em" : "2em", maxWidth: matchesSM ? undefined : "25em", color: matchesSM ? "#71c4c8" : "white", fontSize: matchesSM ? "1.2rem" : "1rem" , fontWeight: 300}}>
                        Es por eso que nuestra propuesta de una logística tercerizada se planta como una alternativa económica y con perspectivas a largo plazo, que otorgan una ventaja competitiva respecto de otras empresas en cuanto a logística.
                        </Typography>
                  </Grid>
                  <Grid item direction="row" style={{   }}>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item>
            <Grid container direction="row">
              <Grid item container direction="column">
                <Grid
                  item
                  container
                  className={classes.backgroundCel}
                 
                >
                 

                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
       
      </Grid>

      </Grid>
      </Grid>
      
    )
}