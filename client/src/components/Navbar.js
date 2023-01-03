import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
 
  const classes = useStyles();
  const {logo , navlinks , link} = classes;

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={logo}>
          WashingHub
        </Typography>
          <div className={navlinks}>
            <Link to="/" className={link}>
              Home
            </Link>
            <Link to="/services" className={link}>
               Services
            </Link>
            <Link to="/login" className={link}>
              Login
            </Link>
            <Link to="/register" className={link}>
              Register
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;