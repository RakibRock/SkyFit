import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import login from "../../../images/login.png";
import useAuth from "../../../hooks/useAuth";
import useStyle from "../../../hooks/useStyle";
import imageRegister from "../../../images/Mobile login-rafiki.png";

const Registration = () => {
  const classes = useStyle();
  const { user, registerUser, isLoading, authError } = useAuth();

  const [loginData, setLoginData] = useState({});

  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginData.password !== loginData.password2) {
      alert("Passwords did not match");
      //return is required since we do not want to submit
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ p: 1, mt: 3 }} xs={12} md={6}>
          <img width="550px" src={imageRegister} alt="" />
        </Grid>
        <Grid item sx={{ p: 3, mt: 14 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>

          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%" }}
                id=" sx={{mt:8}}standard-basic"
                label="Your Name"
                name="name"
                onBlur={handleOnBlur}
                variant="standard"
              ></TextField>
              <TextField
                sx={{ width: "75%" }}
                id=" sx={{mt:8}}standard-basic"
                label="Your Email"
                type="email"
                name="email"
                onBlur={handleOnBlur}
                variant="standard"
              ></TextField>
              <br />
              <TextField
                sx={{ width: "75%" }}
                id="standard-basic"
                label="Your Password"
                name="password"
                onBlur={handleOnBlur}
                variant="standard"
                type="password"
              ></TextField>

              <TextField
                sx={{ width: "75%" }}
                id="standard-basic"
                label="Retype Your Password"
                name="password2"
                onBlur={handleOnBlur}
                variant="standard"
                type="password"
              ></TextField>

              <Button type="submit" className={classes.btn} variant="contained">
                Register
              </Button>

              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button variant="text">ALREADY A USER? PLEASE LOG IN</Button>
              </Link>
            </form>
          )}
          {isLoading && <CircularProgress />}

          {/* {user?.email && (
            <Alert severity="success">User has been created</Alert>
          )} */}

          {user?.email && (
            <Alert severity="success">
              User has been created successfully!
            </Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Registration;
