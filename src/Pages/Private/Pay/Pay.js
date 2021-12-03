import { Typography } from "@mui/material";
import React from "react";
import Navigation from "../../Home/Navigation/Navigation";
import {
  AppBar,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";

import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import useAuth from "../../../hooks/useAuth";

const Pay = (props) => {
  const { logOut } = useAuth();
  const drawerWidth = 240;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to="/dashboard">
        <Button>Dashboard</Button>
      </Link>
      <Divider />
      <Link to="/pay">
        <Button>Pay</Button>
      </Link>
      <Divider />

      <Link to="/myOrders">
        <Button>My Orders</Button>
      </Link>
      <Divider />

      <Link to="/review">
        <Button>Review</Button>
      </Link>
      <Divider />
      <Link to="/">
        <Button
          sx={{ m: 3 }}
          onClick={logOut}
          color="inherit"
          variant="outlined"
        >
          Log Out
        </Button>
      </Link>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Typography variant="h3">Payment system coming soon</Typography>
    </div>
  );
};

export default Pay;
