import {
  AppBar,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../Home/Navigation/Navigation";
import MenuIcon from "@mui/icons-material/Menu";
import useAuth from "../../../hooks/useAuth";
import TextField from "@mui/material/TextField";

const Review = (props) => {
  const [userReviews, setUserReviews] = useState({});
  const [reviews, setReviews] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const rev = {};
    rev[field] = value;

    setUserReviews(rev);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    //getting the user inputs
    const review = {
      ...userReviews,
    };
    //send to server
    fetch("https://hidden-sands-86825.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Thank you for your review");
        }
      });
    e.target.reset();
  };

  // useEffect(() => {
  //   const url = ``;
  //   fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(),
  //   });
  // }, []);

  return (
    <Box>
      <Typography variant="h3">reviews</Typography>
      <Typography variant="h5">Submit your review here</Typography>
      <Grid container spacing={2}>
        <Grid sx={{ margin: "auto", mt: 3 }} item xs={6} md={8}>
          <form onSubmit={handleReviewSubmit}>
            <TextField
              id="outlined-multiline-static"
              label="Write a Review"
              name="review"
              onBlur={handleOnBlur}
              multiline
              rows={4}
              defaultValue=""
            />{" "}
            <br />
            <Button type="submit">Submit</Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Review;
