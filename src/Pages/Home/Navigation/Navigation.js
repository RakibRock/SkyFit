import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import css from "./Navigation.css";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Button } from "@mui/material";

const Navigation = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user, logOut } = useAuth();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  console.log(user);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ bgcolor: "black" }} position="static">
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              SkyFit
            </Typography>
            <Typography sx={{ margin: "10px" }} variant="h6">
              <Link className="link" to="/">
                Home
              </Link>
            </Typography>
            <Typography sx={{ margin: "10px" }} variant="h6">
              <Link className="link" to="/explore">
                Explore
              </Link>
            </Typography>
            {user?.email ? (
              <Box>
                <Link
                  className="link"
                  style={{
                    marginLeft: "5px",
                    marginRight: "5px",
                    fontSize: "20px",
                  }}
                  to="/dashboard"
                >
                  Dashboard
                </Link>
                {/* <Typography variant="body1">{user.displayName}</Typography> */}
                <Button onClick={logOut} color="" variant="contained">
                  Log Out
                </Button>
              </Box>
            ) : (
              <Link style={{ textDecoration: "none" }} to="/login">
                <Button color="inherit" variant="contained">
                  Login
                </Button>
              </Link>
            )}
            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <Link className="link2" to="/login">
                    <MenuItem onClick={handleClose}>LogIn</MenuItem>
                  </Link>
                  <Link className="link2" to="/register">
                    <MenuItem>Register</MenuItem>
                  </Link>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navigation;
