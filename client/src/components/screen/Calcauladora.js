import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import customSoftwareIcon from "assets/Custom Software Icon.svg";
import MobileAppsIcon from "assets/mobileIcon.svg";
import MileageMap from "components/ui/MileageMap";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styleMap = { width: "100%", height: "60vh" };
const useStyles = makeStyles((theme) => ({
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
      marginBottom: "2em",
    },
  },
  titulo1: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "3rem",
    color: "#8EC3C7",
  },
  subtitle: {
    marginBottom: 1,
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  servicioContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  masInfoButton: {
    borderColor: "#D34D4C",
    color: "#D34D4C",
    borderWidth: 2,
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "0.9rem",
    height: 45,
    width: 180,
   margin: "2em",
    marginBottom: "5em",
    marginTop: "5em",
    "&:hover": {
      backgroundColor: "#D34D4C",
      border: "none",
      color: "white",
      opacity: 1,
    },
  },
  masInfoButton2: {
    backgroundColor: "#8EC3C7",
    color: "white",
    border: "none",
    borderRadius: 50,
    height: 49,
    width: 180,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "0.9rem",
    
    "&:hover": {
      backgroundColor: "#D34D4C",
      border: "none",
      opacity: 1,
    },
  },
  listaEditada: {
    backgroundColor: "#ffa8a7",
    color: "white",
    "&:hover": {
      background: "#D34D4J",
      
    },
  }
}));

const labels = [
  ["A", "B"],
  ["C", "D"],
  ["E", "F"],
  ["G", "H"]
];

export default function Calcauladora(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [wayPointsState, setWayPoints] = useState(props.location.wayPoints);
  const [datosEnvio, setDatosEnvio] = useState(props.location.datosEnvio);
  const [costoEstimado, setCostoestimado] = useState(1500);
  const [distancia, setDistancia] = useState();
  const [tiempo, setTiempo] = useState();



  const calcularcostos = () => {
    let hs
    let min
    let time
    let dis
    let price
    if (distancia && tiempo) {
      time = tiempo.text.split(" ")
      dis = distancia.text.split(' ')
      if(dis[0] >= 150){
        //calculo por kilometros
        if (datosEnvio.peso < 500) {
          price = dis[0] * 14.7 // precio desde tabla db
        } else if(datosEnvio.peso < 1800){
          price = dis[0] * 18.4
        }else if(datosEnvio.peso < 3500){
          price = dis[0] * 23.7
        }else{
          price = dis[0] * 35
        }
        return price
      }else{
        //calculo por horas
        if (time.length == 4 && time[0] >= 3) {
          //obtebgo horas y minutos
          hs= time[0]
          min= time[2]
          if (min >= 1) {
            hs = hs +1
          }
          if (datosEnvio.peso < 500) {
            price = hs * 400 // precio desde tabla db
          } else if(datosEnvio.peso < 1800){
            price = hs * 700
          }else if(datosEnvio.peso < 3500){
            price = hs * 1000
          }else{
            price = hs * 1500
          }

          return price
        } else {
          if (datosEnvio.peso < 500) {
            price = 3 * 400 // precio desde tabla db
          } else if(datosEnvio.peso < 1800){
            price = 3 * 700
          }else if(datosEnvio.peso < 3500){
            price = 3 * 1000
          }else{
            price = 3 * 1500
          }
          return price
        }
      }
      
    }
  }

  useEffect(() => {
    if (wayPointsState) {
      wayPointsState.forEach(point => {
        point.geoCodedWayPoints.forEach(points => {
          setDistancia(points.legs[0].distance)
          setTiempo(points.legs[0].duration)
        });
      });
    }
  },[]);

  return (
    <Grid container direction={matchesSM ? "column-reverse" : "row"}>
      <Grid item xs={matchesSM ? 12 : 6}>
        <Grid
         item 
         container
         direction="row"
         justify="center"
         alignItems="center"
        >
          <h1 className={classes.titulo1}>Detalle de la Cotización</h1>
        </Grid>
        <Grid 
          item
          container
          alignItems="center"
          direction="row">
            
        </Grid>
        <List className={classes.root}>
      <ListItem>
        <ListItemText primary="Origen" secondary={datosEnvio && datosEnvio.origen} />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          
        >
       
        </Typography>
      </li>
      <ListItem className={classes.listaEditada}>
        <ListItemText primary="Destino" secondary={datosEnvio && datosEnvio.destino} />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          className={classes.dividerInset}
          color="textSecondary"
          display="block"
         
        >
          
        </Typography>
      </li>
      <ListItem>
        <ListItemText primary="Distancia" secondary={distancia && distancia.text} />
      </ListItem>
      <Divider component="li"/>
      <li>
        <Typography
          className={classes.dividerInset}
          color="textSecondary"
          display="block"
         
        >
          
        </Typography>
      </li>
      <ListItem className={classes.listaEditada}>
        <ListItemText primary="Tiempo" secondary={tiempo && tiempo.text} />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          className={classes.dividerInset}
          color="textSecondary"
          display="block"
         
        >
          
        </Typography>
      </li>
      <ListItem>
        <ListItemText primary="Pago en" secondary={datosEnvio && datosEnvio.pagoOrigen} />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          className={classes.dividerInset}
          color="textSecondary"
          display="block"
         
        >
          
        </Typography>
      </li>
      <ListItem className={classes.listaEditada}>
        <ListItemText primary="Cantidad de bultos" secondary={datosEnvio && datosEnvio.cantBultos} />
      </ListItem>
      <Divider component="li"/>
      <li>
        <Typography
          className={classes.dividerInset}
          color="textSecondary"
          display="block"
         
        >
          
        </Typography>
      </li>
      <ListItem>
        <ListItemText primary="Peso" secondary={datosEnvio && datosEnvio.peso} />
      </ListItem>
      <Divider component="li"/>
      <li>
        <Typography
          className={classes.dividerInset}
          color="textSecondary"
          display="block"
         
        >
          
        </Typography>
      </li>
      <ListItem className={classes.listaEditada}>
        <ListItemText primary="Valor declarado" secondary={datosEnvio && datosEnvio.valorDeclarado} />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          className={classes.dividerInset}
          color="textSecondary"
          display="block"
         
        >
          
        </Typography>
      </li>
      <ListItem>
        <ListItemText primary="Costo Estimado" secondary= {costoEstimado && calcularcostos()} />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          className={classes.dividerInset}
          color="textSecondary"
          display="block"
         
        >
          
        </Typography>
      </li>
      
      
    </List>

    <Grid 
        item 
        container
        direction={matchesSM ? "column-reverse" : "row"}
        justify="center"
        alignItems="center"
        >
          <Button
            component={Link}
            to="/"
            
            variant="outlined"
            className={classes.masInfoButton2}
          >
            MODIFICAR ENVÍO
          </Button>
          <Button
            component={Link}
            to="/"
          
            variant="outlined"
            className={classes.masInfoButton}
          >
            CONTINUAR
          </Button>
      </Grid>
      </Grid>
      <Grid item xs={matchesSM ? 12 : 6}>
        <MileageMap
          wayPoints={wayPointsState}
          labels={labels}
          travelMode="DRIVING"
        />
      </Grid>
      
    </Grid>
  );
}
