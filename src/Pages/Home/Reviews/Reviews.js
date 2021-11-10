import { Container as div, Grid, Typography } from "@mui/material";
import React from "react";
import ReviewCard from "../../../components/ReviewCard/ReviewCard";
import "./Review.css";

const Reviews = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6} md={12}>
          <Typography sx={{ padding: "100px" }} variant="h3">
            Excellent Customer Support Reviews
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <ReviewCard></ReviewCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default Reviews;
