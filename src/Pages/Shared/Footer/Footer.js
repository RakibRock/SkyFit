import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant="h4">SkyFit</Typography>
          <Typography variant="bodypara">
            We are the best drone sellers in the country.
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}></Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h5">contact</Typography>
          <Typography variant="bodypara">email: skyfit@gmail.com</Typography>
          <br />
          <Typography variant="bodypara">phone:01173827737</Typography>
        </Grid>
      </Grid>
      <Typography sx={{ textAlign: "center" }} variant="bodypara">
        Copyright @ Md Rakib Rahman - Programming Hero
      </Typography>
    </div>
  );
};

export default Footer;
