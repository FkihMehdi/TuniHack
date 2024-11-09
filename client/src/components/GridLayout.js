import { Grid, Stack } from "@mui/material";
import React from "react";

const GridLayout = (props) => {
  const { left, right, middle } = props;

  if (middle)
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          {left}
        </Grid>
        <Grid item xs={12} md={6}>
          {middle}
        </Grid>
        <Grid item xs={12} md={3}>
          {right}
        </Grid>
      </Grid>
    );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        {left}
      </Grid>
      <Grid item xs={12} md={4}>
        {right}
      </Grid>
    </Grid>
  );
};

export default GridLayout;
