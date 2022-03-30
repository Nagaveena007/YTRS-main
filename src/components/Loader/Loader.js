import React from "react";
import { Spinner } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";

const Loader = ({ recipes }) => {
  return (
    <div style={{ textAlign: "center" }}>
      {/*   <Spinner
        variant="success"
        animation="border"
        style={{ width: "5vmax", height: "5vmax" }}
      /> */}
      <Grid container>
        {recipes.map((b, i) => (
          <Box style={{ width: "18rem" }} my={5} key={b.id}>
            <Skeleton variant="rect" width={280} height={188} />
            <Box pt={0.5}>
              <Skeleton />
              <Skeleton width="80%" />
            </Box>
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default Loader;
