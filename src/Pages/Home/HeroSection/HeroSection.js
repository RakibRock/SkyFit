import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import drone from "../../../images/Drone race-bro.png";

const HeroSection = () => {
  return (
    <Container className="bgImage">
      <Grid container spacing={2}>
        <Grid
          sx={{
            textAlign: "left",
            margin: "50px",
          }}
          item
          xs={12}
          md={4}
        >
          <Typography
            sx={{ mb: 2, pt: 3, fontFamily: "Segoe UI", fontWeight: "400" }}
            variant="h5"
          >
            Welcome to SkyFit's drone store
          </Typography>

          <Typography
            sx={{
              mb: 2,
              fontFamily: "Segoe UI",
              fontWeight: "bold",
              fontSize: "4rem",
            }}
            variant="h2"
            className=""
          >
            Fly Above and Beyond.
          </Typography>
          <Typography
            sx={{ fontFamily: "Segoe UI", fontSize: "18px" }}
            variant="parabody"
          >
            {" "}
            We provide high quality drones with top notch battery life.
          </Typography>
          <br />
          <br />
          <Link className="button" to="/explore">
            <Button sx={{ color: "white" }}>View Drones</Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <img className="droneImage" src={drone} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
