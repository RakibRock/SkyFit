import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/Card/ProductCard";

import Navigation from "../Home/Navigation/Navigation";

const Explore = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  return (
    <div className="">
      <Navigation></Navigation>
      <Typography sx={{ padding: "50px", fontWeight: "bold" }} variant="h3">
        Explore Our Drones Collection
      </Typography>
      <Container>
        <Grid container spacing={2}>
          {allProducts.map((product) => (
            <ProductCard product={product} key={product._id}></ProductCard>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Explore;
