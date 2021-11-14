import { Grid, Typography } from "@mui/material";
import ProductCard from "../../../components/Card/ProductCard";
import Navigation from "../../Home/Navigation/Navigation";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleProductCard from "../../../components/Card/SingleProductCard/SingleProductCard";
import useAuth from "../../../hooks/useAuth";
import "./Purchase.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Purchase = () => {
  const { user } = useAuth();

  //since we are loading a single product, it is an object not an array
  const [singleProduct, setSingleProduct] = useState({});

  const { id, name } = useParams();
  console.log("hi purchase");
  console.log("id:", id, "name:", name);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  //Using useEffect to load the data of a single product when the purchase button is clicked
  useEffect(() => {
    //getting the dynamic url
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <SingleProductCard
            singleProduct={singleProduct}
            key={singleProduct._id}
          ></SingleProductCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleFormSubmit}>
            <Typography sx={{ m: 3 }} variant="h4">
              Place Order Form
            </Typography>
            <TextField
              sx={{ m: 1 }}
              disabled
              id="outlined-disabled"
              label="Disabled"
              name="userName"
              defaultValue={user.displayName}
            />
            <TextField
              sx={{ m: 1 }}
              disabled
              id="outlined-disabled"
              label="Disabled"
              name="email"
              defaultValue={user.email}
            />
            <br />
            <TextField
              sx={{ m: 1 }}
              disabled
              id="outlined-disabled"
              label="Disabled"
              name="productName"
              defaultValue={singleProduct.name}
            />
            <TextField
              sx={{ m: 1 }}
              disabled
              id="outlined-disabled"
              label={singleProduct.price}
              name="productPrice"
              defaultValue=""
            />
            <br />
            <TextField
              sx={{ m: 1 }}
              id="outlined-disabled"
              label="Address"
              name="userAddress"
              defaultValue=""
            />
            <TextField
              sx={{ m: 1 }}
              id="outlined-disabled"
              label="Phone"
              name="userPhone"
              defaultValue=""
            />
            <br />

            <button type="submit">Place Order</button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Purchase;
