import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/Card/ProductCard";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className=" marginbt">
      <Typography sx={{ paddingTop: "70px", fontWeight: "bold" }} variant="h3">
        Our Products
      </Typography>
      <hr width="120px" />
      <br />
      <br />
      <Container>
        <Grid container spacing={2}>
          {products.map((product) => (
            <ProductCard product={product} key={product._id}></ProductCard>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
