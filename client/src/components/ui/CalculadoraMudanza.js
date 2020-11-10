import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MileageMap from "components/ui/MileageMap";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete';



import check from '../../assets/check.svg';
import send from '../../assets/send.svg';
import heladeraC from '../../assets/heladeraC.svg';
import heladeraM from '../../assets/heladeraM.svg';
import heladeraG from '../../assets/heladeraG.svg';
import mobile from '../../assets/mobile.svg';
import website from '../../assets/website.svg';
import backArrow from '../../assets/backArrow.svg';
import forwardArrow from '../../assets/forwardArrow.svg';
import backArrowDisabled from '../../assets/backArrowDisabled.svg';
import forwardArrowDisabled from '../../assets/forwardArrowDisabled.svg';
import camera from '../../assets/camera.svg';
import upload from '../../assets/upload.svg';
import person from '../../assets/person.svg';
import people from '../../assets/people.svg';
import info from '../../assets/info.svg';
import bell from '../../assets/bell.svg';
import iphone from '../../assets/iphone.svg';
import gps from '../../assets/gps.svg';
import customized from '../../assets/customized.svg';
import data from '../../assets/data.svg';
import users from '../../assets/users.svg';
import android from '../../assets/android.svg';
import globe from '../../assets/globe.svg';
import biometrics from '../../assets/biometrics.svg';

import estimateAnimation from "../../animations/estimateAnimation/data.json";
import Lottie from "react-lottie";

const useStyles  = makeStyles((theme) => ({
    mainContainer: {
        maxWidth: "90%"
    },
    tituloMedidas1: {
        fontWeight: "500",
        fontFamily: "Raleway",
        color: "#8EC3C7",
       
    },
    tituloMedidas2: {
        fontWeight: "500",
        fontFamily: "Raleway",
        color: "#8EC3C7",
        marginLeft: "2.5em"
    },
    tituloMedidas3: {
        fontWeight: "500",
        fontFamily: "Raleway",
        color: "#8EC3C7",
        marginLeft: "5.5em"
    },
    fotoMedidas1: {
        width: "12em",
        height: "10em"
    },
    fotoMedidas2: {
        width: "16em",
        height: "14em"
    },
    fotoMedidas3: {
        width: "20em",
        height: "18m"
    },
    contenedorMedidas: {
        marginLeft: "6em",
        marginRight: "2em"
    },
    cotizarBoton: {
        
            backgroundColor: "#8EC3C7",
            color: "white",
            borderRadius: 50,
            height: 45,
            width: 200,
            alignItems: "center",
            marginTop: "7em",
            marginLeft: "40em",   
            marginBottom: "1em",   
            "&:hover": {
              backgroundColor: "#D34D4C",
              border: "none",
              opacity: 1,
            
          }
    },
    columnaElementos1: {
        marginTop: "15em"
    },
    columnaElementos2: {
        marginTop: "15em"
    }
}));

export default function CalculadoraMudanza() {
    const classes = useStyles();
    const theme = useTheme();

    const defaultOptions = {
        loop: true,
        autoplay:false,
        animationData: estimateAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option) => option.title,
      };
    
      const flatProps = {
        options: top100Films.map((option) => option.title),
      };
    
      const [value, setValue] = React.useState(null);

    return(
        <Grid 
            container 
            direction="row"
            className={classes.mainContainer}>
            <Grid 
                item 
                containter 
                direction="column" lg>
                <Grid 
                    item style={{ marginTop: "2em",  marginLeft: "25em" }}>
                    <Typography 
                        variant="h2"
                        >
                            AGREGÁ LO QUE NECESITES MUDAR
                    </Typography>
                </Grid>
            </Grid>
            <Grid 
                item 
                containter 
                direction="column"
                className={classes.columnaElementos1}
                lg
                >
                <div style={{ width: 300 }} className={classes.selecionElementos1}> 
                    <Autocomplete
                        {...defaultProps}
                        id="debug"
                        debug
                        renderInput={(params) => <TextField {...params} label="debug" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                        <TextField {...params} label="disableCloseOnSelect" margin="normal" />
                        )}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="clear-on-escape"
                        clearOnEscape
                        renderInput={(params) => <TextField {...params} label="clearOnEscape" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="disable-clearable"
                        disableClearable
                        renderInput={(params) => <TextField {...params} label="disableClearable" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="include-input-in-list"
                        includeInputInList
                        renderInput={(params) => (
                        <TextField {...params} label="includeInputInList" margin="normal" />
                        )}
                    />
                    <Autocomplete
                        {...flatProps}
                        id="flat-demo"
                        renderInput={(params) => <TextField {...params} label="flat" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="controlled-demo"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} label="controlled" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="auto-complete"
                        autoComplete
                        includeInputInList
                        renderInput={(params) => <TextField {...params} label="autoComplete" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="disable-list-wrap"
                        disableListWrap
                        renderInput={(params) => <TextField {...params} label="disableListWrap" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="open-on-focus"
                        openOnFocus
                        renderInput={(params) => <TextField {...params} label="openOnFocus" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="auto-highlight"
                        autoHighlight
                        renderInput={(params) => <TextField {...params} label="autoHighlight" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="auto-select"
                        autoSelect
                        renderInput={(params) => <TextField {...params} label="autoSelect" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="disabled"
                        disabled
                        renderInput={(params) => <TextField {...params} label="disabled" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="disable-portal"
                        disablePortal
                        renderInput={(params) => <TextField {...params} label="disablePortal" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="blur-on-select"
                        blurOnSelect
                        renderInput={(params) => <TextField {...params} label="blurOnSelect" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="clear-on-blur"
                        clearOnBlur
                        renderInput={(params) => <TextField {...params} label="clearOnBlur" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="select-on-focus"
                        selectOnFocus
                        renderInput={(params) => <TextField {...params} label="selectOnFocus" margin="normal" />}
                    />
                    </div>
            </Grid>
            <Grid 
                item 
                containter 
                direction="column"
                className={classes.columnaElementos2}
                >
                <div style={{ width: 300 }} className={classes.selecionElementos2}>
                    <Autocomplete
                        {...defaultProps}
                        id="debug"
                        debug
                        renderInput={(params) => <TextField {...params} label="debug" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                        <TextField {...params} label="disableCloseOnSelect" margin="normal" />
                        )}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="clear-on-escape"
                        clearOnEscape
                        renderInput={(params) => <TextField {...params} label="clearOnEscape" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="disable-clearable"
                        disableClearable
                        renderInput={(params) => <TextField {...params} label="disableClearable" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="include-input-in-list"
                        includeInputInList
                        renderInput={(params) => (
                        <TextField {...params} label="includeInputInList" margin="normal" />
                        )}
                    />
                    <Autocomplete
                        {...flatProps}
                        id="flat-demo"
                        renderInput={(params) => <TextField {...params} label="flat" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="controlled-demo"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} label="controlled" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="auto-complete"
                        autoComplete
                        includeInputInList
                        renderInput={(params) => <TextField {...params} label="autoComplete" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="disable-list-wrap"
                        disableListWrap
                        renderInput={(params) => <TextField {...params} label="disableListWrap" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="open-on-focus"
                        openOnFocus
                        renderInput={(params) => <TextField {...params} label="openOnFocus" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="auto-highlight"
                        autoHighlight
                        renderInput={(params) => <TextField {...params} label="autoHighlight" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="auto-select"
                        autoSelect
                        renderInput={(params) => <TextField {...params} label="autoSelect" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="disabled"
                        disabled
                        renderInput={(params) => <TextField {...params} label="disabled" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="disable-portal"
                        disablePortal
                        renderInput={(params) => <TextField {...params} label="disablePortal" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="blur-on-select"
                        blurOnSelect
                        renderInput={(params) => <TextField {...params} label="blurOnSelect" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="clear-on-blur"
                        clearOnBlur
                        renderInput={(params) => <TextField {...params} label="clearOnBlur" margin="normal" />}
                    />
                    <Autocomplete
                        {...defaultProps}
                        id="select-on-focus"
                        selectOnFocus
                        renderInput={(params) => <TextField {...params} label="selectOnFocus" margin="normal" />}
                    />
                    </div>
            </Grid>
             {/*---animación
            <Grid 
                item 
                containter 
                direction="column" >
                <Grid 
                    item
                    style={{ marginRight: "20em", maxWidth: "50em", marginLeft: "28em"}}
                    >
                    <Lottie 
                        options={defaultOptions} 
                        height="100%" 
                        width="100%" 
                        />
                </Grid>
            </Grid>
            ---*/}
            <Grid 
                item sm
                containter 
                direction="column"
                alignItems="center"
                style={{ marginLeft: "8em", marginBottom: "20em"}}
                >
                <Grid 
                    item>
                    <Typography 
                        variant="h2" 
                        align="center" 
                        style={{fontWeight: 500}}
                        gutterBottom
                        >
                            Elegí la medida de tu (elemento a cotizar)
                    </Typography>
                </Grid>
                <Grid item container className={classes.contenedorMedidas}>
                    <Grid item container direction="column" md>
                        <Grid item style={{ maxWidth: "12em"}}>
                            <Typography variant="h6" align="center" className={classes.tituloMedidas1}>
                                Tamaño Chico
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={heladeraC} alt="Tamaño Chico posibles flotando" className={classes.fotoMedidas1} />
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item style={{ maxWidth: "12em"}}>
                            <Typography variant="h6" align="center" className={classes.tituloMedidas2}>
                                Tamaño Mediano
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={heladeraM} alt="Tamaño Mediano posibles flotando" className={classes.fotoMedidas2} />
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item style={{ maxWidth: "12em"}}>
                            <Typography variant="h6" align="center" className={classes.tituloMedidas3}>
                                Tamaño Grande
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={heladeraG} alt="Tamaño Grande posibles flotando" className={classes.fotoMedidas3} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid 
                    item
                    container
                    justify="space-between">
                        <Grid 
                            item>
                                <img src={backArrow} alt="anterior" />
                        </Grid>
                        <Grid 
                            item>
                                <img src={forwardArrow} alt="siguiente" />
                        </Grid>
                </Grid>
                <Grid item>
                    <Button variant="contained" className={classes.cotizarBoton}>
                        COTIZAR MUDANZA
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
  ];


