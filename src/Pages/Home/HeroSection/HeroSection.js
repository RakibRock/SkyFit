import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import css from "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="bgImage">
      <Grid
        sx={{
          color: "white",
        }}
        container
        spacing={2}
      >
        <Grid
          className="textBg"
          sx={{
            textAlign: "left",
            margin: "50px",
          }}
          item
          xs={8}
          md={5}
        >
          <Typography sx={{ mb: 2 }} variant="h6">
            AERIAL PHOTOGRAPHY
          </Typography>

          <Typography sx={{ mb: 2 }} variant="h4">
            There Are Many Great Ways
            <br /> To Use Drones. <br />
          </Typography>
          <Typography variant="parabody">
            {" "}
            We provide high quality drones with top notch battery life.
          </Typography>

          <Link to="/explore">
            <Button sx={{ mt: 1 }} variant="contained">
              View Drones
            </Button>
          </Link>
        </Grid>
        <Grid item xs={4} md={6}></Grid>
      </Grid>
    </div>
  );
};

export default HeroSection;
