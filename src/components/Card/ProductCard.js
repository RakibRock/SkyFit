import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { name, description, image } = props.product;

  return (
    <Grid item xs={8} md={4}>
      <Card sx={{ height: "500px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={image}
            alt="products images"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>

        <Link className="purchase" to="/purchase">
          Purchase
        </Link>
      </Card>
    </Grid>
  );
};

export default ProductCard;
