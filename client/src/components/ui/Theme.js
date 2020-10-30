import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#8EC3C7";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";


export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,	
            orange: `${arcOrange}`
            	
        },
        primary: {
            main: `${arcBlue}`
        },
        seconday: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
          fontWeight: 700,
          fontSize: ".8rem",
        },
        h2: {
            fontFamily: "Raleway",
          fontWeight: 700,
          fontSize: "2.5rem",
          color: "#D34D4C",
          lineHeight: "1.3"
        },
        h4: {
            fontFamily: "Raleway",
            fontSize: "1.5rem",
            color: "#8EC3C7",
            fontWeight: 700
        },
        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: `${arcGrey}`
        },
        subtitle2: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: "white"
        }
       
    }
});