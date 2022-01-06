import React from "react";
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import loginImage from "../../../../images/Mobile login-rafiki.png";
import useStyle from "../../../../hooks/useStyle";

const Login = () => {
  const classes = useStyle();
  const { user, loginUser, isLoading, signInWithGoogle, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const [loginData, setLoginData] = useState({});

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(
      loginData.email,
      loginData.password,
      loginData.name,
      location,
      history
    );

    e.preventDefault();
  };

  //   const handleGoogleSignIn = () => {
  //     signInWithGoogle(location, history);
  //   };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ p: 1, mt: 3 }} xs={12} md={6}>
          <img width="550px" src={loginImage} alt="" />
        </Grid>
        <Grid item sx={{ p: 3, mt: 14 }} xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%" }}
                id=" sx={{mt:8}}standard-basic"
                label="Your Email"
                name="email"
                onBlur={handleOnChange}
                variant="standard"
              ></TextField>
              <br />
              <TextField
                sx={{ width: "75%" }}
                id="standard-basic"
                label="Your Password"
                name="password"
                onBlur={handleOnChange}
                variant="standard"
                type="password"
              ></TextField>

              <Button type="submit" className={classes.btn} variant="contained">
                Log In
              </Button>

              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "#900c3e" }} variant="text">
                  NEW USER? PLEASE REGISTER
                </Button>
              </Link>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">
              User has been logged in successfully!
            </Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
          {/* <Button onClick={handleGoogleSignIn} variant="contained">
            Google Sign In
          </Button> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
