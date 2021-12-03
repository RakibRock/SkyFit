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
          height: "540px",
          border: "3px solid #900c3e",
          borderRadius: "7px",
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{ width: "80%", m: "auto" }}
            component="img"
            height="270"
            image={image}
            alt="products images"
          />
          <CardContent
            sx={{
              color: "#900c3e",
              fontWeight: "bold",
              fontSize: "40px",
            }}
          >
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

        <Link className="button" to={`/purchase/${_id}`}>
          <Button sx={{ color: "white", fontSize: "17px" }} className="">
            Purchase
          </Button>
        </Link>
        {/* <Purchase _id={_id}></Purchase> */}
      </Card>
    </Grid>
  );
};

export default ProductCard;
