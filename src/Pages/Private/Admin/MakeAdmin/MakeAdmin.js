import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleAdminSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <h2>Make an Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          label="email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        ></TextField>
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
