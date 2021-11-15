import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import Purchase from "../../Pages/Private/Purchase/Purchase";

const ProductCard = (props) => {
  const { name, description, image, price, _id } = props.product || {};

  return (
    <Grid item xs={12} md={4}>
      <Card
        sx={{
          height: "550px",
          border: "1px solid #30BCED",
          borderRadius: "7px",
        }}
      >
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
            <Typography variant="h5" color="text.secondary">
              ${price}
            </Typography>
          </CardContent>
        </CardActionArea>

        <Link className="purchase" to={`/purchase/${_id}`}>
          <Button>Purchase</Button>
        </Link>
        {/* <Purchase _id={_id}></Purchase> */}
      </Card>
    </Grid>
  );
};

export default ProductCard;
