import { Container, Container as div, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReviewCard from "../../../components/ReviewCard/ReviewCard";
import "./Review.css";

const Reviews = () => {
  const [userReviews, setUserReviews] = useState([]);
  console.log(userReviews);

  useEffect(() => {
    fetch("https://hidden-sands-86825.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setUserReviews(data));
  }, []);

  return (
    <Container sx={{ padding: "20px 0 200px 0" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography sx={{ padding: "50px", color: "#900c3e" }} variant="h4">
            What Our Customers Say
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
