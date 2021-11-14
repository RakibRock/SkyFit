import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Container } from "@mui/material";
import "./SingleProductCard.css";

const SingleProductCard = (props) => {
  const { _id, name, image, description, price } = props.singleProduct;

  return (
    <Container>
      <Card sx={{ mt: 3 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="100%"
            image={image}
            alt="green iguana"
          />
        </CardActionArea>
        <CardActions sx={{ justifyContent: "center", flexDirection: "column" }}>
          <Typography variant="h3">${price}</Typography>
          <Button variant="contained" sx={{ mt: 1 }}>
            Place Order
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default SingleProductCard;
