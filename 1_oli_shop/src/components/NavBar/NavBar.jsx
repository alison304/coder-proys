import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
} from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget';
import olishop from '../../assets/img/olishop.png';
import "./navbar.css";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(4),
        display: "flex",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "19px",
        marginLeft: theme.spacing(25),
        borderBottom: "1px solid transparent",
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="static" style={{ backgroundColor: '#2196F3' }}>
            <CssBaseline />
            <Toolbar className="navbar-t">
                <Link to='/'>
                    <img className="title" src={olishop} alt='olishop' />
                </Link>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className={classes.navlinks}>
                        <NavLink to={`/category/ropa`} className={classes.link}>
                            Ropa
                        </NavLink>
                        <NavLink to={`/category/regalos`} className={classes.link}>
                            Regalos
                        </NavLink>
                        <NavLink to={`/category/accesorios`} className={classes.link}>
                            Accesorios
                        </NavLink>
                        <NavLink to={`/cart-widget`} className={classes.link}>
                            <CartWidget />
                        </NavLink>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;