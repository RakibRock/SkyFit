import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import Navigation from "../Home/Navigation/Navigation";
import useAuth from "../../hooks/useAuth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Pay from "../Private/Pay/Pay";
import MyOrders from "../Private/MyOrders/MyOrders";
import Review from "../Private/Review/Review";
import MakeAdmin from "../Private/Admin/MakeAdmin/MakeAdmin";
import AddProduct from "../Private/Admin/AddProduct/AddProduct";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import "./Dashboard.css";

const drawerWidth = 240;
const Dashboard = (props) => {
  const { logOut, admin, user } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to="/home">
        <Button>Back To Home</Button>
      </Link>
      <Divider />

      {!admin && (
        <Box>
          <Link to={`${url}/pay`}>
            <Button>Pay</Button>
          </Link>
          <Divider />

          <Link to={`${url}/myOrders`}>
            <Button>My Orders</Button>
          </Link>
          <Divider />

          <Link to={`${url}/review`}>
            <Button>Review</Button>
          </Link>
        </Box>
      )}

      {admin && (
        <Box>
          <Link to={`${url}/makeAdmin`}>
            <Button>Make Admin</Button>
          </Link>
          <Divider />
          <Link to={`${url}/manageOrders`}>
            <Button>Manage All Orders</Button>
          </Link>
          <Divider />
          <Link to={`${url}/manageProducts`}>
            <Button>Manage All Products</Button>
          </Link>
          <Divider />
          <Link to={`${url}/addProduct`}>
            <Button>Add Product</Button>
          </Link>
        </Box>
      )}
      <Divider />
      {/* /////// */}
      {/* <Link to="/pay">
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
      <Divider /> */}

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
    <>
      <Navigation></Navigation>

      <Box sx={{}}>
        <CssBaseline />

        <AppBar
          position=""
          sx={{
            backgroundColor: "#5569FF",
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Typography sx={{ mt: 1 }} variant="h4">
              Welcome, {user.displayName}!
            </Typography>
            <Typography variant="bodypara">
              Have a look at your dashboard.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Switch>
            <Route exact path={path}></Route>
            <Route path={`${path}/pay`}>
              <Pay></Pay>
            </Route>
            <Route path={`${path}/myOrders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/review`}>
              <Review></Review>
            </Route>
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </Route>
          </Switch>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
