import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link, useHistory, useLocation } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from "@material-ui/core/styles";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../../assets/recursos/Logo1.png';

import AuthService from "services/AuthService";

//const user = JSON.parse(localStorage.getItem("user"));

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles(theme => ({
      toolbarMargin: {
          ...theme.mixins.toolbar,
          marginBotton: "5em",
          backgroundColor: "#71c4c8",
          [theme.breakpoints.down("md")]: {
            
        },
        [theme.breakpoints.down("xs")]: {
            marginBotton: "3em",
            width: "auto",
        }
      },
      logo: {
        height:  "5em",
       
            [theme.breakpoints.down("md")]: {
                height: "5em"
            },
            [theme.breakpoints.down("xs")]: {
                height: "5em",
                marginLeft: "-2em",
            }
        },
      logoContainer: {
          padding: 0,
          
          "&:hover": {
              backgroundColor: "transparent"
          }
      },
      tabContainer: {
          marginLeft: 'auto'
      },
      tab: {
          ...theme.typography.tab,
          minWidth: 10,
          color: "white",
          marginLeft: "25px"
      },
      button: {
          backgroundColor: "transparent",
          color: "white",
          transitionDuration: ".5s",
          marginLeft: "25px",
          marginRight: "25px",
          border: "1px solid",
          "&:hover": {
            backgroundColor: "#D34D4C",
            border: "none",
            opacity: 1

            
        }
      },
      buttonR: {
        backgroundColor: "transparent",
        color: "white",
        
        marginLeft: "25px",
        marginTop: "1em",
        marginRight: "25px",
        border: "1px solid",
        "&:hover": {
          backgroundColor: "#D34D4C",
          border: "none",
          opacity: 1

          
      }
    },
      menu: {
          backgroundColor: "#71c4c8",
          color: "white"
      },
      menuItem: {
          ...theme.typography.tab,
          opacity: 0.7,
          "&:hover": {
              opacity: 1
          }
      },
      drawerIcon: {
        height: "50px",
        width: "50px",
        color: "white",
        [theme.breakpoints.down("xs")]: {
            
        }
      },
      drawerIconContainer:  {
          marginLeft: "auto",
          "&:hover": {
                backgroundColor: "transparent"
          },
          [theme.breakpoints.down("xs")]: {
            marginLeft: "3em"
        }
      },
      drawer: {
          backgroundColor: "#71c4c8",
          top: "20px",
      },
      drawerItem: {
          ...theme.typography.tab,
          color: "white",
          opacity: 0.7
      },
      drawerLogReg: {
          color: "#ffff"
      },
      drawerItemSelected: {
          opacity: 1
      },
      appbar: {
          zIndex: theme.zIndex.modal + 1,
          backgroundColor: "#71c4c8",
          [theme.breakpoints.down("xs")]: {
            position: "fixed"
        }
      }

      
  }));

export default function Header(props) {
    let location = useLocation();
    const classes = useStyles();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const [openDrawer, setOpenDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null)
    const [openMenu, setOpenMenu] = useState(false);

    const [user , setUser] = useState(JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):'');

    const handleChange = (e, newValue) => {
        props.setValue(newValue);
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    };
    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        props.setSelectedIndex(i)
    }
    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false);
    };

    const menuOptions = [
        {name: "Servicios", 
            link:"/servicios", 
            activeIndex: 1, 
            selectedIndex: 0 }, 
        {name: "Logística Corporativa para Empresas", 
            link:"/servicios", 
            activeIndex: 1, 
            selectedIndex: 1}, 
        {name: "Transporte General", 
            link:"/servicios", 
            activeIndex: 1, 
            selectedIndex: 2}, 
        {name: "Mudanzas", 
            link:"/servicios", 
            activeIndex: 1, 
            selectedIndex: 3}];

    const routes = [
        {name: "Inicio", link:"/", activeIndex: 0}, 
        {name: "Servicios", link: "/servicios", activeIndex: 1, ariaOwns: anchorEl ? "simple-menu" : undefined,
        ariaPopup: anchorEl ? "true" : undefined, mouseOver: event => handleClick(event)},
        {name: "Sobre Nosotros", link:"sobre_nosotros", activeIndex: 2},
        {name: "Contacto", link:"/contacto", activeIndex: 3}]
        //{name: "Ingresar | Registrarse", link:"/reglog", activeIndex: 4}]

    useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `{$route.link}`:
                    if(props.value !== route.activeIndex) {
                        props.setValue(route.activeIndex)
                        if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
                            props.selectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                    case '/regLog':
                        props.setValue(5);
                    break;
                    default:
                    break;
            }
        })

        
        
         }, [props.value, menuOptions, props.selectedIndex, routes, props]);

         const tabs = (
             <React.Fragment>
                 <Tabs 
                    value={props.value} 
                    onChange={handleChange}
                    className={classes.tabContainer}>

                {routes.map((route, index) => (
                    <Tab 
                        key={`${route}${index}`}
                        className={classes.tab} 
                        component={Link} 
                        to={route.link} 
                        label={route.name}
                        aria-owns={route.ariaOwns} 
                        aria-haspopup={route.ariaPopup} 
                        onMouseOver={route.mouseOver}/>
                ))}
                    
                </Tabs>

                    {!user?  
                        <Button 
                            component={Link}
                            to={{pathname: `/login`, customroute: location.pathname }}
                            variant="contained" 
                            color="#D34D4C" 
                            className={classes.button}
                            onClick={() =>props.setValue(5)}
                            >
                            Ingresar / Login 
                        </Button>
                    :
                        <Button 
                            variant="contained" 
                            color="#D34D4C" 
                            className={classes.button}
                            onClick={() => {
                                AuthService.logout()
                                window.location.reload();
                            }}
                        >
                        salir 
                        </Button>
                    }
                    <Menu 
                        id="simple-menu" 
                        anchorEl={anchorEl} 
                        open={openMenu}
                        onClose={handleClose}
                        classes={{paper: classes.menu}}
                        elevation={0}
                        style={{zIndex: 1302}}
                        keepMounted
                        MenuListProps={{onMouseLeave: handleClose}}>
                            {menuOptions.map((option, i) => (
                                <MenuItem 
                                key={`${option}${i}`}
                                component={Link}
                                to={option.link}
                                classes={{root: classes.menuItem}} 
                                onClick={(event) =>
                                    {handleMenuItemClick(event, i); 
                                    props.setValue(1);
                                    handleClose()}} 
                                selected={i === props.selectedIndex && props.value === 1}>
                                {option.name}
                                </MenuItem>
                            ))}
                    </Menu>
             </React.Fragment>
         );

         const drawer = (
             <React.Fragment>
                 <SwipeableDrawer 
                    disableBackdropTransition={!iOS} 
                    disableDiscovery={iOS} 
                    open={openDrawer} 
                    onClose={() => setOpenDrawer(false)} 
                    onOpen={() => setOpenDrawer(true)}
                    classes={{paper: classes.drawer}}
                 >
                     <div className={classes.toolbarMargin} />
                    <List disablePadding>
                        {routes.map(route => (
                            <ListItem
                                key={`${route}${route.activeIndex}`}
                                divider 
                                button 
                                component={Link} 
                                to={route.link} 
                                selected={props.value === route.activeIndex}
                                classes={{selected: classes.drawerItemSelected}} 
                                onClick={() => {setOpenDrawer(false); 
                                props.setValue(route.activeIndex)}}>
                                <ListItemText 
                                className={classes.drawerItem  } 
                                disableTypography
                                >
                                    {route.name}

                                </ListItemText>
                            </ListItem>
                        ))}
                        {!user?  
                        <Button 
                            component={Link}
                            to={{pathname: `/login`, customroute: location.pathname }}
                            variant="contained" 
                            color="#D34D4C" 
                            className={classes.buttonR}
                            onClick={() =>props.setValue(5)}
                            >
                            Ingresar / Login 
                        </Button>
                    :
                        <Button 
                            variant="contained" 
                            color="#D34D4C" 
                            className={classes.buttonR}
                            onClick={() => {
                                AuthService.logout()
                                window.location.reload();
                            }}
                        >
                        salir 
                        </Button>
                    }
                    </List>
                 </SwipeableDrawer>
                 <IconButton 
                    className={classes.drawerIconContainer} 
                    onClick={() => setOpenDrawer(!openDrawer)}
                    disableRipple>
                     <MenuIcon className={classes.drawerIcon} />
                 </IconButton>
             </React.Fragment>
         )

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" className={classes.appbar}>
                    <Toolbar disableGutters>
                        <Button 
                        component={Link} to="/"
                        disableRipple 
                        onClick={() => props.setValue(0)} 
                        className={classes.logoContainer}
                        >
                            <img alt="logo de la empresa" className={classes.logo} src={logo} />
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
                <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}