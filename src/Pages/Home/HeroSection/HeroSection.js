import { Button, Grid, Typography } from "@mui/material";
import React from "react";
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
            margin: "100px",
            padding: "",
          }}
          item
          xs={8}
          md={5}
        >
          <Typography sx={{ mb: 2 }} variant="h6">
            AERIAL PHOTOGRAPHY
          </Typography>

          <Typography sx={{ mb: 2 }} variant="h3">
            There Are Many <br /> Great Ways To <br /> Use Drones
          </Typography>

          <Button variant="contained">Get Started</Button>
        </Grid>
        <Grid item xs={4} md={6}></Grid>
      </Grid>
    </div>
  );
};

export default HeroSection;
