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
import { Button, Container } from "@mui/material";

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
    <Container>
      <Box sx={{ flexGrow: 1, textAlign: "left" }}>
        <AppBar
          sx={{ bgcolor: "#900c3e", borderRadius: "5px" }}
          position="static"
        >
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              SkyFit
            </Typography>
            <Typography variant="h6">
              <Link className="link" to="/">
                Home
              </Link>
            </Typography>
            <Typography sx={{ margin: "10px" }} variant="h6">
              <Link className="link" to="/explore">
                Explore
              </Link>
            </Typography>

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
                  className="text"
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
                  {user?.email ? (
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Link
                        className="link"
                        style={{
                          color: "black",
                          padding: "5px",
                        }}
                        to="/dashboard"
                      >
                        Dashboard
                      </Link>
                      {/* <Typography variant="body1">{user.displayName}</Typography> */}
                      <Link style={{ textDecoration: "none" }}>
                        <Button
                          style={{
                            color: "black",
                          }}
                          onClick={logOut}
                        >
                          Log Out
                        </Button>
                      </Link>
                    </Box>
                  ) : (
                    <Box>
                      <Link style={{ textDecoration: "none" }} to="/login">
                        <Button color="inherit" variant="contained">
                          Login
                        </Button>
                      </Link>
                      <Link
                        style={{ color: "black" }}
                        className="link2"
                        to="/register"
                      >
                        <MenuItem>Register</MenuItem>
                      </Link>
                    </Box>
                  )}
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
};

export default Navigation;
