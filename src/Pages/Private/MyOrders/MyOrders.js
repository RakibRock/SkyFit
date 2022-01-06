import {
  AppBar,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../Home/Navigation/Navigation";
import MenuIcon from "@mui/icons-material/Menu";
import useAuth from "../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MyOrders = (props) => {
  const { logOut, user } = useAuth();
  const drawerWidth = 240;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  //state for displaying orders
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://hidden-sands-86825.herokuapp.com/orders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  const handleDelete = (id) => {
    // const proceed = window.confirm("Are you sure you want to delete?");
    // console.log(proceed);

    const url = `https://hidden-sands-86825.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Deleted");
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        }
      });
  };
  const orderStyle = {
    color: "#900c3e",
    fontWeight: "bold",
    backgroundColor: "white",
  };

  return (
    <Box>
      <Toolbar />
      <Grid item xs={12} md={12}>
        <Typography variant="h3">orders {orders.length}</Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  key={order._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {order.productName}
                  </TableCell>
                  <TableCell align="right">{order.productPrice}</TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => handleDelete(order._id)}
                      variant="contained"
                      style={orderStyle}
                    >
                      Cancel
                    </Button>
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography paragraph></Typography>
      </Grid>
    </Box>
  );
};

export default MyOrders;
