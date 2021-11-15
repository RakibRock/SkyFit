import { Container, Container as div, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReviewCard from "../../../components/ReviewCard/ReviewCard";
import "./Review.css";

const Reviews = () => {
  const [userReviews, setUserReviews] = useState([]);
  console.log(userReviews);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setUserReviews(data));
  }, []);

  return (
    <Container sx={{ padding: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography sx={{ padding: "50px" }} variant="h4">
            Excellent Customer Support Reviews
          </Typography>
        </Grid>

        {userReviews.map((userReview) => (
          <ReviewCard userReview={userReview}></ReviewCard>
        ))}
      </Grid>
    </Container>
  );
};

export default Reviews;
