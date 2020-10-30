import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from "@material-ui/core/styles";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/Listitem';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../../assets/Logo1.svg';

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
          [theme.breakpoints.down("md")]: {
            
        },
        [theme.breakpoints.down("xs")]: {
            marginBotton: "3em"
        }
      },
      logo: {
        height:  "5em",
            [theme.breakpoints.down("md")]: {
                height: "5em"
            },
            [theme.breakpoints.down("xs")]: {
                height: "5em"
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
          borderRadius: "50px",
          marginLeft: "25px",
          marginRight: "25px",
          border: "1px solid",
          "&:hover": {
            backgroundColor: "#D34D4C",
            border: "none",
            opacity: 1

            
        }
      },
      menu: {
          backgroundColor: theme.palette.common.blue,
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
            marginLeft: "-15em"
        }
      },
      drawerIconContainer:  {
          marginLeft: "auto",
          "&:hover": {
                backgroundColor: "transparent"
          }
      },
      drawer: {
          backgroundColor: theme.palette.common.blue,
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
          zIndex: theme.zIndex.modal + 1
      }

      
  }));

export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const [openDrawer, setOpenDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null)
    const [openMenu, setOpenMenu] = useState(false);

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
        {name: "Expreso de Encomiendas", 
            link:"/encomiendas", 
            activeIndex: 1, 
            selectedIndex: 1}, 
        {name: "Mudanzas Familiares y Corporativas", 
            link:"/mudanzas", 
            activeIndex: 1, 
            selectedIndex: 2}, 
        {name: "Logística y Distribución de Productos", 
            link:"/logistica_dist_prod", 
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
                <Button 
                    component={Link}
                    to="/login" 
                    variant="contained" 
                    color="#D34D4C" 
                    className={classes.button}
                    onClick={() =>props.setValue(5)}
                    >
                    Ingresar / Login
                </Button>
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
                    <ToolBar disableGutters>
                        <Button 
                        component={Link} to="/"
                        disableRipple 
                        onClick={() => props.setValue(0)} 
                        className={classes.logoContainer}
                        >
                            <img alt="logo de la empresa" className={classes.logo} src={logo} />
                        </Button>
                        {matches ? drawer : tabs}
                    </ToolBar>
                </AppBar>
            </ElevationScroll>
                <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}