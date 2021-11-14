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
// import login from "../../../images/login.png";

const Login = () => {
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
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
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

              <Button
                type="submit"
                sx={{ width: "75%", mt: 3 }}
                variant="contained"
              >
                Log In
              </Button>

              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button variant="text">NEW USER? PLEASE REGISTER</Button>
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
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Container>
  );
};

export default Login;
