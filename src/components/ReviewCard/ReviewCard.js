import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import useAuth from "../../hooks/useAuth";

const ReviewCard = ({ userReview }) => {
  const { user } = useAuth();

  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>;
  return (
    <Box>
      <Grid sx={{ margin: "auto" }} item xs={12} md={6}>
        <Card
          sx={{
            minWidth: 320,
            m: 1,
            backgroundColor: "#30BCED",
            color: "white",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            ></Typography>

            <Typography variant="body2">
              review
              <br />
              {userReview.review}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default ReviewCard;
