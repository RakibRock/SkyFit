import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { admin } = useAuth();

  const handleAdminSubmit = (e) => {
    const user = { email };
    if (admin) {
      fetch("http://localhost:5000/users/admin", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            console.log(data);
            setSuccess(true);
          }
        });
    }
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
          sx={{ width: "50%" }}
          label="email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        ></TextField>
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Made Admin Successfully</Alert>}
      {/* {!success && (
        <Alert severity="error">
          Admin cannot be made since you are not an admin{" "}
        </Alert>
      )} */}
    </div>
  );
};

export default MakeAdmin;
