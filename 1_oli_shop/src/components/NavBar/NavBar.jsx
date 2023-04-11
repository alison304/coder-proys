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
import { Link } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget';
import olishop from '../../assets/img/olishop.png';
import DrawerComponent from "./Drawer";
import "./navbar.css";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        borderBottom: "1px solid transparent",
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="static" style={{ backgroundColor: '#2196F3' }}>
            <CssBaseline />
            <Toolbar className="navbar-t">
                <img className="title" src={olishop} alt='olishop' />
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className={classes.navlinks}>
                        <Link to="/ropa" className={classes.link}>
                            Ropa
                        </Link>
                        <Link to="/regalos" className={classes.link}>
                            Regalos
                        </Link>
                        <Link to="/accesorios" className={classes.link}>
                            Accesorios
                        </Link>
                        <Link to="/cart-widget" className={classes.link}>
                            <CartWidget />
                        </Link>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;