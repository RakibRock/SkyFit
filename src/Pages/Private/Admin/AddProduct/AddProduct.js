import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";

const AddProduct = () => {
  const [addProduct, setAddProduct] = useState({});
  console.log(addProduct);
  //we take the user provided data and set in the state
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProduct = { ...addProduct };
    newProduct[field] = value;

    setAddProduct(newProduct);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const product = {
      ...addProduct,
    };
    //send to server
    fetch("http://localhost:5000/newProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(product);
        if (data.insertedId) {
          alert("product added");
        }
      });
    e.target.reset();
  };
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <Typography variant="h5">Add A Product</Typography>
      <form onSubmit={handleAddProduct}>
        <TextField
          sx={{ m: 1 }}
          fullWidth
          onBlur={handleOnBlur}
          label="name"
          name="name"
        />

        <TextField
          sx={{ m: 1 }}
          fullWidth
          onBlur={handleOnBlur}
          label="description"
          name="description"
        />
        <TextField
          sx={{ m: 1 }}
          fullWidth
          onBlur={handleOnBlur}
          label="price"
          name="price"
        />
        {/* <input type="file"></input>
        <br />
        <br /> */}

        <Button variant="outlined" type="submit">
          Add Product
        </Button>
      </form>
    </Box>
  );
};

export default AddProduct;
