import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/Card/ProductCard";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://hidden-sands-86825.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className=" marginbt">
      <Typography sx={{ paddingTop: "70px", fontWeight: "bold" }} variant="h4">
        Our Products
      </Typography>
      <hr width="120px" />
      <br />
      <br />
      <Container>
        <Grid container spacing={2}>
          {/* applying filter method strategy to display 6 products on the homepage */}
          {products
            .filter((product) => product.price <= 400)
            .map((filteredProduct) => (
              <ProductCard
                product={filteredProduct}
                key={filteredProduct._id}
              ></ProductCard>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
