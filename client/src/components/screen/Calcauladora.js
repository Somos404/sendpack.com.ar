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
import UserService from 'services/UserService';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

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
    [theme.breakpoints.down("sm")]: {
      marginTop: "1em",
    },
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
    [theme.breakpoints.down("sm")]: {
      marginTop: "-3em",
      marginBottom: "2em",
    },
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
  const history = useHistory();

  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [wayPointsState, setWayPoints] = useState(props.location.wayPoints ? props.location.wayPoints : JSON.parse(localStorage.getItem("wayPointsState")));
  const [datosEnvio, setDatosEnvio] = useState(props.location.datosEnvio ? props.location.datosEnvio : JSON.parse(localStorage.getItem("datosEnvio")));
  const [costoEstimado, setCostoestimado] = useState(3000);
  const [distancia, setDistancia] = useState();
  const [tiempo, setTiempo] = useState();
  const [tel, setTel] = useState(false);
  const [relog, setRelog] = useState(false);
  const user = JSON.parse(localStorage.getItem("user") ? localStorage.getItem("user") : false);

  if (relog) {
    window.location.reload();
  }

  const calcularcostos = () => {
    let hs
    let min
    let time
    let dis
    let price
    if (distancia && tiempo) {
      time = tiempo.text.split(" ")
      dis = distancia.text.split(' ')
      if (dis[0] >= 150) {
        //calculo por kilometros
        if (datosEnvio.peso < 500) {
          price = dis[0] * 14.7 // precio desde tabla db
        } else if (datosEnvio.peso < 1800) {
          price = dis[0] * 18.4
        } else if (datosEnvio.peso < 3500) {
          price = dis[0] * 23.7
        } else {
          price = dis[0] * 35
        }
        return price
      } else {
        //calculo por horas
        if (time.length == 4 && time[0] >= 3) {
          //obtebgo horas y minutos
          hs = time[0]
          min = time[2]
          if (min >= 1) {
            hs = hs + 1
          }
          if (datosEnvio.peso < 500) {
            price = hs * 400 // precio desde tabla db
          } else if (datosEnvio.peso < 1800) {
            price = hs * 700
          } else if (datosEnvio.peso < 3500) {
            price = hs * 1000
          } else {
            price = hs * 1500
          }

          return price
        } else {
          if (datosEnvio.peso < 500) {
            price = 3 * 400 // precio desde tabla db
          } else if (datosEnvio.peso < 1800) {
            price = 3 * 700
          } else if (datosEnvio.peso < 3500) {
            price = 3 * 1000
          } else {
            price = 3 * 1500
          }
          return price
        }
      }

    }
  }

  const handlerEnviar = () => {
    const body = {
      datosEnvio: datosEnvio,
      tiempo: tiempo,
      distancia: distancia,
      costoEstimado: costoEstimado,
      tel: tel
    }

    UserService.sendMails(body).then(
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

  useEffect(() => {
    setRelog(props.location.reload);
    if (wayPointsState) {
      if (props.location.wayPoints) {
        localStorage.setItem("wayPointsState", JSON.stringify(wayPointsState));
        localStorage.setItem("datosEnvio", JSON.stringify(datosEnvio));
      }
      wayPointsState.forEach(point => {
        point.geoCodedWayPoints.forEach(points => {
          setDistancia(points.legs[0].distance)
          setTiempo(points.legs[0].duration)
        });
      });
    }
  }, []);

  const [open, setOpen] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



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
            <ListItemText primary="Origen" secondary={datosEnvio && datosEnvio.origen} style={{ marginTop: matchesSM ? "0em" : "-5px", marginBottom: matchesSM ? "0em" : "-6px" }} />
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
            <ListItemText primary="Destino" secondary={datosEnvio && datosEnvio.destino} style={{ marginTop: matchesSM ? "0em" : "-5px", marginBottom: matchesSM ? "0em" : "-6px" }} />
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
            <ListItemText primary="Distancia" secondary={distancia && distancia.text} style={{ marginTop: matchesSM ? "0em" : "-5px", marginBottom: matchesSM ? "0em" : "-6px" }} />
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
            <ListItemText primary="Tiempo" secondary={tiempo && tiempo.text} style={{ marginTop: matchesSM ? "0em" : "-5px", marginBottom: matchesSM ? "0em" : "-6px" }} />
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
            <ListItemText primary="Pago en" secondary={datosEnvio && datosEnvio.pagoOrigen ? 'Origen' : 'destino'} style={{ marginTop: matchesSM ? "0em" : "-5px", marginBottom: matchesSM ? "0em" : "-6px" }} />
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
            <ListItemText primary="Cantidad de bultos" secondary={datosEnvio && datosEnvio.cantBultos} style={{ marginTop: matchesSM ? "0em" : "-5px", marginBottom: matchesSM ? "0em" : "-6px" }} />
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
            <ListItemText primary="Peso" secondary={datosEnvio && datosEnvio.peso} style={{ marginTop: matchesSM ? "0em" : "-5px", marginBottom: matchesSM ? "0em" : "-6px" }} />
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
            <ListItemText primary="Valor declarado" secondary={datosEnvio && datosEnvio.valorDeclarado} style={{ marginTop: matchesSM ? "0em" : "-5px", marginBottom: matchesSM ? "0em" : "-6px" }} />
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
            <ListItemText primary="Costo Estimado" secondary={costoEstimado && calcularcostos()} style={{ marginTop: matchesSM ? "0em" : "-5px", marginBottom: matchesSM ? "0em" : "-6px" }} />
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
          style={{ marginTop: matchesSM ? "0em" : "-60px", marginBottom: matchesSM ? "0em" : "-6px" }}
        >
          <Button
            component={Link}
            to="/"

            variant="outlined"
            className={classes.masInfoButton2}
          >
            MODIFICAR ENVÍO
          </Button>
          <div>
            <form action="https://master.d3nwf6289kp5zj.amplifyapp.com:5000/checkout" method="POST">

              <input type="hidden" name="title" value="Envio de paquete" />
              <input type="hidden" name="price" value={calcularcostos()} />
              <input type="submit" value="Pagar ahora" class="btn btn-primary btn-block"  />
            </form>
          </div>
          {user ?
            <Button
              onClick={handleClickOpen}

              variant="outlined"
              className={classes.masInfoButton}
            >
              CONTINUAR
              </Button>
              
            :
            <Button
              component={Link}
              to={{ pathname: `/login`, customroute: "/calculadora" }}
              variant="outlined"
              className={classes.masInfoButton}
            >
              Logear
            </Button>

          }
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">{"Detalle de Cotización"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Nos comunicaremos con vos a tu correo electrónico/teléfono para coordinar el envío de tu paquete
              </DialogContentText>
              {tel &&
                <DialogContentText>
                    Si no es tu numero cámbialo al correcto para que podamos comunicarnos. 
                </DialogContentText>
              }
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="teléfono"
                value={tel ? tel : ''}
                onChange={(event) => setTel(event.target.value)}
                type="email"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                CANCELAR
          </Button>
              <Button
                onClick={() => handlerEnviar()}
                color="primary" autoFocus>
                CONTINUAR
          </Button>
         
            </DialogActions>
          </Dialog>
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
