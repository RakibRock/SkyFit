import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const Extra1 = () => {
  return (
    <div className="products-bg">
      <Container sx={{ color: "white" }}>
        <Typography
          sx={{ paddingTop: "50px", fontWeight: "bold" }}
          variant="h3"
          gutterBottom
          component="div"
        >
          WHY OUR DRONES?
        </Typography>

        <Grid sx={{ marginTop: 10 }} container spacing={2}>
          <Grid
            sx={{ display: "flex", alignItems: "center" }}
            item
            xs={6}
            md={5}
          >
            <Container
              sx={{
                marginRight: -8,
                textAlign: "left",
              }}
            >
              <Typography variant="h2" gutterBottom component="div">
                AERIAL PHOTOGRAPHY
              </Typography>
              <Typography variant="p" gutterBottom component="div">
                A drone is an unmanned aerial vehicle (UAV) that is fitted with
                various equipment including photography and videography leverage
                agile frameworks.
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={6} md={7}>
            <img src="https://i.ibb.co/ZLQZGwn/1.png" alt="" />
          </Grid>
          <Grid sx={{ marginLeft: -2, marginTop: -2 }} item xs={6} md={7}>
            <img src="https://i.ibb.co/BLF7r20/2.png" alt="" />
          </Grid>
          <Grid
            sx={{ display: "flex", alignItems: "center" }}
            item
            xs={6}
            md={5}
          >
            <Container sx={{ textAlign: "right", marginLeft: -5 }}>
              <Typography variant="h2" gutterBottom component="div">
                HIGH RESOLUTION
              </Typography>
              <Typography variant="p" gutterBottom component="div">
                These devices can hover and maneuver above your event capturing
                images and video of not just individuals iterative approaches to
                corporate strategy.
              </Typography>
            </Container>
          </Grid>
          <Grid
            sx={{ display: "flex", alignItems: "center" }}
            item
            xs={6}
            md={6}
          >
            <Container sx={{ textAlign: "left", marginRight: -5 }}>
              <Typography variant="h2" gutterBottom component="div">
                POWERFUL & PORTABLE
              </Typography>
              <Typography variant="p" gutterBottom component="div">
                Drone event videographers can record all the activities <br />{" "}
                (in the water too) throughout the event and record from <br />
                inaccessible foster collaborative proposition.
              </Typography>
            </Container>
          </Grid>
          <Grid sx={{ marginLeft: -6, marginTop: -2 }} item xs={6} md={6}>
            <img src="https://i.ibb.co/DW6vXSF/3.png" alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Extra1;
