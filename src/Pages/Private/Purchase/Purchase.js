import { Alert, Grid, Typography } from "@mui/material";
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

  //State for booking success
  const [orderSuccess, setOrderSuccess] = useState(false);

  const initialInfo = {
    userName: user.displayName,
    email: user.email,
    userAddress: "",
    userPhone: "",
  };
  const [orderInfo, setOrderInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...orderInfo };
    newInfo[field] = value;

    setOrderInfo(newInfo);
  };

  const { id, name } = useParams();

  const handleFormSubmit = (e) => {
    //collect data
    const order = {
      ...orderInfo,
      productName: singleProduct.name,
      productPrice: singleProduct.price,
    };
    //send to the server
    fetch("https://hidden-sands-86825.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Your order has been made");
          setOrderSuccess(true);
        }
        console.log(data);
      });
    e.preventDefault();
  };

  //Using useEffect to load the data of a single product when the purchase button is clicked
  useEffect(() => {
    //getting the dynamic url
    const url = `https://hidden-sands-86825.herokuapp.com/products/${id}`;
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
              id="outlined-disabled"
              label="Your Name"
              name="userName"
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
            />
            <TextField
              sx={{ m: 1 }}
              id="outlined-disabled"
              label="Your Email"
              name="email"
              onBlur={handleOnBlur}
              defaultValue={user.email}
            />
            <br />
            <TextField
              disabled
              sx={{ m: 1 }}
              id="outlined-disabled"
              label={singleProduct.name}
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
              onBlur={handleOnBlur}
              defaultValue=""
            />
            <TextField
              sx={{ m: 1 }}
              id="outlined-disabled"
              label="Phone"
              name="userPhone"
              onBlur={handleOnBlur}
              defaultValue=""
            />
            <br />

            <button type="submit">Place Order</button>
            {orderSuccess && (
              <Alert severity="success">
                Product Booking successfull. See your orders page for details.
              </Alert>
            )}
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Purchase;
