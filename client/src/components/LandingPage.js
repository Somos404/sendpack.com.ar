import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import customSoftwareIcon from "../assets/recursos/Ico-04.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import mobileAppsIcon from "../assets/recursos/Ico-07.png";
import websiteIcon from "../assets/recursos/Ico-06.png";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import preguntasBackground from "../assets/repeatingBackground.svg";
import cardBackground from "../assets/cardBackground.png";
import divisor from "../assets/divisor.svg";
import TextField from "@material-ui/core/TextField";
import backgroundCel from "../assets/backgroundCel.svg";
import Radio from "@material-ui/core/Radio";
import infoBackground from "../assets/infoBackground.jpeg";
import headerBackground from "../assets/portada03.jpg";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import LocationSearchFrom from "../components/ui/locationSearchFrom";
import LocationSearchTo from "../components/ui/locationSearchTo";
import { v4 as uuid } from "uuid";
import { ReactComponent as Cotizar } from '../assets/recursos/cotizar.svg';
import './animacion.css'
import Footer from './ui/Footer';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles((theme) => ({
  tituloHeader: {
    fontSize: "2.3em",
    fontWeight: "900",
    marginLeft: "11.5em",
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      marginLeft: "9em",
      width: "95%",
  },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.7em",
      marginLeft: "8.7em",
    },
  },
  backgroundCel: {
    position: "absolute",
    
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "32em",
    width: "18em",
    marginLeft: "-5em",
    marginTop: "-7em",
    [theme.breakpoints.down("xs")]: {
      display: "none",
      height: 0,
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
      height: 0,
  },
  },
  imagenCotizar: {
    position: "absolute",
    
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "24em",
    width: "18em",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  botonCotizar: {
    backgroundColor: "#D34D4C",
    color: "white",
    
    
    height: 45,
    width: 145,
    marginRight: 40,
    transitionDuration: "1s",
    transitionProperty: "background,transform",
    transitionTimingFunction: "cubic-bezier(.33,.19,.3,.85)",
    transition: "slidein",
    "&:hover": {
      backgroundColor: "#8EC3C7",
      border: "none",
      opacity: 1,
      textDecoration: "none",
      color: "white",
      transform: "rotate(-360deg)",
    },
   
  },
  
   
  "@keyframes slidein": {
    "0%": {
      opacity: 0,
      transform: "translateY(-100%)",
      marginLeft: "0px"
    },
    "50%": {
      opacity: 1,
      transform: "translateY(0)",
      marginLeft: "20px"
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
      marginLeft: "40px"
    }
  },
  selector: {
    animation: "$fadeIn .2s ease-in-out"
  },

  boton2: {
    backgroundColor: "#D34D4C",
    color: "white",
    height: 40,
    width: 150,
    marginTop: "1em",
    fontSize: "0.8rem",
    transitionDuration: "1s",
    transitionProperty: "background,transform",
    transitionTimingFunction: "cubic-bezier(.33,.19,.3,.85)",
    transition: "slidein",
    "&:hover": {
      backgroundColor: "#8EC3C7",
      border: "none",
      opacity: 1,
      transform: "rotate(-360deg)",
      textDecoration: "none",
      color: "white",
    },
   
  },
  
  buttonContainer: {
    marginTop: "1em",
  },
  masInfoButton: {
    borderColor: "#D34D4C",
    color: "#D34D4C",
    borderWidth: 2,
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "0.7rem",
    transitionDuration: "3s",
    transitionProperty: "backgroundColor",

    height: 45,
    "&:hover": {
      backgroundColor: "#D34D4C",
      border: "none",
      color: "white",
      opacity: 1,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  botonLeerMas: {
    borderColor: "#D34D4C",
    color: "#D34D4C",
    borderWidth: 2,
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "0.7rem",
    transitionDuration: ".5s",
    height: 35,
    "&:hover": {
      backgroundColor: "#D34D4C",
      border: "none",
      color: "white",
      opacity: 1,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "0em",
      flexWrap: "inherit",
      
      overflow: "hidden",
    },
  },
  heroTextContainer: {
    
    marginLeft: "1em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "-13.5em",
      minWidth: "81%",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-27em",
    },
  },
  subtitle: {
    marginBottom: 1,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      marginTop: "1em",
    },
  },
  icon: {
    marginLeft: "4em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0em",
    },
  },
  servicioContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  contenedor2: {
    marginTop: "3em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },

  //Preguntas
  divisor: {
    marginLeft: "41em",
    marginTop: "3em",
    width: "13%",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "10em",
    },
  },

  botonLeerMasPreguntas: {
    marginTop: "-29%",
    borderColor: "#D34D4C",
    color: "#D34D4C",
    borderWidth: 2,
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "0.7rem",
    height: 35,
    "&:hover": {
      backgroundColor: "#D34D4C",
      border: "none",
      color: "white",
      opacity: 1,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0em",
    },
  },

  preguntasCard: {
    border: "3px solid #C76869",
    borderRadius: 20,
    height: "15rem",
    width: "30%",
    "&:hover": {
      backgroundColor: "#8EC3C7",
      border: "none",
      opacity: 1,
      color: "white",
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },

  respuestasHome: {
    width: "90%",
  },

  gridItem: {
    margin: ".8em",
  },

  preguntasHome: {
    fontFamily: "Roboto",
    fontSize: "1.5rem",
    color: "#000",
    transitionDuration: ".5s",
    fontWeight: 700,
  },

  contenedorPregResp: {
    marginTop: "3em",
  },
  formLin1: {
    marginLeft: "5em",
    marginTop: "-1em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0em",
      
      maxWidth: "50%",
    },
  },
  formLin2: {
    marginLeft: "5em",
    marginTop: "1em",
    marginBottom: "1em",
    fontFamily: "Roboto",
    fontSize: "1.5em",
    
  },
  formLin3: {
    
  },
  formLin4: {
    marginLeft: "3em",
    marginTop: "0em",
    marginBottom: "1em",
    width: "62em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-14em",
      marginTop: "1em",
    },
  },
  formLin5: {
    marginLeft: "10em",
    marginTop: "1em",
    marginBottom: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "23em",
    },
  },
  headerBackground: {
    backgroundImage: `url(${headerBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "90%",
    width: "100%",
    marginTop: "-5em",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "none",
      backgroundColor: "#71c4c8",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundColor: "#8ec3c7",
    backgroundRepeat: "no-repeat",
    height: "90%",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "none",
    },
  },
 
  CodigoPostal1: {
    marginLeft: "15em",
    marginTop: "-3.05em",
    color: "white"
  },
  codigoPostalLabel: {
    color: "white"
  },
  codigoPostal2: {
    marginLeft: "15em",
    marginTop: "-3.01em",
    color: "white"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  Preg3: {
    marginTop: "0.9em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
  }
}));


export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [user, setUser] = useState(false);

  if (user) {
    window.location.reload();
  }

  useEffect(() => {
    setUser(props.location.reload);
  },[]);
 

  const[datosEnvio , setDatosEnvio] = useState({
    origen: "",
    cpOrigen: "",
    destino: "",
    cpDestino: "",
    pagoOrigen: true,
    envioPaquete: true,
    
    cantBultos: "",
    peso: "",
    valorDeclarado: "",
  });

  const [wayPointsState, setWayPoints] = useState([
    {
      id: uuid,
      fromAddress: "",
      toAddress: "",
      fromLat: 0,
      fromLng: 0,
      toLat: 0,
      toLng: 0,
      geoCodedWayPoints: [],
      wayPointId: "",
    },
  ]);

  const handleFromChange = (address, wayPointId) => {
    let wayPoints = [...wayPointsState];
    let wayPoint = wayPoints.find((point) => point.id === wayPointId);
    wayPoint.fromAddress = address;
    wayPoint.wayPointId = wayPointId;
    setWayPoints(wayPoints);
  };

  const handleFromSelect = (address, wayPointId) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        let wayPoints = [...wayPointsState];
        let wayPoint = wayPoints.find((point) => point.id === wayPointId);
        wayPoint.fromAddress = address;
        wayPoint.fromLat = latLng.lat;
        wayPoint.fromLng = latLng.lng;
        wayPoint.wayPointId = wayPointId;
        setWayPoints(wayPoints);
        setDatosEnvio({...datosEnvio, origen: address})
        if (
            wayPoint.toAddress !== undefined &&
            wayPoint.toAddress !== "" &&
            wayPoint.toAddress !== null &&
            address
          ) {
            getAllRoutes(
              `${latLng.lat},${latLng.lng}`,
              `${wayPoint.toLat},${wayPoint.toLat}`,
              wayPointId
            );
          }
        })
        .catch(error => console.error("Error", error));
  };

  const handleToChange = (address, wayPointId) => {
    let wayPoints = [...wayPointsState];
    let wayPoint = wayPoints.find((point) => point.id === wayPointId);
    wayPoint.toAddress = address;
    wayPoint.wayPointId = wayPointId;
    setWayPoints(wayPoints);
  };

  const handleToSelect = (address, wayPointId) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        let wayPoints = [...wayPointsState];
        let wayPoint = wayPoints.find((point) => point.id === wayPointId);
        wayPoint.toAddress = address;
        wayPoint.toLat = latLng.lat;
        wayPoint.toLng = latLng.lng;
        wayPoint.wayPointId = wayPointId;
        setWayPoints(wayPoints);
        setDatosEnvio({...datosEnvio, destino: address})
        if (
            wayPoint.fromAddress !== undefined &&
            wayPoint.fromAddress !== "" &&
            wayPoint.fromAddress !== null &&
            address
          ) {
            getAllRoutes(
              `${wayPoint.fromLat},${wayPoint.fromLng}`,
              `${latLng.lat},${latLng.lng}`,
              wayPointId
            );
          }
        })
        .catch(error => console.error("Error", error));
  };

  const getAllRoutes = async (from, to, wayPointId) => {
    let data = "";
    try {
      data = await fetch(
        //`http://localhost:5000/api/maps/getRoute?source=${from}&destination=${to}`
        `https://sendpack.com.ar/api/maps/getRoute?source=${from}&destination=${to}`
      );
      data = await data.text().then((data) => JSON.parse(data));
    } catch (error) {
      console.log(error);
    }
    if (data.status === "OK" && data.routes.length) {
        let wayPoints = [...wayPointsState];
        let wayPoint = wayPoints.find(point => point.id === wayPointId);
        wayPoints.geoCodedWayPoints = [];
        wayPoint.geoCodedWayPoints = data.routes || [];
        setWayPoints(wayPoints)
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

    

  return (
    <Grid container direction="column" className={classes.mainContainer}>
          <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Grid item>
        {" "}
        {/*---Contenedor del header---*/}
        <Grid
          item
          container
          justify="flex-end"
          alignItems="center"
          direction="row"
          className={classes.headerBackground}
        >
          <Grid sm item className={classes.heroTextContainer}>
            <Typography className={classes.tituloHeader} variant="h1" align="center" style={{ marginTop: matchesSM ? "5em" : "1.5em", width: matchesSM ? undefined : "13em", color: "#D34D4C"}}>
              TRANSPORTE Y LOGÍSTICA
              <br />
              
            </Typography>

            <Grid item container className={classes.formLin2}>
              <Grid item direction="row" style={{ marginLeft: matchesSM ? "18.7em" : "20em", marginTop: matchesSM ? "1.5em" : "0em", fontWeight: 900 }}>
                <Typography variant="p" align="center"
                    color="primary" 
                  style={{color: matchesSM ? "white" : "white"}}>
                  COTIZAR
                </Typography>
              </Grid>
            </Grid>
            
            <Grid item container className={classes.formLin1} >
              <Grid item direction="row" justify="center"
                  alignItems="center"
                  style={{ marginLeft: matchesSM ? "24em" : "22em" }}
                  >
                    
              
                <LocationSearchFrom
                style={{color: "white"}}
                  className={classes.origenF}
                  handleFromChange={handleFromChange}
                  handleFromSelect={handleFromSelect}
                  wayPoints={wayPointsState}
                />
                
                
                {/*---<TextField
                  label="Origen"
                  id="origen"
                  value={origen}
                  onChange={(event) => setOrigen(event.target.value)}
                  
                />---*/}
                <TextField
                className={classes.CodigoPostal1}
                  label="CP"
                  id="codigoPostal"
                  style={{color: "white"}}
                  value={datosEnvio.cpOrigen}
                  onChange={(event) => setDatosEnvio(
                    {...datosEnvio,
                    cpOrigen: event.target.value}
                  )}
                />
                
                <LocationSearchTo
                className={classes.destinoF}
                  handleToChange={handleToChange}
                  handleToSelect={handleToSelect}
                  wayPoints={wayPointsState}
                />
                
                {/*---<<TextField
                  label="Destino"
                  id="destino"
                  value={destino}
                  onChange={(event) => setDestino(event.target.value)}
                />---*/}
                <TextField
                className={classes.codigoPostal2}
                  label="CP"
                  id="codigoPostal2"
                  style={{color: "white"}}
                  value={datosEnvio.cpDestino}
                  onChange={(event) => setDatosEnvio(
                    {...datosEnvio,
                    cpDestino: event.target.value}
                  )}
                />
              </Grid>
            </Grid>
            <Grid item container className={classes.formLin2}>
              <Grid item direction="row" style={{ marginLeft: matchesSM ? "19em" : "19em", marginTop: matchesSM ? "1.5em" : "0em", fontFamily: "Roboto", fontWeight: 900  }}>
                <Typography variant="p" align="center" style={{color: matchesSM ? "white" : "white"}}>
                  PAGO EN
                </Typography>
              </Grid>
            </Grid>
            <Grid item container className={classes.formLin3}>
            <Grid item direction="row" style={{ marginLeft: matchesSM ? "24.5em" : "33em", marginTop: matchesSM ? "0em" : "-1em", fontFamily: "Roboto", fontWeight: 900, color: "white", fontSize: matchesSM ? "1.3em" : undefined  }}>
                <Radio
                  checked={datosEnvio.pagoOrigen === true}
                  name="pagoOrigen"
                  inputProps={{ "aria-label": "A" }}
                  onChange={(event) => setDatosEnvio(
                    {...datosEnvio,
                      pagoOrigen: true}
                  )}
                />
                Origen
                <Radio
                  checked={datosEnvio.pagoOrigen === false}
                  name="pagoDestino"
                  inputProps={{ "aria-label": "B" }}
                  onChange={(event) => setDatosEnvio(
                    {...datosEnvio,
                      pagoOrigen: false}
                  )}
                />
                Destino
              </Grid>
            </Grid>
            <Grid item container className={classes.formLin4}>
              <Grid item direction="row" style={{ marginLeft: matchesSM ? "43em" : "19em", color: "white" }}>
                <TextField
                  label="Cantidad de bultos"
                  id="cantBultos"
                  style={{color: "white"}}
                  value={datosEnvio.cantBultos}
                  onChange={(event) => setDatosEnvio(
                    {...datosEnvio,
                      cantBultos: event.target.value}
                  )}
                />
                <TextField
                  label="Kg"
                  id="peso"
                  style={{color: "#ffffff"}}
                  value={datosEnvio.peso}
                  onChange={(event) => setDatosEnvio(
                    {...datosEnvio,
                    peso: event.target.value}
                  )}
                />
                <TextField
                  label="Valor Declarado"
                  id="valorDeclarado"
                  style={{color: "white"}}
                  value={datosEnvio.valorDeclarado}
                  onChange={(event) => setDatosEnvio(
                    {...datosEnvio,
                    valorDeclarado: event.target.value}
                  )}
                />
              </Grid>
            </Grid>
            <Grid item container className={classes.formLin5}>
              <Grid item direction="row">
                <Grid
                  container
                  justify="center"
                  className={classes.buttonContainer}
                >
                  <Grid item direction="row" style={{ marginLeft: matchesSM ? "5em" : "17.5em",marginTop: matchesSM ? "2em" : "inherit"  }}>
                    <Button
                      component={Link}
                      to={{
                        pathname: "calculadora",
                        wayPoints: wayPointsState,
                        datosEnvio: datosEnvio
                      }}
                      className={classes.botonCotizar}
                      id="botonCotizar"
                      variant="contained"
                      onClick={handleToggle}
                    >
                      COTIZAR
                    </Button>
                 
                  </Grid>
                  <Grid item style={{ marginTop: matchesSM ? "2em" : "inherit"  }}>
                    <Button
                      component={Link}
                      to="/contacto"
                      variant="outlined"
                      id="color"
                      className={classes.masInfoButton}
                    >
                      MÁS INFORMACIÓN
                    </Button>
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
                  <Cotizar className={classes.imagenCotizar}/>

                </Grid>
                
              </Grid>
            </Grid>
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
              marginTop: matchesSM ? "-5em" : "0em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Grid sm item >
            <Typography className={classes.tituloHeader} variant="h1" align="left" style={{ marginTop: matchesSM ? "-0.5em" : "-1em",  marginLeft: matchesSM ? "1em" : "6em", marginBottom: matchesSM ? "1em" : "1.8em", maxWidth: matchesSM ? undefined : "14em", color: "#D34D4C", fontSize: matchesSM ? "3rem" : "4.8rem", fontWeight: 500}}>
              SERVICIOS
              <br />
              
            </Typography>
            <Grid item>
            <img 
              className={classes.divisor} 
              alt="Divisor" src={divisor} 
              style={{marginTop: matchesSM ? "2em" : "-15em", marginLeft: matchesSM ? "10.8em" : "71%" }} />
          </Grid>
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
              to="/servicios"
              variant="outlined"
              style={{marginTop: matchesSM ? "2em" : "2em"}}
              className={classes.botonLeerMas}
            >
              <span style={{ marginRight: 10 }}>Leer más</span>
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
              to="/servicios"
              variant="outlined"
              className={classes.botonLeerMas}
              style={{marginTop: matchesSM ? "2em" : "2em"}}
            >
              <span style={{ marginRight: 10 }}>Leer más</span>
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
              to="/servicios"
              variant="outlined"
              className={classes.botonLeerMas}
              style={{marginTop: matchesSM ? "2em" : "2em"}}
            >
              <span style={{ marginRight: 10 }}>Leer más</span>
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
      <Grid container>
        <Grid item container
          direction="column" 
          style={{
            backgroundColor: "#71c4c8",
             height: "13em", 
             width: "100%"}}
        >
          <Grid item 
            direction="row"
            style={{marginTop: "2em"}}
          >  
          <Typography varient="h1" align="center" justify="center" 
            style={{color: "#d34d4d", fontSize:"1.5em", fontWeight: 700}}
          >
              Sumate a nuestro Equipo de Trabajo
          </Typography>
          </Grid>
          <Grid item direction="row">  
            <Typography varient="body1" align="center" justify="center"
              style={{color: "white"}}
            >
                ¡Mandanos tus datos y nos cumunicamos con vos!
            </Typography>
            </Grid>
            <Grid item 
                direction="row" 
               align="center" 
               justify="center"
               style={{marginTop: "1em"}}
            >
                    <Button
                      component={Link}
                      to="/contacto"
                      className={classes.boton2}
                      id="botonCotizar"
                      variant="contained"
                     

                    >
                      QUIERO SUMARME
                    </Button>
                 
                  </Grid>
        </Grid>
      </Grid>
      {/*---Contenedor de Preguntas Frecuentes---*/}
      <Grid item>
        <Grid item>
          <Typography
            variant="h3"
            align="center"
            className={classes.contenedor2}
            style={{color: "#D34D4C"}}
          >
            PREGUNTAS FRECUENTES
          </Typography>
          <Grid item>
            <img 
              className={classes.divisor} 
              alt="Divisor" src={divisor} 
              style={{marginTop: matchesSM ? "2em" : "2em", marginLeft: matchesSM ? "10.8em" : "44%" }} />
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="center"
          className={classes.contenedorPreg}
          style={{ height: "60em", marginTop: matchesSM ? "2em" : "-18%", flexWrap: matchesSM ? "wrap" : undefined }}
        >
          <Grid item className={[classes.preguntasCard, classes.gridItem]}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.contenedorPregResp}>
                <Typography
                  variant="h4"
                  align="center"
                  justify="center"
                  className={classes.preguntasHome}
                >
                  Tema de pregunta 1
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle1"
                  align="center"
                  justify="center"
                  className={classes.respuestasHome}
                >
                  Lorem Ipsum lorem ipsum lorem ipsumlorem ipsum
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            className={[classes.preguntasCard, classes.gridItem]}
            align="center"
            justify="center"
          >
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.contenedorPregResp}>
                <Typography
                  variant="h4"
                  align="center"
                  justify="center"
                  className={classes.preguntasHome}
                >
                  Tema de Pregunta 2
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle1"
                  align="center"
                  justify="center"
                  className={classes.respuestasHome}
                >
                  Lorem Ipsum lorem ipsum lorem ipsumlorem ipsum
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={[classes.preguntasCard, classes.gridItem, classes.Preg3]}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.contenedorPregResp}>
                <Typography
                  variant="h4"
                  align="center"
                  justify="center"
                  className={classes.preguntasHome}
                >
                  Tema de Pregunta 3
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle1"
                  align="center"
                  justify="center"
                  className={classes.respuestasHome}
                >
                  Lorem Ipsum lorem ipsum lorem ipsumlorem ipsum
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid 
            container 
            alignItems="center" 
            justify="center"
            style={{marginTop: matchesSM ? "5em" : "0em", marginBottom: matchesSM ? "1em" : "0em"}}
            >
            <Button
              variant="outlined"
              className={classes.botonLeerMasPreguntas}
              component={Link}
              to="/contacto"
            >
              <span>Leer más</span>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*---Contenedor de Información---*/}
        <Grid
          container
          style={{ height: matchesSM ? "20em" : "50em" }}
          alignItems="center"
          direction="row"
          className={classes.infoBackground}
        >
          <Grid
            item
            container
            style={{
              textAlign: matchesXS ? "center" : "inherit",
            }}
            direction={matchesXS ? "column" : "row"}
            spacing={matchesXS ? 10 : 0}
          >
            <Grid
              item
              sm
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}
            >
              <Grid containter direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                Contactános
                </Typography>
                <Typography variant="subtitle2">Comunicate con nosotros!</Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                    className={classes.botonLeerMas}
                    component={Link}
                    to="/contacto"
                  >
                    <span style={{ marginRight: 10 }}>Leer más</span>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "right",
              }}
            >
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
    
  );
}
