import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import Error from "../ErrorAlert/ErrorAlert";
import Loader from "../Loader/Loader";
function Recipes({ data, i }) {
  const isError = useSelector((state) => state.products.isError);
  const isLoading = useSelector((state) => state.products.isLoading);
  return (
    <Container>
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loader />
      ) : (
        <div>Home</div>
        /*  <Grid container wrap="nowrap">
          {data.map((item, index) => (
            <Box key={index} width={300} marginRight={0.5} my={5}>
              <img
                style={{ width: 300, height: 180 }}
                alt={item.title}
                src={item.src}
              />
              <Box pr={2}>
                <Typography gutterBottom variant="body2">
                  {item.title}
                </Typography>
                <Typography
                  display="block"
                  variant="caption"
                  color="textSecondary"
                >
                  {item.channel}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {`${item.views} • ${item.createdAt}`}
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid> */
      )}
    </Container>
  );
}
export default Recipes;

/* export default function Recipes() {
  return (
    <Box overflow="hidden">
      <Media />
    </Box>
  );
}
 */
