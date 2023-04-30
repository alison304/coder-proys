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
                <Link to='/'>
                    <img className="title" src={olishop} alt='olishop' />
                </Link>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className='category'>
                        <NavLink to={`/category/ropa`} className={({isActive}) => isActive?'ActiveOption':'Option'}>
                            Ropa
                        </NavLink>
                        <NavLink to={`/category/regalos`} className={({isActive}) => isActive?'ActiveOption':'Option'}>
                            Regalos
                        </NavLink>
                        <NavLink to={`/category/accesorios`} className={({isActive}) => isActive?'ActiveOption':'Option'}>
                            Accesorios
                        </NavLink>
                        <CartWidget />
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;